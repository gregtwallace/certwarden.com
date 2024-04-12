---
sidebar_position: 5
description: 'Creating the first ACME Account.'
---

# First ACME Account

Now that everything is configured, its time to start using Cert Warden. If an 
error is encountered during any of these steps, navigate to `Logs` and 
review the most recent logs (at the top) to find out what went wrong.

## Create A Private Key

The first thing you should do is create (or import) a private key to use
for your ACME account. This applies whether recovering (or moving) an old
account, or creating a new one.

Navigate to `Private Keys` and click `New Key`. Populate the form with 
the desired details.  

:::tip
For account keys you should use the highest bit count for your preferred 
algorithm for added security. Additionally, you should check `Disable 
API Key` to prevent clients from downloading your account keys unless 
they have a specific need to do so.
:::

![New Account Key](/img/screenshots/key_account_new.png)

## Create An ACME Account

The next step is to navigate to `ACME Accounts` and click `New Account`. 
Populate the form with the desired details. 

:::tip
For your first account you should use a **staging server** to ensure 
everything works correctly.
:::

:::warning
Ensure you select the correct `ACME Server` and `Private Key` 
combination, particularly if you're importing an existing account. If 
you select the wrong combination, you may accidentally create a new 
account on a different server.
:::

![New Staging Account](/img/screenshots/account_staging_new.png)

Once submitted, you'll be redirected to the new account. Click the 
`Register` button to register the new account with the ACME Server 
for the account.

The account should now show `Account Status: Valid` and this step is 
complete.

## Repeat For Production

After succesfully completing the above for your staging server  
repeat these steps again for your production server.
