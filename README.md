 
cd backend
docker build -t angular-backend .
docker run -d --rm -p 8080:8080 angular-backend

cd frontend
docker build -t angular-frontend .
docker run -d --rm -p 4200:4200 angular-frontend
