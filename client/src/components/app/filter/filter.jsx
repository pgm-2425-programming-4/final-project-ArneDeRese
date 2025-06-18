export function StatusFilter({ statusOrder, onChange }) {
  return (
    <div>
      <button onClick={() => onChange("all")}>All</button>
      {statusOrder.map((status) => (
        <button key={status} onClick={() => onChange(status)}>
          {status}
        </button>
      ))}
    </div>
  );
}
