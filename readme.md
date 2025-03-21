```
docker-compose up --build
```

Run this above command to test the application

```
docker build -t my-node-app:v1.0 -f dockerfiles/Dockerfile.prod .
```

Run this command to build a docker image

```
docker run -p 3000:3000 my-node-app:v1.0
```

Run this command to test if the docker image is working properly.

## To publish the docker image to docker hub

```
docker login

docker tag my-node-app:v1.0 devopsngr/my-node-app:v1.0

docker push devopsngr/my-node-app:v1.0
```

## Next Step

use Jenkins to automate the image creation and pushing to Docker Hub
