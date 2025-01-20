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

If your ACME Server requires `External Account Binding`, additional fields will be
displayed by Cert Warden for you to input the related values. If this is not required
by your ACME Server, these fields will not be shown. In the event you are re-adding
an existing account that was already bound, you can leave the additional EAB fields
blank.

After clicking register you should see `Account Status: Valid`. Additionally, there
will be an information icon next to the header `Account URL:`. Clicking this icon
will show you the account's URL and a copy button. This is useful if you are creating
detailed CAA records which only authorize specfic account URLs to issue certificates.

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

`Refresh` sends a request to the ACME Server to get the most up-to-date information
about the ACME Account, from the Server. This button is generally not needed.

![Edit Account Page](/img/screenshots/acme_accounts_edit.png)

## Debug PaG

The Debug POST-as-GET (PaG) page allows manual fetching of resources using an ACME
Account.

The ACME specification (RFC 8555) defines a secure method to GET resources by POSTing to the
resource with a JWK instead of GETting the resource (section 6.3). This page allows sending these
secure POST-as-GET requests to a URL of your choosing, using the selected account.
This page then displays both the body of the resulting response as well as the headers
returned by the ACME Server.

This can be useful for troubleshooting, reviewing headers for things like alternate
certificate chains, fetching those alternate chain links, or any number of other tasks
that can be aided by the ability to manually review the plethora of resources that
are used throughout the ACME process.

![Debug POST-as-GET Page](/img/screenshots/acme_accounts_debug_pag.png)
