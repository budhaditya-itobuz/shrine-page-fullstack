import { hero,videos } from "../data/videoPage.js";
import { StatusCodes } from "http-status-codes"


export const getHero = async (req, res) => {
    if (!!hero)
        res.status(StatusCodes.OK).json(hero)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getVideos = async (req, res) => {
    if (!!videos)
        res.status(StatusCodes.OK).json(videos)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}
