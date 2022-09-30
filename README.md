# Backend Systems

- The backend system runs on docker-compose with 3 containers :

<br/>

#### Container [**FakeWebsite**] <br> 
- A web server that imitates the login system for the bank website.

<br/>

#### Container [**RealWebsite**] <br> 
- A web server that provides a login system for the real bank website.

<br/>

### Container [**HackerServer**] <br> 
- A web server that provides a user interface for database management and system configuration


  - Real website webserver
  - Fake website webserver
  - API web server for the hacker to store all stolen credentials

</br>

## Pre-requisite

- Download and install docker desktop: https://www.docker.com/products/docker-desktop/ 


</br>

## Usage (with Hyper-V)

1. Open Docker Desktop
2. Go to Settings > Resources > File-sharing
3. Add the root directory to the list
3. Open a terminal in the root directory and run the following command:

```
    docker-compose up
```

</br>

## Usage (with WSL)

1. Open Docker Desktop
2. Open a terminal in the root directory and run the following command:

````
    docker-compose up
````

</br>

## Servers Access
The web servers should boot up and will be available at the following addresses:

- Fake website:  http://localhost:4500/
- Real website:  http://localhost:4400/
- Api server  :  http://localhost:4600/