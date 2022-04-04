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
        <div className="ticket-color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDsiplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock />
    </div>
  );
}

export default TicketCard;
