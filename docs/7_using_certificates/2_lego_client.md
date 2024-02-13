---
sidebar_position: 2
description: "LeGo Client keeps a Docker host's certs updated."
---

# LeGo Client

The LeGo Client is a Docker container that manages the certificates
on a Docker host. On start it fetches the current key and cert from
LeGo CertHub, after which it runs an https server that listens for
update payloads from LeGo CertHub. When an update is received, it 
updates the key and cert on disk and optionally restarts other Docker 
containers (which may be desired if those containers don't automatically
start using new certificates when they're changed on the disk).

The LeGo Client is only intended to be used in a Docker container.

## Configuration

The first step to using LeGo client is to enable it on the relevant
certificate in LeGo CertHub. Go to the certificate, expand the 
`Post Processing` section and click `Enable` under `LeGo Client`.

This will generate a `Client AES Key` that you will need to copy and
paste into the client configuration.

**Client Example Docker Run:**
```
/usr/bin/docker run --name legoclient \
  -p 5055:5055 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /persist/lego/certs:/opt/lego/certs \
  -e TZ=America/New_York \
  -e LEGO_CERTHUB_CLIENT_FILE_UPDATE_TIME_START='04:30' \
  -e LEGO_CERTHUB_CLIENT_FILE_UPDATE_TIME_END='05:45' \
  -e LEGO_CERTHUB_CLIENT_FILE_UPDATE_DAYS_OF_WEEK='Mon Wed Thu' \
  -e LEGO_CERTHUB_CLIENT_RESTART_DOCKER_CONTAINER0='cert_using_app' \
  -e LEGO_CERTHUB_CLIENT_AES_KEY_BASE64='[the key LeGo CertHub generated]' \
  -e LEGO_CERTHUB_CLIENT_SERVER_ADDRESS='https://lego-certhub.example.com' \
  -e LEGO_CERTHUB_CLIENT_KEY_NAME='app.example.com' \
  -e LEGO_CERTHUB_CLIENT_KEY_APIKEY='abcd1234' \
  -e LEGO_CERTHUB_CLIENT_CERT_NAME='app.example.com' \
  -e LEGO_CERTHUB_CLIENT_CERT_APIKEY='1234abcd' \
  ghcr.io/gregtwallace/legocerthub-client:latest
```

One data mount is needed and this is for the storage of key and certificate
files. You should mount this same location to containers using the certificates
but those containers should mount using the read-only option.

:::tip
The docker.sock mount is only required when you want the client to auto
restart other containers.
:::

:::warning
Mounting docker.sock adds another attack vector. If a container mounting 
docker.sock is compromised, the host is effectively compromised. Ensure 
you understand these risks.
:::

Only these environment variables are mandatory:
- `LEGO_CERTHUB_CLIENT_SERVER_ADDRESS` - DNS name of the LeGo server. Must start with 
  https and have a valids ssl certificate.
- `LEGO_CERTHUB_CLIENT_KEY_NAME` - Name of the private key in LeGo server.
- `LEGO_CERTHUB_CLIENT_KEY_APIKEY` - API Key of private key in LeGo server.
- `LEGO_CERTHUB_CLIENT_CERT_NAME` - Name of certificate in LeGo server.
- `LEGO_CERTHUB_CLIENT_CERT_APIKEY` - API Key of certificate in LeGo server.

Additional environment variables can be viewed at:
[https://github.com/gregtwallace/legocerthub-client/blob/main/pkg/main/config.go](https://github.com/gregtwallace/legocerthub-client/blob/main/pkg/main/config.go)

Of particular note are the options for restarting containers and for setting
a time window to permit certificate updates (and container restarts). These
options are helpful to avoid restarts at inopportune times.
