import express from "express"
import { getMembers,getTeam,addSuscriber,getMission } from "../controller/homeController.js"

const router=express.Router()

router.get('/members',getMembers)
router.get('/teams',getTeam)
router.get("/missions",getMission)
router.get("/articles",getMission)

router.post('/addSuscriber',addSuscriber)


export default router 