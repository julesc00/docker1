FROM python:latest
RUN useradd -s /bin/bash unix_user

# Approach 1 to disable executables
RUN find / -perm +600 -type f -exec chmod a-s {} ; ||

USER unix_user
ENTRYPOINT ["bin/bash"]
