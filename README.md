# DevSecOps Notes
Course: [Udemy - The Complete DevSecOps Course with Docker and Kubernetes](https://www.udemy.com/share/107ohM3@YsAuOMhT4oWdUMMTC-2jH987yHWM3twx0TnEBcUDeapukAIE56LBpa7Qx-jwZtD-TQ==/)

To run this "-t" for tag: `docker build -t myredis .`

Another way to create a container: 
`docker run -d -ti --name python2 python:latest /bin/bash`

We can optimize docker images by chaining commands:
`RUN apt-get update -y && \ apt-get install -y curl postgresql postgresql-client`

Small Python image
`docker pull gcr.io/distroless/python3`

To drop into a shell: 
`docker run -ti python_image`

# DOCKER SECURITY
## Docker Security Principals

### Limit privileges and allow write access to specific directories:  
------ Common Flags ------  
For more flags run: `docker run --help`
- "**-d**" detached
- "**-e**" environment variables
- "**-i**" interactive shell
- "**-t**" tags
- "**-v**" volumes

`docker run -it --read-only python sh`  
`docker run --name mysql --read-only -v /usr/local/bin mysql`  

With multiple volumes declared for write privileges in those dirs.  
`docker run --name mysql --read-only -v /usr/local/bin -v /var/lib/mysql -v /tmp -v /var/run/mysqld -d -e MYSQL_ROOT_PASSWORD=pass123 mysql`

Approach 2 to disable executable functionality but allow specific:  
`docker run -d --cap-drop SETGID --cap-drop SETUID python`

## Docker Capabilities
