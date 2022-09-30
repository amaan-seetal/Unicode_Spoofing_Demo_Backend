# Backend Systems

- The backend system runs on docker-compose with 3 containers :

  - Real website webserver
  - Fake website webserver
  - API web server for the hacker to store all stolen credentials

## Pre-requisite

- Download and install docker desktop: https://www.docker.com/products/docker-desktop/

</br>

## Usage

- Open a terminal in the root directory and type :
```
docker-compose up
```

The web servers should boot up and will be available on the following addresses:


- Fake website:  http://localhost:4500/
- Real website:  http://localhost:4400/
- Api server  :  http://localhost:4600/