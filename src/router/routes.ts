import { Router } from "express";
import { ProductRouters } from "../module/products/product.routes";
import { orderRouter } from "../module/order/order.route";

const router = Router()

const moduleRoutes = [

    {
        path:'/products',
        route : ProductRouters
    },
    {
        path:'/orders',
        route:orderRouter
    }
]
moduleRoutes.forEach((route)=>router.use(route.path ,route.route))


export default router ;