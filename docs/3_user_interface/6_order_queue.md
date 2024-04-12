---
sidebar_position: 6
description: 'Order Queue shows pending ACME Orders.'
---

# Order ACME Fulfillment Queue

The Order ACME Fulfillment Queue shows the status of all orders that are 
in the process of being fulfilled, or are awaiting fulfillment. All 
workers for this work type will always be shown, even if idle.

This work type is specifically Cert Warden working with an ACME Server to actually
get a certificate issued.

Waiting jobs will be worked according to their priority. Manually placed 
jobs (i.e. the user clicked a button) are high priority, and automatically 
queued jobs (e.g. the certificate was due for renewal so the application 
added it) are low priority.

This page is a useful place to check ongoing work, without having to
parse the log file(s).

![Order Queue Page](/img/screenshots/order_queue.png)
