---
sidebar_position: 2
description: 'A LeGo client is being worked on.'
---

# LeGo Client

A LeGo Client is being worked on that will retrieve and manage
certificate files. It will also be able to restart Docker
containers so services load the new files.

Development is in an alpha stage and builds can be found at:
[https://github.com/gregtwallace/legocerthub-client](https://github.com/gregtwallace/legocerthub-client).

:::warning
Use of the client is not yet recommended. Only try the client if you
want to live on the bleeding edge and are okay with failure or
unexpected behavior.

Breaking changes are likely to be frequent during early development. It
is strongly recommended if you deploy the client that you pin the
version to avoid an automatic update breaking your deployment.
:::

## Configuration

Configuration is done entirely via environment variables. The
full list of variables can be viewed at:
[https://github.com/gregtwallace/legocerthub-client/blob/main/pkg/main/config.go](https://github.com/gregtwallace/legocerthub-client/blob/main/pkg/main/config.go)
