import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log("entered post")
    const input = req.body;
    console.log(input);
    res.json(input);
  } catch (err) {
    console.error("/search POST Error: " + err.message);
    res.end();
  }
});

export default router;
