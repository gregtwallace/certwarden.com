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
