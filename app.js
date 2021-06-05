require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const db = require("./db");

app.use(express.json());

app.get("/products", async (_, res) => {
  const { rows } = await db.query("SELECT * FROM products");
  res.json(rows);
});

app.get("/products/:id/details", async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [id]);

  if (rows.length === 0) {
    res.status(404).send({ error: "Product not found" });
  } else {
    res.send(rows[0]);
  }
});

app.post("/search", async (req, res) => {
  const { kw } = req.body;
  const { rows } = await db.query(
    "SELECT * FROM products WHERE name ILIKE $1",
    ["%" + kw + "%"]
  );
  res.send(rows);
});

app.post("/cart", async (req, res) => {
  const { productId } = req.body;
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [
    productId,
  ]);

  if (rows.length === 0) {
    res.status(404).send({ error: "Product not found" });
  } else {
    // Don't do anything, just simulate a bit of latency here.
    setTimeout(() => {
      res.status(201).send([rows[0]]);
    }, Math.ceil(Math.random() * 100));
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
