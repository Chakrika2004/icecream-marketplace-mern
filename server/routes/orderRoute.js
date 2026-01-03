import express from "express";
import authUser from "../middlewares/authUser.js";
import authSeller from "../middlewares/authSeller.js";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderStripe
} from "../controllers/orderController.js";

const orderRouter = express.Router();

// USER ROUTES
orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.get("/user", authUser, getUserOrders);

// SELLER / ADMIN ROUTES
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;
