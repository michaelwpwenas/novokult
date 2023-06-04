import express from "express";
import { createKpi, getAllKpis, getKpiById, updateKpi } from "../controllers/kpis.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyToken, createKpi);

/* READ */
router.get("/", verifyToken, getAllKpis);
router.get("/:userId/kpiForm", verifyToken, getKpiById);

/* UPDATE */
router.patch("/:userId/kpiStats", verifyToken, updateKpi);

export default router;
