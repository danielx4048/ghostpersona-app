import express from "express";
const app = express();

// Simple homepage to prove it works
app.get("/", (_req, res) => res.status(200).send("✅ app.ghostpersona.ai is live"));

// IMPORTANT: Render assigns the PORT via env var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
