import express from "express";
import { deleteUser, getBookingsOfUser, getUserById, updateUser,getAllUsers,singup,login } from "../controllers/user-controllers";

const userRouter = express.Router();

userRouter.get("/",getAllUsers); 
userRouter.get("/:id",getUserById);
userRouter.post("/signup",singup); 
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/:login",login);
userRouter.get("/bookings/:id",getBookingsOfUser);


export default userRouter;
