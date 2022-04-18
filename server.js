const PORT = 4000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const url = "https://api.darksky.net/forecast";
const token =
  "AstraCS:qoPGTzINQLMjLtCItoNJMKkr:499939356c793f817255c639540e22b6288625b9084e290abd934cc7823709af";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
