import express from "express"
import * as homeController from "../controller/homeController.js"
import * as aboutController from "../controller/aboutController.js"
import * as faqcontroller from "../controller/faqController.js"
import * as galleryController from "../controller/galleryController.js"
import * as teamController from "../controller/teamController.js"
import * as videoController from "../controller/videoController.js"

const router = express.Router()

const homeBaseUrl = "/home"
const aboutBaseUrl = "/about"
const faqBaseUrl = "/faq"
const galleryBaseUrl = "/gallery"
const teamBaseUrl = "/team"
const videoBaseUrl = "/video"

const home = {
    members: homeBaseUrl + "/members",
    teams: homeBaseUrl + "/teams",
    missions: homeBaseUrl + "/missions",
    articles: homeBaseUrl + "/articles",
    events: homeBaseUrl + "/events",
    addSuscriber: homeBaseUrl + "/addSuscriber"
}

const about = {
    missions: aboutBaseUrl + "/missions",
    stats: aboutBaseUrl + "/stats"
}

const faq = {
    images: faqBaseUrl + "/images",
    faqs: faqBaseUrl + "/faqs"
}

const gallery = {
    images: galleryBaseUrl + "/images",
    heroImages: galleryBaseUrl + "/heroImages"
}

const team = {
    heroImages: teamBaseUrl + "/heroImages",
    teams: teamBaseUrl + "/teams"
}

const video = {
    videos: videoBaseUrl + "/videos",
    hero: videoBaseUrl + "/hero"
}





router.get(home.members, homeController.getMembers)
router.get(home.teams, homeController.getTeam)
router.get(home.missions, homeController.getMission)
router.get(home.articles, homeController.getArticle)
router.get(home.events, homeController.getEvent)
router.post(home.addSuscriber, homeController.addSuscriber)


router.get(about.missions, aboutController.getMission)
router.get(about.stats, aboutController.getStat)

router.get(faq.images, faqcontroller.getImages)
router.get(faq.faqs, faqcontroller.getFaqs)

router.get(gallery.images, galleryController.getImages)
router.get(gallery.heroImages, galleryController.getHeroImages)

router.get(team.heroImages, teamController.getHeroImages)
router.get(team.teams, teamController.getTeam)

router.get(video.hero,videoController.getHero)
router.get(video.videos,videoController.getVideos)

export default router 