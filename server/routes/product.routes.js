import express from 'express'
//mport ProdCtrl from '../controller/product.controller.js';

const router = express.Router();

router.get('/api/products',(req,res) => {
    res.send("get executed");
})

router.get('/api/products/:id', (req,res) => {
    res.send("get id executed");
})

router.post('/api/products',(req,res) =>{
    res.send("post executed");
})

router.put('/api/products/:id', (req,res) => {
    res.send("put executed");
})

router.delete('/api/products/:id', (req,res) => {
    res.send("deleted executed");
})

router.get('/api/products/published', (req,res) => {
    res.send("get id executed");
})

router.get('/api/products?name=[kw]', (req,res) => {
    res.send("get id executed");
})

export default router