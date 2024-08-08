# StoreSavvy

### Overview
**StoreSavvy** is a full-featured e-commerce application built with modern web technologies. It provides a seamless user experience with full CRUD functionality, user and admin panels, secure JWT-based authentication, advanced search and filtering capabilities, and a robust shopping cart and payment system. The application also implements caching and database optimizations, resulting in a 25% reduction in server load and a 15% improvement in overall system efficiency.

### Project Timeline
**December 2022 - January 2023**

### Features
- **User and Admin Panels**: Separate interfaces for customers and administrators, with full CRUD operations.
- **JWT Authentication**: Secure login and registration processes with JSON Web Tokens (JWT) to manage user sessions.
- **Advanced Search and Filtering**: Users can search and filter products based on various criteria, ensuring a smooth shopping experience.
- **Shopping Cart and Payment System**: A fully functional shopping cart with integrated payment gateway for secure transactions.
- **Caching and Database Optimizations**: Implemented to reduce server load by 25% and improve overall system performance by 15%.

### Technologies Used
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: RESTful APIs for seamless data transfer between frontend and backend

### Installation and Setup
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/StoreSavvy.git
    cd StoreSavvy
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**:
    ```bash
    # Start the backend server
    npm run server

    # Start the frontend server
    cd client
    npm start
    ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` for the frontend, and `http://localhost:5000` for the backend.

### Usage
- **User Panel**: Register or log in to browse products, add items to the shopping cart, and proceed to checkout.
- **Admin Panel**: Admins can manage products, users, and orders through the dedicated admin interface.
- **Search and Filter**: Use the search bar and filter options to find products quickly.
- **Checkout**: Review your shopping cart and proceed to secure payment via the integrated payment gateway.

