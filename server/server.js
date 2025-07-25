import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';
import { 
  generalLimiter, 
  authLimiter, 
  orderLimiter, 
  productLimiter, 
  cartLimiter 
} from './middlewares/rateLimiter.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

const allowedOrigins = ['http://localhost:5173', 'https://grocery-website-fullstack-2r2t.vercel.app']

app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

app.use(generalLimiter);

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.get('/', (req, res) => res.send("API is Working"));

app.use('/api/user', authLimiter, userRouter)
app.use('/api/seller', authLimiter, sellerRouter)
app.use('/api/product', productLimiter, productRouter)
app.use('/api/cart', cartLimiter, cartRouter)
app.use('/api/address', generalLimiter, addressRouter)
app.use('/api/order', orderLimiter, orderRouter)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})