import express from "express"
import router from "./src/routes/route.js"
import cors from "cors"

const port = 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", router)

app.listen(port, () => {
    console.log(`app is running on port no ${port}`)
})