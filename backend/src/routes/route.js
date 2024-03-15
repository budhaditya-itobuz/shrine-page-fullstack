import express from "express"
import { getMembers, getTeam, addSuscriber, getMission, getArticle, getEvent } from "../controller/homeController.js"

const homeBaseUrl = "/home"

const home = {
    members: homeBaseUrl + "/members",
    teams: homeBaseUrl + "/teams",
    missions: homeBaseUrl + "/missions",
    articles: homeBaseUrl + "/articles",
    events: homeBaseUrl + "/events"
}




const router = express.Router()

router.get(home.members, getMembers)
router.get(home.teams, getTeam)
router.get(home.missions, getMission)
router.get(home.articles, getArticle)
router.get(home.events, getEvent)

router.post('/addSuscriber', addSuscriber)


export default router 