import { Router } from "express";
import { getSettings } from "../services/loadSettings.js";

const router = Router();

//render home view
router.get("/", (req, res) => {
    const settings = getSettings();
    res.render("home", {
        theme: settings.interface.theme,
        wallpaper: settings.interface.wallpaper,
        user: settings.preferences.userName
    });
    console.log(getSettings());
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