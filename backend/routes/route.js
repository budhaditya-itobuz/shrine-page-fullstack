import express from "express"
import { getMembers,getTeam } from "../controller/homeController.js"

const router=express.Router()

router.use('/members',getMembers)

router.use('/team',getTeam)


export default router 