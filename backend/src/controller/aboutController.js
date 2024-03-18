import {mission,stats} from "../data/aboutPage.js"
import { StatusCodes } from "http-status-codes"



export const getMission = async (req, res) => {
    if (!!mission)
        res.status(StatusCodes.OK).json(mission)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getStat = async (req, res) => {
    if (!!stats)
        res.status(StatusCodes.OK).json(stats)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}