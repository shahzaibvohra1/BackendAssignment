import express from 'express'
import prodRouters from './routes/product.routes.js';
import cors from 'cors'

const app = express()

app.get('/',(req,res) => {
    res.status(200).send('{ message: "Welcome to DressStore Application " }')
})
console.log("from express.js on 9")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(prodRouters)

app.use(cors())
export default app