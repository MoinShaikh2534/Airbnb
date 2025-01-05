import express from "express";
import {
    getProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
} from "../controllers/properties.js";

const router = express.Router();

router.get("/", getProperties);
router.post("/", createProperty);
router.get("/:id", getProperty);
router.patch("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;
