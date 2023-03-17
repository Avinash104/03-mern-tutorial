import express from "express"
import { createUser, fetchUser } from "../controllers/user.js"

const router = express.Router()

export default router
  .post("/users", createUser) //CREATE
  .get("/user/:id", fetchUser) //READ
//   .get("/users", fetchAllUsers) //READ
//   .put("/user/:id", updateUser) //UPDATE
//   .patch("/user/:id", patchUser) //UPDATE
//   .delete("/user/:id", deleteUser) //DELETE
