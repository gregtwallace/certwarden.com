---
sidebar_position: 1
description: 'How to configured 3rd party OIDC authentication.'
---

# SSO & OIDC Login

Cert Warden supports 3rd party OIDC for login. To configure OIDC
you must manually edit the Cert Warden config file.

How OIDC works and its general configuration is beyond the scope of 
this document. However, certain Cert Warden specific details are 
specified below.

Modify your configuration file as follows:
```
auth:
    oidc:
        # the first three fields are specified by your OIDC provider:
        # issuer URL might be very picky (e.g., requiring the trailing forward slash)
        issuer_url: 'https://yourIdp.example.com/'
        client_id: 'some-id'
        client_secret: 'some-secret'
        # the redirect url must be the fqdn of your BACKEND certwarden server, and
        # the exact path specified here:
        api_redirect_uri: 'https://your-certwarden-api.example.com:4055/certwarden/api/v1/app/auth/oidc/callback'
#optional - if you want to disable local authentication
    local:
        enabled: false
```

:::tip
Because OIDC errors occur prior to authentication, the frontend will only report
generic `unauthorized` errors. While setting up OIDC it is recommended you enable
debug logging (`log_level: debug` in the config) and review the log files for
more specific error details.
:::

## Idp General Configuration Notes
Your Idp should:
- Support audience `your-certwarden-api.example.com:4055/certwarden/api`
- Support scope `certwarden:superuser` and add this permission to users who should have access.
:::warning
Some Idps do not enforce RBAC by default (e.g., Auth0). You should ensure RBAC is enabled and
test with unprivileged user(s) to ensure they do not have unintended Cert Warden access.
:::
- Add the callback URL specified in the CW config above.
- Add / support the `offline_access` scope.


## Idp Examples

I have only personally tested with Auth0. Other write ups come from contributors and
your mileage may vary.

### Active Directory Federation Services (ADFS)
#### Preparation
The following placeholders are used in this guide:

 - `<certwarden.contoso.com>` is the FQDN to your Cert Warden
 - `<adfs.contoso.com>` is the FQDN your ADFS server
 - `<client id>` is the Server Applications Client Identifier
 - `<shared secret>` is the Server Applications shared secret
#### ADFS Configuration
 1. Open the **AD FS Management** console and browse to **AD FS > Application groups**
 2. In **Actions**, click **Add Application Group...**
 3. Fill in a name ("Cert Warden") and choose **Server application**, click Next
 4. Make note of the Client Identifier, `<client id>`. In **Redirect URI**, add `https://<certwarden.contoso.com>/certwarden/api` and click Next
 5. Choose **Generate a shared secret**, `<shared secret>`, make note of it and click Next, Next and Close. The Application Group is created.
 6. Double-click the **Application Group**  and click **Add application...**
 7. Choose **Web API** and click Next
 8. In the **Identifier**, add both `https://<certwarden.contoso.com>/certwarden/api` *and* the `<client id>` from step 4 as identifiers and click Next
 9. Choose an access control policy if applicable, click Next
 10. In **Permitted Scopes**,  choose `openid`, `profile` and create `certwarden:superadmin` and `offline_access` with **New scope...**, click Next and Close. The ADFS configuration is now finished.
#### Cert Warden configuration
Add the following to Cert Wardens configuration file `config.yaml` and restart the container
```
auth:
    oidc:
	    issuer_url: 'https://<adfs.consoso.com>/adfs'
	    client_id: '<client id>'    
	    client_secret: '<shared secret>'
	    api_redirect_uri: 'https://<certwarden.contoso.com>/certwarden/api/v1/app/auth/oidc/callback'   
    local:    
	    enabled: false
```
Use the **local > enabled** to enable or disable local login.

Tested on Windows Server 2022 / ADFS version 6.0
### Authentik
#### Preparation
The following placeholders are used in this guide:
 - `<certwarden.contoso.com>` is the FQDN to your Cert Warden
 - `<client id>` is the Server Applications Client Identifier
 - `<client secret>` is the Server Applications client secret
 - `<oidc issuer>` is the Authentik issuer URI
#### Authentik configuration
 1. Create a new OAuth2/OpenID Provider under **Applications > Providers** using the following settings<br/>**Name:** Cert Warden<br/>**Authentication flow**: default-authentication-flow<br/>**Authorization flow**: default-provider-authorization-explicit-consent<br/>**Client type**: Confidential<br/>**Client ID**: Either create your own Client ID or use the auto-populated ID<br/>**Client Secret**: Either create your own Client Secret or use the auto-populated secret<br/>Take note of the  `<client id>`  and  `<client secret>`  as they are required when configuring Cert Warden.
 2. **Redirect URIs/Origins (RegEx)**<br/>Strict: `https://<certwarden.contoso.com>/certwarden/api/v1/app/auth/oidc/callback`<br/>**Signing Key**: authentik Self-signed Certificate<br/>Leave everything else as default
 3. Open the new provider you've just created. Make a note of the OpenID Configuration Issuer, `<oidc issuer>`
### Cert Warden configuration
Add the following to Cert Wardens configuration file `config.yaml` and restart the container
```
auth:
    oidc:
	    issuer_url: '<oidc issuer>'
	    client_id: '<client id>'    
	    client_secret: '<client secret>'
	    api_redirect_uri: 'https://<certwarden.contoso.com>/certwarden/api/v1/app/auth/oidc/callback'   
    local:    
	    enabled: false
```
Use the **local > enabled** to enable or disable local login.
Tested on Authentik 2024.12.1
