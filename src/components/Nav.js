import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="controls">
        <div className="icon" onClick={() => navigate("/ticket")}>
          {"+"}
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          {"<"}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
