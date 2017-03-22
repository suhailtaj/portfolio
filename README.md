# Running on Docker

### Download docker on your machine
[Download Docker](https://www.docker.com/products/docker#/)

#### Pull Docker image
```
$ docker pull suhailtaj/myportfolio
```

#### To run application

```
$ docker run -d -p 5000:9000 suhailtaj/myportfolio
```

#### Test the running application

Open the running application in browser: http://localhost:5000