export function StatusFilter({ statusOrder, selectedStatus, onChange }) {
  return (
    <div className="buttons is-centered">
      <button
        className={`button ${selectedStatus === "all" ? "is-link is-light" : ""}`}
        onClick={() => onChange("all")}
      >
        All
      </button>
      {statusOrder.map((status) => (
        <button
          key={status}
          className={`button ${selectedStatus === status ? "is-link" : "is-light"}`}
          onClick={() => onChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
