import express from "express";
import {
  createHouse,
  deleteHouse,
  getAll,
  getById,
  updateHouse,
} from "../controllers/house";

const router = express.Router();

router.route("/").get(getAll).post(createHouse);

router.route("/:id").get(getById).put(updateHouse).delete(deleteHouse);

export default router;
