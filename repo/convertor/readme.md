
## Deploy to Docker


Run command to build Docker image from the project directory DockerFile
`docker build -t employers-interface-validator .`


Run command to create Docker instance 
`docker container run -p 8081:80 --name employers-interface-validator-app --rm -v C:\Users\p0011111\Desktop\INOVA\employers-interface\repo\server-validator:/usr/src/app employers-interface-validator:latest`




REM Build the Docker image into the Docker local instance
docker build -t employers-interface .

REM Activate & Run new instance of the image above
docker container run -p 8080:80 --name employers-interface-server --rm -v C:\Users\p0011111\Desktop\INOVA\employers-interface\repo:/usr/src/app docker build -t employers-interface:latest
