# Car Rental Application

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Docker](#docker)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Database](#database)
- [Running the Application](#running-the-application)
- [Accessing the Application](#accessing-the-application)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a Car Rental Application that allows users to search for, view details of, and rent cars. The application consists of a frontend built with Angular and Bootstrap, a backend built with Express and Sequelize, and a MariaDB database. The entire application is dockerized for easy setup and deployment.

## Technologies

- **Frontend**: Angular, Bootstrap
- **Backend**: Express, Sequelize
- **Database**: MariaDB
- **Tools**: Docker, Docker Compose, phpMyAdmin

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

### Docker
The application uses Docker to manage the frontend, backend, and database services. The `docker-compose.yml` file defines the configuration for these services.

### Backend
The backend is built with Express and Sequelize. It connects to a MariaDB database and exposes a REST API for the frontend to interact with.

### Frontend
The frontend is built with Angular and styled with Bootstrap. It provides a user interface for interacting with the car rental services.

### Database
The database is a MariaDB instance managed by Docker. phpMyAdmin is included for database management.

## Running the Application

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/car-rental-app.git
cd car-rental-app
```

2. **Build and start the containers:**
```bash
docker-compose up --build
```

## Accessing the Application
- Frontend: The Angular application will be available at http://localhost:4200
- Backend: The Express API will be available at http://localhost:3000
- phpMyAdmin: Accessible at http://localhost:8080, for managing the MariaDB database
- MariaDB: The database service runs on the default port 3306

## Development

### Backend Development
For backend development, you can run the Express server locally without Docker:
```bash
cd backend
npm install
npm run start
```
### Frontend Development
For backend development, you can run the Express server locally without Docker:
```bash
cd frontend
npm install
ng serve
```