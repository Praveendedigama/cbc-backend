import express from 'express';
import { createUser ,getUser} from '../controllers/UserController.js';



const userRouter = express.Router();
userRouter.post("/", createUser)
userRouter.get("/", getUser);


export default userRouter;