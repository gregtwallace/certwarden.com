---
sidebar_position: 2
---

# Reverse Proxy Configuration

Using a reverse proxy is not officially supported but the following config 
for NGINX should work if you're hosting Cert Warden on a subdomain. If you're not 
using a subdomain, change the location from `/` to `/legocerthub`.

The first item `proxy_pass` should be the protocol, name or ip of your Cert Warden 
server, and the corresponding port number.

```
location / {
  proxy_pass          http://some.example.com:4050;

  proxy_set_header    Host $host;
  proxy_set_header    X-Real-IP $remote_addr;
  proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header    X-Forwarded-Host $host;
  proxy_set_header    X-Forwarded-Proto $scheme;
}
```
