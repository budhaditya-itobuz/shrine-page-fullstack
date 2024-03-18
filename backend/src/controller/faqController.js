import { images ,faqs} from "../data/faqPage.js";
import { StatusCodes } from "http-status-codes"


export const getImages = async (req, res) => {
    if (!!images)
        res.status(StatusCodes.OK).json(images)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}

export const getFaqs = async (req, res) => {
    if (!!faqs)
        res.status(StatusCodes.OK).json(faqs)
    else
        res.status(StatusCodes.NOT_FOUND).json({ message: "File not found!" })
}
