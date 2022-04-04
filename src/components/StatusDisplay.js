function StatusDisplay({ status }) {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "done":
        color = "green";
        break;
      case "working on it":
        color = "yellow";
        break;
      case "stuck":
        color = "red";
        break;
      default:
        color = "gray";
    }
    return color;
  };

  return (
    <div
      className="status-dsiplay"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
}

export default StatusDisplay;
