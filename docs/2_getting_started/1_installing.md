---
sidebar_position: 1
description: 'Get the application and install it on your system.'
---

# Installing

The application is one unified Go executable, a folder with the compiled frontend,
and some other miscellaneous files.

## Docker

The simplest way to install is to pull the Docker image. The image is available at
[Docker Hub](https://github.com/gregtwallace/certwarden/releases) and
[GitHub Packages](https://github.com/gregtwallace/certwarden/releases).

The Docker image requires a persistent data volume for the `/app/data` path.
Depending on the feature set you want to run, the following ports must be exposed:

- `4050/tcp` Primary HTTP Server
- `4055/tcp` Primary HTTPS Server
- `4060/tcp` HTTP-01 Challenge Server (HTTP)
- `4065/tcp` pprof Debugging (HTTP)
- `4070/tcp` pprof Debugging (HTTPS)

You can also check out the most recent
[docker-compose.yml](https://github.com/gregtwallace/certwarden/blob/master/docker-compose.yml) file.

## Direct Install

For direct installation on Windows or Linux, download the binary release package
from [GitHub](https://github.com/gregtwallace/certwarden/releases) and unpack it.

For convenience, the scripts/ path has an install.sh script that will install the
application and add a service to systemd that will run the application.

If you want a more manual approach, simply unpack the release package in your
desired installation location and then you can run the binary to launch the server.
