import { heroImages, teams } from "../data/teamPage.js";
import { StatusCodes } from "http-status-codes"


export const getTeam = async (req, res) => {
    if (!!teams)
        res.status(StatusCodes.OK).json(teams)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getHeroImages = async (req, res) => {
    if (!!heroImages)
        res.status(StatusCodes.OK).json(heroImages)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}
