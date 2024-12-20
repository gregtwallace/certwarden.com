---
sidebar_position: 2
description: "Cert Warden Client keeps a Docker host's certs updated."
---

# Client

The Cert Warden Client is a Docker container that manages the certificates
on a Docker host. On start it fetches the current key and cert from
Cert Warden, after which it runs an https server that listens for
update payloads from Cert Warden. When an update is received, it 
updates the key and cert on disk and optionally restarts other Docker 
containers (which may be desired if those containers don't automatically
start using new certificates when they're changed on the disk).

The Cert Warden Client is only intended to be used in a Docker container.

## Configuration

The first step to using Cert Warden client is to enable it on the relevant
certificate in Cert Warden. Go to the certificate, expand the 
`Post Processing` section and click `Enable` under `Cert Warden Client`.

This will generate a `Client AES Key` that you will need to copy and
paste into the client configuration.

**Client Example Docker Run:**
```
/usr/bin/docker run --name certwardenclient \
  -p 5055:5055 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /persist/certwardenclient/certs:/opt/certwarden/certs \
  -e TZ=America/New_York \
  -e CW_CLIENT_FILE_UPDATE_TIME_START='04:30' \
  -e CW_CLIENT_FILE_UPDATE_TIME_END='05:45' \
  -e CW_CLIENT_FILE_UPDATE_DAYS_OF_WEEK='Mon Wed Thu' \
  -e CW_CLIENT_RESTART_DOCKER_CONTAINER0='cert_using_app' \
  -e CW_CLIENT_AES_KEY_BASE64='[the key Cert Warden CertHub generated]' \
  -e CW_CLIENT_SERVER_ADDRESS='https://certwarden.example.com' \
  -e CW_CLIENT_KEY_NAME='app.example.com' \
  -e CW_CLIENT_KEY_APIKEY='abcd1234' \
  -e CW_CLIENT_CERT_NAME='app.example.com' \
  -e CW_CLIENT_CERT_APIKEY='1234abcd' \
  ghcr.io/gregtwallace/certwarden-client:latest
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
- `CW_CLIENT_AES_KEY_BASE64` - The base64 raw url encoding of AES key used for 
  communication between server and client. Cert Warden generates this on the Server
  side. It is located under "Edit Certificate" > "Post Processing".
- `CW_CLIENT_SERVER_ADDRESS` - DNS name of the Cert Warden server. Must start with 
  https and have a valid ssl certificate.
- `CW_CLIENT_KEY_NAME` - Name of the private key in Cert Warden server.
- `CW_CLIENT_KEY_APIKEY` - API Key of private key in Cert Warden server.
- `CW_CLIENT_CERT_NAME` - Name of certificate in Cert Warden server.
- `CW_CLIENT_CERT_APIKEY` - API Key of certificate in Cert Warden server.

Additional environment variables can be viewed at:
[https://github.com/gregtwallace/certwarden-client/blob/main/pkg/main/config.go](https://github.com/gregtwallace/certwarden-client/blob/main/pkg/main/config.go)

Of particular note are the options for restarting containers and for setting
a time window to permit certificate updates (and container restarts). These
options are helpful to avoid restarts at inopportune times.
