---
sidebar_position: 10
description: 'Application settings.'
---

# Settings

The settings page contains a few different widgets to control
the application.

![Settings Page](/img/screenshots/settings.png)

## Frontend & Backend Status

These widgets show some basic information about the application's
current state.

## Change Password

This widge allows changing of the password to login. Multiple 
users are not currently supported.

## App Updates

By default, the application checks a remote json file to find the
current version available. This widget will notify of any updates
that are available.

There is no auto-update function built into the web UI.

## Backup and Restore

This widge links to the backup and restore page. The application 
by default automatically backs up locally on a weekly basis. You 
can download backups on this page or create a new backup.

Existing backups can also be deleted.

Restore functionality is not yet implemented.

## Shutdown LeGo

This widget allows for programatic triggering of a shutdown or 
restart of the application.

Depending on how the application is run (e.g. as a service), 
the shutdown command may still lead to a restart via a mechanism 
outside of the control of the application.
