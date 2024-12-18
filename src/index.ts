import express from "express"
import reviewRoutes from "./modules/review/controller"


const app = express()
const port = 3000

app.use(express.json())
app.use("/reviews", reviewRoutes)

app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`)})
