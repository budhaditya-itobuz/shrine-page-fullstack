import { members,team } from "../data/homePage.js"

export const getMembers = async (req, res) => {
    if (!!members)
        res.status(200).json(members)
    else
        res.status(404).json({ message: "File not found!" })
}

export const getTeam = async (req, res) => {
    if (!!team)
        res.status(200).json(team)
    else
        res.status(404).json({ message: "File not found!" })

}