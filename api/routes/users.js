import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
// import router from "./auth.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"
const router = express.Router()

// router.get('/check', verifyToken, (req, res, next) => {
//     res.send("You are authenticated")
// })
// router.get('/check/:id', verifyUser, (req, res, next) => {
//     res.send("You can delete your account")
// })
// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("Admin can delete your account")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getUsers)

export default router