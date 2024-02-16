---
sidebar_position: 6
description: 'Order Queue shows pending ACME Orders.'
---

# Order Queue

The Order Queue shows the status of all order workers (default: 3), 
including what order they're working on or if they're idle.

If there are more jobs than workers, the additional pending jobs are
listed as waiting. These jobs will be worked according to their priority.
Manually placed jobs (i.e. the user clicked a button) are high priority,
and automatically queued jobs (e.g. the certificate was due for renewal 
so the application added it) are low priority.

This page is a useful place to check ongoing work, without having to
parse the log file(s).

![Order Queue Page](/img/screenshots/order_queue.png)
