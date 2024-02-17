import express from 'express'
import ProdCtrl from '../controller/product.controller.js';

const router = express.Router();

router.route('/api/products')

.get(ProdCtrl.getAll)
.post(ProdCtrl.create)
.delete(ProdCtrl.deleteAll)

router.param('Id', ProdCtrl.productById)

router.route('/api/products/:Id')
.get(ProdCtrl.getbyId)
.put(ProdCtrl.updateProduct)
.delete(ProdCtrl.deletebyId)


router.get('/api/products?name=[kw]')
.get(ProdCtrl.getByName)

export default router