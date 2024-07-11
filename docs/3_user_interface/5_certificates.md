---
sidebar_position: 5
description: 'Certificates contains functionality to add, edit, and delete certificates.'
---

# Certificates

The Certificates section provides management of certificates. Certificates contain
individual ACME orders grouped together. When a client retrieves a certificate, Cert Warden 
is designed to return the most recent valid order associated with that
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

The `Post Processing` contains actions the Cert Warden server can perform after
each issuance or renewal of a certificate. More information on these options
can be found under [Cert Warden Client](/docs/using_certificates/client/) and 
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

### CSR Fields

CSR Fields allow modification of the CSR that is generated and sent to the
ACME Server. By default, only the common name, subject alternate names, and
public key information are sent in the CSR.

ACME Servers may choose to ignore all or some of the additional or modified
information that is provided in the CSR. Including items that the ACME Server
chooses to discard may not result in an error. If you're using custom CSR
settings you should confirm the resulting certificates actually match your
expectation before deploying them into production.

`Preferred Root Cert's Common Name` is not technically something that is a
part of the CSR but it impacts the certificate chain that Cert Warden 
downloads, so I included the option here. This field behaves the same way 
Certbot's `--preferred-chain` option does. That is, you can specify the 
Common Name of the root certificate you want. As an example, Let's Encrypt 
offers a shorter intermediate certificate for EC keys but does not default 
to it as to maximize compatibility. If you want this shorter chain, you 
would set `ISRG Root X2` in this field. In the event the specified root CN
is not returned by the ACME server, Cert Warden will download the default
certificate (instead of failing) and log a Warn message.

`Country`, `State`, `City`, `Organization`, and `Organizational Unit` are all
self explanatory.

![CSR Section, Top Half](/img/screenshots/certificates_csr_1.png)

The `Extra Extensions` section allows specifying additional Extensions to
include in the CSR.

- `Description` - A human readable description that is NOT sent as part of
  the CSR. It is only shown in Cert Warden as a helpful note.
- `OID` - The dot notation form of the OID for the extension.
- `Hex Bytes Value` - The value of the extension, encoded into a hex string.
  As an example, the OCSP Must Staple value is `30:03:02:01:05`. The value
  can be specified without a separator, with a `:` separator between each byte
  or with a space separator between each byte.
- `Critical` - If checked, specifies the extension is critical.

The `Add Must Staple` button automatically adds the OCSP Must Staple extension
with the appropriate value.

![CSR Section, Bottom Half](/img/screenshots/certificates_csr_2.png)

### ACME Orders

The ACME Orders section of the certificate edit screen shows the order 
history for the specific certificate, as well as information about those orders.

After the intitial certificate is created, you must manually click the 
`Place New Order` button to request the initial certificate. Once the initial
order is created and valid, future orders will automatically be placed in
accord with the expiration threshold that is configured.

#### Details

- `List Icon` - Hovering over the list icon will show the DNS identifiers 
  associated with that specific order.
- `Key Icon` - Once an order is finalized, the key icon will appear. Hovering
  will show the key name that was used to finalize that order. Clicking the key
  icon will take you to that key's edit key page.
- `Link Icon` - Once a certificate has been finalized and downloaded by Cert
  Warden the link icon will appear. Hovering over the link icon shows the 
  Common Name of the root certificate for the order.
:::tip
  The data underlying the `Link Icon` was not always available in Cert Warden.
  Orders that were downloaded prior to Cert Warden version 0.22.0 will NOT have
  the key icon. This is normal and will not negatively impact performance, you
  just won't be able to easily see the root CN.
:::

#### Actions

- `Download` - Only available on `Valid` orders.
- `Revoke` - Only available on `Valid` orders.
- `Post Process` - Only available on `Valid` orders and if the certificate
  is configured for some post processing action. This option is useful to
  test post processing without having to repeatedly place new orders.

![ACME Orders Section of Certificate Page](/img/screenshots/certificates_orders.png)
