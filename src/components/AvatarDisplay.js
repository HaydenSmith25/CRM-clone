// import blankAvatar from "../images/blank-profile-picture-973460_480.png";

function AvatarDisplay({ ticket }) {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={
            ticket.avatar
              ? ticket.avatar
              : "blank-profile-picture-973460_480.png"
          }
          alt={"photo of " + ticket.owner}
        />
      </div>
    </div>
  );
}

export default AvatarDisplay;
