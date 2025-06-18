
 export function StatusFilter({ statusOrder, selectedStatus, onChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={() => onChange('all')}
        style={{ fontWeight: selectedStatus === 'all' ? 'bold' : 'normal' }}
      >
        All
      </button>
      {statusOrder.map(status => (
        <button
          key={status}
          onClick={() => onChange(status)}
          style={{
            marginLeft: 8,
            fontWeight: selectedStatus === status ? 'bold' : 'normal'
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}