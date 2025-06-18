import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchTaks } from "../../data/fetchTask";
import { StatusFilter } from "../../components/app/filter/filter";

export const Route = createFileRoute("/board/$board")({
  loader: async ({ params }) => {
    const data = await fetchTaks();
    const filteredTasks = (data.data || []).filter(
      (task) => String(task.project?.id) === params.board,
    );
    return { tasks: filteredTasks };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { tasks } = Route.useLoaderData();

  const statusOrder = ["done", "in progress", "ready for review", "to do"];

  const [selectedStatus, setSelectedStatus] = useState("all");

  const groupedTasks = statusOrder.reduce((acc, status) => {
    acc[status] = tasks.filter(
      (task) => task.statuses?.Name?.toLowerCase() === status,
    );
    return acc;
  }, {});

  const tasksToShow =
    selectedStatus === "all" ? tasks : groupedTasks[selectedStatus] || [];

  return (
    <div>
      <StatusFilter
        statusOrder={statusOrder}
        selectedStatus={selectedStatus}
        onChange={setSelectedStatus}
      />

      <ul>
        {selectedStatus === "all" ? (
          statusOrder.map((status) => (
            <li key={status}>
              <h2>
                <strong>{status}</strong>
              </h2>
              <ul>
                {groupedTasks[status].map((task) => (
                  <li key={task.id}>
                    <Link to={`/board/task/${task.id}`}>{task.Title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>
            <h2>
              <strong>{selectedStatus}</strong>
            </h2>
            <ul>
              {tasksToShow.map((task) => (
                <li key={task.id}>
                  <Link to={`/board/task/${task.id}`}>{task.Title}</Link>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}
