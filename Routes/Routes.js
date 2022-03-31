import express from "express";
import createRoomControllers from "../Controllers/controllers.js";

const router = express.Router();

router.post(
  "/create-room",
  async (req, res) => {
    createRoomControllers(req, res);
  }
);

export default router;
