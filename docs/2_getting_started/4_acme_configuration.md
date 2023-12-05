---
sidebar_position: 4
description: 'Configure your ACME services.'
---

# ACME Configuration

There are two ACME components that must be configured before you can begin 
using the application.

The first is an ACME Server and the second is a Challenge Solver.

## ACME Servers

ACME Servers are the remote entities that actually issue certificates to you
via the ACME specification.

By default, LeGo includes the Let's Encrypt production and staging servers. 
See [ACME Servers](/docs/user_interface/acme_servers) for details on how to 
change this.

## Challenge Solver

Challenge Solvers facilitate the process of proving control over the domain 
you're requesting a certificate for.

By default LeGo serves http-01 challenges over an http server on port 4070. 
See [Providers (Challenge Solvers)](/docs/user_interface/providers) for 
details on how to change this.
