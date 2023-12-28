# Users

## Technologies used for the backend:

- Golang
- Gin
- Gorm
- cleanenv
- golangci-lint
- Docker
- PostgreSQL

## Technologies used for the frontend:

- TypeScript
- React
- TailwindCSS
- react-hook-form
- React Query
- react-hot-toast
- Vite
- react-icons

## Installation guide for the backend:

- docker-compose up

## Installation guide for the frontend:

- cd frontend
- npm install
- npm run dev

## Endpoints description:

- get all users with pagination:
  - method: GET
  - url: http://localhost:8000/api/v1/users?page={}&page_size={}
  - body: Pagination query
    
- create a new user:
  - method: POST
  - url: http://localhost:8000/api/v1/users
  - body: CreateUser command

- update user:
  - method: PATCH
  - url: http://localhost:8000/api/v1/users/:id
  - body: UpdateUser command

- delete user:
  - method: DELETE
  - url: http://localhost:8000/api/v1/users/:id
  - body: no body
