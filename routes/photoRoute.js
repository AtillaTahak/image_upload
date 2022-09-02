import express from "express";
import * as photoController from "../controllers/photoController.js";

const photoRoute = express.Router();
photoRoute.route("/").get(photoController.getPhoto);
photoRoute.route("/").post(photoController.createPhoto);

export default photoRoute;
