
## Deploy to Docker

Run command to create to Production services folders

Run command to create to change pathes in the code for Production folders

Run command to build Docker image from the project directory DockerFile
`docker build -t emp-intrfc .`

Run command to create Docker instance 
`docker container run -p 8081:80 --name employers-interface-datalayer --rm -v DATALAYER_LOCAL_PATH:/usr/src/app emp-intrfc:latest`

`docker container run -p 8081:80 --name employers-interface-convertor --rm -v CONVERTOR_LOCAL_PATH:/usr/src/app emp-intrfc:latest`


