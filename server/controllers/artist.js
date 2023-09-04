import express from "express";
import pool from "../db.js";

export const getAllArtists = async (req, res) => {
  console.log("/artist GET");
  try {
    const selectQuery = await pool.query("SELECT * FROM artist");
    const artists = selectQuery.rows;
    res.json(artists);
  } catch (err) {
    console.log("/artist GET Error: " + err.message);
  }
};
