# DigitalStorApp

DigitalStorApp is a full-stack web application for digital storage and e-commerce, featuring a Node.js/Express backend and a React/Tailwind frontend.

## Project Structure

```
DigitalStorApp/
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   ├── models/
│   │   ├── token.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   └── .env
├── frontend/
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── build/
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── assets/
│       ├── components/
│       ├── constants/
│       ├── pages/
│       ├── redux/
│       └── store/
└── README.md
```

## Backend
- **Location:** `backend/`
- **Tech:** Node.js, Express
- **Main files:**
  - `index.js`: Entry point for the server
  - `db.js`: Database connection
  - `models/`: Mongoose models for `user` and `token`
  - `routes/`: API routes for authentication and user management
- **Environment:** Configure `.env` for secrets and database URI

## Frontend
- **Location:** `frontend/`
- **Tech:** React, Tailwind CSS
- **Main files:**
  - `src/App.js`: Main React component
  - `src/pages/`: Page components (Home, Cart, Profile, etc.)
  - `src/components/`: UI components
  - `src/redux/`: State management
  - `public/`: Static assets and HTML
  - `build/`: Production build output

## Getting Started

### Backend
1. Navigate to `backend/`
2. Install dependencies:
	```powershell
	npm install
	```
3. Set up `.env` file with required environment variables
4. Start the server:
	```powershell
	npm start
	```

### Frontend
1. Navigate to `frontend/`
2. Install dependencies:
	```powershell
	npm install
	```
3. Start the development server:
	```powershell
	npm start
	```

## Features
- User authentication (register, login)
- User profile management
- Shopping cart and checkout
- Product listings and details
- Responsive design

## License
MIT
to run this pro