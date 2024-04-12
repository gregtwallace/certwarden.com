---
sidebar_position: 1
---

# Introduction

This project came out of my desire to resolve certificate errors
within web services in my home lab without having to set up an ACME
client on every endpoint. After fighting with other solutions and
wanting to learn Golang, I decided to create my own solution.

Cert Warden is composed of two components. A Golang backend REST API
and a React frontend. These two pieces are hosted together on the Cert 
Warden server and support is not provided for running them separately 
(though it is possible and reasonable to do so).

Generally you set up the certificates you want on Cert Warden once and 
Cert Warden will automatically renew them on a regular basis. Clients 
that use the certificates fetch them from Cert Warden using a GET api 
call with an API key. This eliminates the intricacies of RFC 8555 for 
all of the certificate clients and replaces it with one standard 
secured GET call.

## Functional Diagram

![Cert Warden Diagram](/img/docs/function_diagram.webp)
