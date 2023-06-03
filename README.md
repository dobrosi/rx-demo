## All-In-One
```shell
docker compose up
```

## Backend
### Build
```shell
cd backend
docker build -t rx-demo-backend .
```
### Run
```shell
docker run --rm -d -p 8080:8080 --name rx-demo-backend rx-demo-backend
```
### Stop
```shell
docker stop rx-demo-backend
```

## Frontend
### Build
```shell
cd frontend
docker build -t rx-demo-frontend .
```
### Run
```shell
docker run --rm -d -p 4200:4200 --name rx-demo-frontend rx-demo-frontend
```
### Stop
```shell
docker stop rx-demo-frontend
```