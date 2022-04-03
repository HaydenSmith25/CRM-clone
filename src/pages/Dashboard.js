import TicketCard from "../components/TicketCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div classname="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
}

export default Dashboard;
