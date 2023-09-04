import express from "express";
import cors from "cors";

import artistRoutes from "./routes/artist.js";
import searchRoutes from "./routes/search.js";

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use("/", artistRoutes);

app.use("/search", searchRoutes);

// Routes
// Get all artists
// Get single artist
// Create artist
// Update artist
// Delete artist

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
