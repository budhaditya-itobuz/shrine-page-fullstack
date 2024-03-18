import { members, team, missions ,articles,events} from "../data/homePage.js"
import fs from 'fs'
import path from 'path'
import { StatusCodes } from "http-status-codes"


export const getMembers = async (req, res) => {
    if (!!members)
        res.status(StatusCodes.OK).json(members)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getTeam = async (req, res) => {
    if (!!team)
        res.status(StatusCodes.OK).json(team)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getMission = async (req, res) => {
    if (!!missions)
        res.status(StatusCodes.OK).json(missions)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })

}

export const getArticle= (req,res)=>{
    if (!!articles)
        res.status(StatusCodes.OK).json(articles)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })

}

export const getEvent= (req,res)=>{
    if (!!events)
        res.status(StatusCodes.OK).json(events)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })

}

export const addSuscriber = async (req, res) => {
    try {
        const email = req.body.email
        const filePath = path.join(import.meta.dirname, '../data/suscribers.json')
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        if (data.suscribers.includes(email))
            res.status(StatusCodes.OK).json({ message: "Already Suscribed" })
        else {
            data.suscribers.push(email)
            fs.writeFileSync(filePath, JSON.stringify(data))
            res.status(StatusCodes.OK).json({ message: "Suscribed Successfully" })
        }
    }
    catch (e) {
        res.status(StatusCodes.CONFLICT).json({ message: "Unable to suscribe! Try again latter" })
    }
}