---
sidebar_position: 5
description: 'Certificates contains functionality to add, edit, and delete certificates.'
---

# Certificates

The Certificates section provides management of certificates. Certificates contain
individual ACME orders grouped together. When a client retrieves a certificate, LeGo 
CertHub is designed to return the most recent valid order associated with that
certificate.

## View All

The initial page for Certificates is a list of all of the certificates on the server. 

![Certificates Page](/img/screenshots/certificates_all.png)

## New Certificate

New Certificate is used to create a certificate.

Name, ACME Account, Private Key, and Subject are all mandatory and 
self-explanatory. Additional SANs can also be specified. Subject and
SANs both also support wildcards.

:::tip
To avoid having to manually create a private key for each certificate,
there is an option to select `Generate New Key` which will generate
a new key with the specified algorithm and will give the key the same
name as the certificate.
:::

![New Certificate Page](/img/screenshots/certificates_new.png)

The `Post Processing` contains actions the LeGo server can perform after
each issuance or renewal of a certificate. More information on these options
can be found under [LeGo Client](/docs/using_certificates/lego_client/) and 
[Post Processing Script / Binary](/docs/using_certificates/post_process_bin/).

`CSR Fields` contains other fields that can be customized for the CSR that
is sent to the ACME Provider. However, these fields seem to generally be
ignored by providers.

## Edit Certificate

The Edit Certificate page is generally the same as the add page, with the 
addition of a few things.

`Allow API Key via URL (for Legacy Clients)` permits the specification of the 
API Key in the URL of the API call. This is only for clients that do not 
support setting the API Key in a header (which is the 'proper' way to 
authenticate). This method is discouraged unless absolutely necessary as it 
is generally easier to leak the API key by mistake.

### ACME Orders

The ACME Orders section of the certificate edit screen shows the order 
history for the specific certificate, as well as details about those orders.

After the intitial certificate is created, you must manually click the 
`Place New Order` button to request the initial certificate. Once the initial
order is created and valid, future orders will automatically be placed in
accord with the expiration threshold that is configured.

You can view the DNS Names for a given order, the key tied to it, and there
are several action options:

- `Download` - Only available on `Valid` orders.
- `Revoke` - Only available on `Valid` orders.
- `Post Process` - Only available on `Valid` orders and if the certificate
  is configured for some post processing action. This option is useful to
  test post processing without having to repeatedly place new orders.

![ACME Orders Section of Certificate Page](/img/screenshots/certificates_orders.png)
