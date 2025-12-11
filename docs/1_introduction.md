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

### Security Considerations

Cert Warden is a home grown project maintained almost entirely by one
person. It was created with home lab use in mind.

Cert Warden stores sensitive key material in its database file. You should
understand what this means before deciding to use Cert Warden and should 
take appropriate action(s) to mitigate this risk. 

:::warning
Compromise of the Cert Warden database completely compromises your PKI.
:::

**It is your responsibility to 
fully evaluate the software, your environment, and your threat model
to determine if this application is appropriate for your
risk tolerance and compliance requirements.**
The warnings contained here, elsewhere in documentation, and within the
GitHub repositories are not exhaustive. You are ultimately responsible for
making good decisions.

:::danger
The software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
:::

### Functional Diagram

![Cert Warden Diagram](/img/docs/function_diagram.webp)
