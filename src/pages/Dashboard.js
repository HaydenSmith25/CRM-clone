import TicketCard from "../components/TicketCard";

function Dashboard() {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Hayden Smith",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQG_iji2jRvH_w/profile-displayphoto-shrink_200_200/0/1593910071869?e=1654732800&v=beta&t=vDFQkoeE38qSv3vdbcna2ADuytbS5NqGh7cohNnAikM",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showing how to use NFTs in the safety of your business. Including how to know if one is not geniune.",
      timestamp: "2022-04-03T12:00:00.000Z",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and sell AI Model",
      owner: "Hayden Smith",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQG_iji2jRvH_w/profile-displayphoto-shrink_200_200/0/1593910071869?e=1654732800&v=beta&t=vDFQkoeE38qSv3vdbcna2ADuytbS5NqGh7cohNnAikM",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video about AI",
      timestamp: "2022-04-04T12:00:00.000Z",
    },
    {
      category: "Q2 2022",
      color: "Blue",
      title: "Build a Bot",
      owner: "Hayden Smith",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQG_iji2jRvH_w/profile-displayphoto-shrink_200_200/0/1593910071869?e=1654732800&v=beta&t=vDFQkoeE38qSv3vdbcna2ADuytbS5NqGh7cohNnAikM",
      status: "working on it",
      priority: 3,
      progress: 10,
      description: "Make a video about making a bot",
      timestamp: "2022-04-06T12:00:00.000Z",
    },
  ];

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIdx) => (
            <div key={categoryIdx}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIdx] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
