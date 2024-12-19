import express from "express"
import reviewRoutes from "./modules/review/controller"

const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use("/reviews", reviewRoutes)

app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`)})
