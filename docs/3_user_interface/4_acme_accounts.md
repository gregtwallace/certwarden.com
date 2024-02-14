---
sidebar_position: 4
description: 'ACME Accounts contains functionality to add, edit, and delete ACME accounts.'
---

# ACME Accounts

The ACME Accounts section provides management of accounts.

## View All

The initial page for ACME Accounts is a list of all of the accounts on the server. 

![ACME Accounts Page](/img/screenshots/acme_accounts_all.png)

## New Account

New account is used to create (or import) an account.

Input a name for the account and select the already generated (or imported)
key for the account. Most servers will create an account if an account does
not already exist for a specific key. If you're re-using an account, import
the account key first under the Private Keys tab.

ECDSA P-384 keys are generally preferred for accounts and the option to 
`Disable API Key` should be checked for account keys (so they cannot be
accessed by clients, even with the API Key). This extra step is likely 
unnecessary but there is no harm in a little extra security.

The account must be registered before it can be used for certificates. (See
next section for details.)

![New ACME Account Page](/img/screenshots/acme_accounts_new.png)

### Account Registration

After adding a new account, you will be automatically directed to the 
account's page. This page will contain a `Register` button that must be
utilized before the account is truly 'live' and available for use.

![ACME Account Page Before Registration](/img/screenshots/acme_accounts_pre-register.png)

After clicking register you should see `Account Status: Valid`. If you have
debugging turned on, you will also see the `KID`. The account is now ready for
use.

![ACME Account Page After OK Registration](/img/screenshots/acme_accounts_valid.png)

## Edit Account
 
The edit account page permits editing of basic information like the account name 
and description. It also allows a few different functions.

`Deactivate` disables the account with your ACME provider. This generally cannot
be undone and has a high probability of causing you headaches unless you've 
carefully migrated everything off of the specific account. Only use this 
option if you have a very specific need to do so.

`Change Email` is straightforward and allows you to change the account contact.

`Rollover Key` allows changing the private key associated with an account. This
is necessary in the event of potential or actual key compromise. 

:::warning
A compromised key gives the attacker complete control over the account. Always 
rollover your key if you suspect even the smallest possibility of compromise.
:::

The `KID` is only shown when show debug information is enabled.

![Edit Account Page](/img/screenshots/acme_accounts_edit.png)
