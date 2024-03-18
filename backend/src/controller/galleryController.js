import { images,hero} from "../data/galleryPage.js";
import { StatusCodes } from "http-status-codes"


export const getImages = async (req, res) => {
    if (!!images)
        res.status(StatusCodes.OK).json(images)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getHeroImages = async (req, res) => {
    if (!!hero)
        res.status(StatusCodes.OK).json(hero)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}
