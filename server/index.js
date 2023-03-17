import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
// import productRouter from "./routes/product.js"
import userRouter from "./routes/user.js"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json()) //body parser to parse json sent in the body of the req
// app.use("/api", productRouter)
app.use("/api", userRouter)

const url = process.env.MONGO_URL
const port = process.env.PORT

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ")
    app.listen(port, () => {
      console.log(`App listening on the port ${port}`)
    })
  })
  .catch((err) => {
    console.error(`Error connecting to 
     database. n${err}`)
  })
