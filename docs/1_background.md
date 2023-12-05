---
sidebar_position: 1
---

# Background Information

This project came out of my desire to resolve certificate errors
within web services in my home lab without having to set up an ACME
client on every endpoint. After fighting with other solutions and
wanting to learn Golang, I decided to create my own solution.

LeGo CertHub is composed of two components. A Golang backend REST API
and a React frontend. These two pieces are hosted together on the LeGo
server and support is not provided for running them separately (though
it is possible and reasonable to do so).

Generally you set up the certificates you want on LeGo once and LeGo will
automatically renew them on a regular basis. Clients that use the
certificates fetch them from LeGo using a GET api call with an API key.
This eliminates the intricacies of RFC 8555 for all of the certificate
clients and replaces it with one standard secured GET call.

## Functional Diagram

![Lego CertHub logo](/img/docs/function_diagram.webp)
