# Notes

To run this "-t" for tag: `docker build -t myredis .`

Another way to create a container: 
`docker run -d -ti --name python2 python:latest /bin/bash`

We can optimize docker images by chaining commands:
`RUN apt-get update -y && \ apt-get install -y curl postgresql postgresql-client`