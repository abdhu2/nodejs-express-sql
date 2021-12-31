import express from "express";
import postControllers from "../controllers/postControllers.js";

const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById);

export default router;
