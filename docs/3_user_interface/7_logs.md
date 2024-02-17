---
sidebar_position: 7
description: 'Logs displays the current log file in the app and provides an option to download all logs.'
---

# Logs

The Logs page shows the content of the current log file. Log files are rotated
so if you need to view older logs, use the `Download All Logs` button.

Log entries are in the format:

`[Date], [Time], [Log Level], [Source File], [Message]`

:::tip
If you're having an issue, edit the configuration file and add `'log_level': 
'debug'`. Then retry the problematic action and review the logs.
:::

The `Most Recent Log` is sorted chronologically, with the most recent events 
at the top.

![Logs Page](/img/screenshots/logs.png)
