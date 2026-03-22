import { Router } from "express";
import "../services/settings.service.js";

const router = Router();

//render home view
router.get("/", (req, res) => {
    res.render("home");
});

//render settings view
router.get("/settings", (req, res) => {
    res.render("settings");
});

//render view of security cameras
router.get("/camera", (req, res) => {
    res.render("camera");
});

//render video player
router.get("/video", (req, res) => {
    res.render("video");
});

//render music player
router.get("/music", (req, res) => {
    res.render("music");
});

export default router;