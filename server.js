const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const port = 3001;

const pool = new Pool({
  user: "postgres",
  host: "35.247.148.56",
  database: "postgres",
  password: "123456",
  port: "5432",
});

app.use(cors());

app.get("/api/listings", async (req, res) => {
  try {
    const { rows } = pool.query("SELECT * FROM business;");
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
