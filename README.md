# GroceryGo - Online Grocery Shopping Platform

![Logo](client/src/assets/logo.svg)

GroceryGo is a full-stack e-commerce application for grocery shopping with separate customer and seller interfaces. The platform allows users to browse products by category, add items to cart, manage delivery addresses, and place orders, while sellers can manage their product listings and track orders.

## Features

### For Customers 👨‍👩‍👧‍👦

- **Product Browsing**: Browse products by categories (fruits, vegetables, dairy, bakery, etc.)
- **Search Functionality**: Find products quickly with the search feature
- **Shopping Cart**: Add/remove products, adjust quantities, view cart total
- **User Authentication**: Create an account, login, and manage profile
- **Multiple Addresses**: Add and manage multiple delivery addresses
- **Order Tracking**: View order history and track current orders
- **Responsive Design**: Seamless experience across mobile and desktop devices

### For Sellers 🏪

- **Product Management**: Add, edit, and remove products from inventory
- **Order Processing**: View and manage incoming orders
- **Sales Dashboard**: Track sales performance and inventory

## Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **State Management**: React Context API
- **Styling**: CSS with responsive design
- **UI Components**: Custom components

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary for product images
- **File Upload**: Multer

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account or local MongoDB installation
- Cloudinary account for image storage

### Installation

#### Client Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/grocery-go.git
   cd grocery-go
   ```

2. Install frontend dependencies
   ```bash
   cd client
   npm install
   ```

3. Create a `.env` file in the client directory with the following:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

#### Server Setup
1. Install backend dependencies
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file in the server directory with the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. Start the server
   ```bash
   npm start
   ```

## Project Structure

### Client Structure
```
client/
├── public/             # Public assets
├── src/
│   ├── assets/         # Images, icons, and other static assets
│   ├── components/     # Reusable UI components
│   │   └── seller/     # Seller-specific components
│   ├── context/        # React Context for state management
│   ├── pages/          # Application pages
│   │   └── seller/     # Seller dashboard pages
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

### Server Structure
```
server/
├── configs/            # Configuration files (DB, Cloudinary, etc.)
├── controllers/        # Request handlers
├── middlewares/        # Authentication and other middlewares
├── models/             # MongoDB data models
├── routes/             # API route definitions
└── server.js           # Entry point
```

## API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Product Routes
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `GET /api/products/category/:category` - Get products by category

### Cart Routes
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Order Routes
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Address Routes
- `GET /api/address` - Get user addresses
- `POST /api/address` - Add new address
- `PUT /api/address/:id` - Update address
- `DELETE /api/address/:id` - Delete address

### Seller Routes
- `POST /api/seller/login` - Seller login
- `GET /api/seller/products` - Get seller products
- `POST /api/seller/products` - Add new product
- `PUT /api/seller/products/:id` - Update product
- `DELETE /api/seller/products/:id` - Delete product
- `GET /api/seller/orders` - Get seller orders

## Deployment

The application is configured for deployment to Vercel:

1. Frontend deployment:
   ```bash
   cd client
   vercel
   ```

2. Backend deployment:
   ```bash
   cd server
   vercel
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons and images from various sources in the assets directory
- React.js and Vite for the frontend framework
- Express.js for the backend API
- MongoDB for the database
- Cloudinary for image storage
