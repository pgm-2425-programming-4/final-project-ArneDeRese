import { createFileRoute } from '@tanstack/react-router'
import { Board } from '../../components/app/board/board'
import { fetchTaks } from '../../data/fetchTask'
import { useEffect, useState } from "react"

export const Route = createFileRoute('/board/$board')({
  component: RouteComponent,
})

function RouteComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTaks();
      setTasks(data.data || []);
    }
    loadTasks();
  }, []);

  return (
    <Board tasks={tasks} />
  );
}
