# Spaces – Space Rental Platform

**Spaces** is a collaborative full-stack web application that allows users to browse, book, and review unique event spaces. The backend is built with Flask, and the frontend uses React, with PostgreSQL as the database.

## Features

- User authentication and role management  
- Browse and search space listings  
- Create, read, update, and delete (CRUD) operations for spaces, bookings, and reviews  
- Real-time availability management to prevent booking conflicts  
- Responsive and user-friendly interface  
- Collaborative development using GitHub

## Tech Stack

- Backend: Python, Flask, Flask-RESTful  
- Frontend: React, JavaScript, HTML, CSS  
- Database: PostgreSQL  
- Version Control: Git & GitHub

## Installation

1. Clone the repository:  
   `git clone https://github.com/levit3/Spaces-Server.git` (backend)  
   `git clone https://github.com/levit3/Spaces-Client.git` (frontend)

2. Backend Setup:  
   - Navigate to the backend directory  
   - Create and activate a virtual environment  
   - Install dependencies: `pip install -r requirements.txt`  
   - Configure your database URI in environment variables  
   - Run migrations and seed the database  
   - Start the Flask server

3. Frontend Setup:  
   - Navigate to the frontend directory  
   - Install dependencies: `npm install`  
   - Start the React development server: `npm start`

## Usage

- Register or log in to the platform  
- Browse available spaces and their details  
- Book your preferred space for your event  
- Leave reviews and ratings after your booking  
- Manage your bookings and profile

## License

MIT License
