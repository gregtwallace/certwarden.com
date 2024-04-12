---
sidebar_position: 7
description: 'Order Queue shows pending ACME Orders.'
---

# Order Post Processing Queue

The Order Post Processing Queue shows the status of all orders that are 
executing post processing actions, or are awaiting post processing. All 
workers for this work type will always be shown, even if idle.

This work type is specifically Cert Warden working with an ACME Server to actually
get a certificate issued.

Waiting jobs will be worked according to their priority. Manually placed 
jobs (i.e. the user clicked a button) are high priority, and automatically 
queued jobs (e.g. the certificate was due for renewal so the application 
added it) are low priority.

This page is a useful place to check ongoing work, without having to
parse the log file(s).

![Order Queue Page](/img/screenshots/order_post_queue.png)
