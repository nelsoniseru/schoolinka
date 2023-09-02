import { Router } from "express";
import BlogController from "../controllers/blog.controller";

const router = Router();
const blogController = new BlogController();

router.post("/", blogController.create.bind(blogController));
router.get("/", blogController.getAll.bind(blogController));
router.get("/:id", blogController.getById.bind(blogController));
router.post("/update/:id", blogController.update.bind(blogController));
router.delete("/:id", blogController.delete.bind(blogController));

export default router;
