const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const url =
  "https://08f6ad93-efc4-402f-92f7-db2552aa6103-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:qoPGTzINQLMjLtCItoNJMKkr:499939356c793f817255c639540e22b6288625b9084e290abd934cc7823709af";

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    header: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
