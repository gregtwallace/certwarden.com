---
sidebar_position: 2
description: 'Some info about the configuration file.'
---

# Configuration File

Generally, Cert Warden should start up fine without making any changes after installation and the default configuration is likely fine for most people. However, there is a
config.yaml file in the application's /data folder that you may wish to review
and change.

The default configuration values can be viewed
[here](https://github.com/gregtwallace/certwarden-backend/blob/master/config.default.yaml)
and an explanation of all possible options can be viewed
[here](https://github.com/gregtwallace/certwarden-backend/blob/master/config.example.yaml).
These links are to the most recent versions but version specific copies of the same files
are included with the Docker image and installation packages.

There are a number of configuration options you might want to change such as which
address to bind to, port numbers, etc. Don't worry about configuring your ACME
service, keys, accounts, certificats, or challenge methods. All of this can be done
in the GUI after your first login.
