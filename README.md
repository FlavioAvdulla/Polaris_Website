# Polaris - Modern E-Commerce Platform


## Preview
![Polaris_01](https://github.com/user-attachments/assets/d4d55896-ec33-4b51-bf3f-bd3bba34b511)


## Overview

Polaris is a full-featured e-commerce platform with a modern tech stack, featuring:
- Multi-vendor product listings
- User authentication with JWT
- Shopping cart and favorites system
- Internationalization support
- Responsive UI with dark/light mode

## Tech Stack

### Frontend
- **React** (v18) with Vite
- **TypeScript** for type safety
- **Tailwind CSS** with animations
- **Radix UI** for accessible components
- **React Router** (v7) for navigation
- **i18next** for internationalization
- **Axios** for API calls
- **Lucide** and **React Icons** for icons

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Zod** for schema validation
- **Resend** for email services
- **CORS** with credentials support
- **Cookie-parser** for session management

## Features

### Frontend
- Multiple navigation layouts
- Product carousels and sections
- FAQ accordion (ShadCN inspired)
- Dark/light theme toggle
- Multi-language support
- Responsive product pages
- Shopping cart and favorites
- User authentication flows

### Backend
- RESTful API endpoints
- JWT authentication
- Session management
- Product CRUD operations
- File upload handling
- Error handling middleware
- Environment configuration

### Installation

**1. Clone the repository:**
git clone [https://github.com/FlavioAvdulla/Food_Delivery_React_Website.git](https://github.com/FlavioAvdulla/Polaris_Website.git)

**2. Install backend dependencies:**
Navigate to the backend folder and install required packages:

`
cd backend
`

`
npm install
`

**3. Install frontend dependencies:**
Navigate to the frontend folder and install required packages:

`
cd frontend
`

`
npm install
`

**4. Configure environment variables:**
Create a `.env` file in the root of the backend directory with the following values (modify based on your setup):
```
NODE_ENV=development
PORT=

# frontend url
APP_ORIGIN=http://localhost:xxxx
# example: mongodb://localhost:27017/{DB_NAME}
MONGO_URI=
JWT_SECRET=
JWT_REFRESH_SECRET=
# a verified sender email
EMAIL_SENDER=
RESEND_API_KEY=
```

**5. Run the application:**
- Start the backend server:

`
cd BackEnd
`

`
npm run dev
`
- Start the frontend development server:

`
cd FrontEnd
`

`
npm run dev
`


## Contact
For any inquiries or issues, feel free to reach out to me:

- Email: **a.flavio4366@gmail.com**
- Phone: **+355 67 63 11 918**
