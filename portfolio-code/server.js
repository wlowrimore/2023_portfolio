const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
