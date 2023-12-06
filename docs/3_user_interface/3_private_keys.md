---
sidebar_position: 3
description: 'Private Keys contains functionality to add, edit, and delete keys.'
---

# Private Keys

The Private Keys section provides management of keys.

## View All

The initial page for Private Keys is a list of all of the keys on the server. 

![Private Keys Page](/img/screenshots/keys_all.png)

## New Key

New key is used to generate or import a key.

ECDSA keys are generally preferred, unless they're not supported.

`Disable API Key` makes the key inaccessible via client API Calls, even when 
the client posseses the correct API Key.

![New Key Page](/img/screenshots/keys_new.png)

## Edit Key

The edit page provides the ability to update key properties, but you cannot 
change the actual key. If you want a different key, you should delete the 
existing key and create or import a new one.

This page is also used to rotate API Keys using the `New API Key` and 
`Retire Old API Key` buttons. Manual editing of the API Key is also supported 
but not recommended. Using the rotation buttons ensures a cryptographically 
secure value is generated.

`Allow API Key via URL (for Legacy Clients)` permits the specification of the 
API Key in the URL of the API call. This is only for clients that do not 
support setting the API Key in a header (which is the 'proper' way to 
authenticate). This method is discouraged unless absolutely necessary as it 
is generally easier to leak the API key by mistake.

![Edit Key Page](/img/screenshots/keys_edit.png)
