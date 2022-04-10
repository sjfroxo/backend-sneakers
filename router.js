import Router from 'express';
import PostController from "./PostController.js";
import postController from "./PostController.js";

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.put('/posts', postController.update);
router.delete('/posts/:id', postController.delete);

export default router;