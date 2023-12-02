# ArtfulRwanda

ArtfulRwanda is a dynamic and culturally sensitive online platform designed to showcase the rich tapestry of Rwandan arts, design, and culture. This repository contains the source code for the ArtfulRwanda web application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Configure MongoDB](#configure-mongodb)
  - [Configure Backend](#configure-backend)
  - [Run the Application](#run-the-application)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- A modern web browser

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/ArtfulRwanda.git
cd ArtfulRwanda
```
### Install Dependencies

```bash
# Inside the Frontend folder
cd Frontend
npm install

# Inside the Backend folder
cd ../Backend
npm install
```
###  Configure MongoDB

Install and run MongoDB locally or provide a connection string in `Backend/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/artfulrwanda

```

### Configure Backend

Create a .env file in the Backend folder and set the following variables:

```env
SECRET_KEY=your_secret_key
```
Replace your_secret_key with a secure key for JWT token generation.

### Run the Application

Start the Backend server:

# Inside the Backend folder
```bash
npm start
```
Start the Frontend development server:

# Inside the Frontend folder
```bash
npm run dev
```

## Usage

- **Sign Up:**
  - Create a new account by navigating to the sign-up page.

- **Log In:**
  - Log in using your credentials to access the full functionality of the platform.

- **Profile Page:**
  - After logging in, visit your profile page to explore your account details.

- **Artwork Page:**
  - Access the artwork page to showcase and explore the diverse creations of artists.

- **Event Page:**
  - Explore and engage with events related to Rwandan arts and culture.


## Deployment

The ArtfulRwanda web application is deployed at [Deployment Link]. Visit the deployment to experience the platform online.


## Contributing

Feel free to contribute, report issues, or explore additional features to enhance the ArtfulRwanda experience!





