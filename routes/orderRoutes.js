import express from 'express';
import {
    placeOrder,
    getOrders,
} from '../controllers/orderController.js';

const router = express.Router();

router.post("/", placeOrder);
router.get("/:uid", getOrders);

export default router;