import express from 'express'
import prodRouters from './routes/product.routes.js';

const app = express()

app.get('/',(req,res) => {
    res.status(200).send('{ message: "Welcome to DressStore Application 2" }')
})
console.log("from express.js on 9")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(prodRouters)

export default app