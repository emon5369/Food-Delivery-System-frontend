# 🍕 Food Delivery System

A web-based application designed to simplify the process of ordering food online. This project provides an easy-to-use platform where customers can browse a restaurant's menu and order their favorite foods. It also allows restaurant administrators to manage orders and deliveries efficiently. The system is built using modern web technologies like **React** for the frontend and **PHP** (in a separate repository) for backend processing, with **MySQL** for data storage.

## 🚀 Features

- **User Authentication:** Users can sign up, log in, and manage their account details.
- **Browse Categories & Foods:** Customers can explore food items categorized into different sections.
- **Order Placement:** Customers can place orders, view order details, and track their order status.
- **Coatact Form:** A simple message/feedback form for sharing users feedbak.
- **Admin Panel:** Admins can manage food categories, food items, orders, and delivery personnel.

## 🛠 Technologies Used

- **Frontend:**
  - React
  - React Router DOM
  - Font Awesome for icons
  - Vite for development/build setup
  
- **Backend (Separate Repository):**
  - PHP
  - MySQL
  
- **Dependencies:**
  ```json
  {
    "@fortawesome/free-solid-svg-icons": "^6.6.0",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-modal": "^3.16.1",
    "react-router-dom": "^6.24.1"
  }
  ```

## 🛑 Prerequisites

Before running this project, ensure you have the following:

- Node.js installed
- PHP and MySQL server running on your machine
- Vite installed for development

## 📦 Setup Instructions

### Frontend (This Repository)

1. **Clone the Frontend Repository**
   ```bash
   git clone https://github.com/emon5369/Food-Delivery-System-frontend.git
   ```
   
2. **Install Frontend Dependencies**
   ```bash
   cd Food-Delivery-System-frontend
   npm install
   ```

3. **Run the Frontend**
   ```bash
   npm run dev
   ```

4. **Configure Backend Connection:**
   - Ensure the backend server (PHP) is running and configured correctly.
   - Update the API endpoints in your frontend code if needed.

## 💡 Backend (Separate Repository)

The backend of this project, created with **PHP**, is available in a separate repository:

- [Backend Repository](https://github.com/emon5369/Food-Delivery-System-backend) 

## 📝 Future Improvements

- Implement real-time order updates using web sockets.
- Enhance the user interface for a more responsive experience across all devices.
- Add delivery personnel management functionality.
