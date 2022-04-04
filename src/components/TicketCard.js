import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDsiplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";

function TicketCard({ color, ticket }) {
  return (
    <div clasName="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="Link">
        <div className="ticket-color"></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDsiplay />
        <ProgressDisplay />
        <PriorityDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
}

export default TicketCard;
