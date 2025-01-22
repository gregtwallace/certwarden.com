---
sidebar_position: 1
description: 'Login screen for Cert Warden.'
---

# Login

Self-explanatory login page.

The icon in the lower righthand corner (of all pages of the Web UI) is a theme 
toggle to switch between light and dark theme.

![Login Page](/img/screenshots/login.png)

If [OIDC](/docs/advanced_options/configuration_file/oidc_login/) is enabled in
the Cert Warden config, there will be an additional `OIDC Login` button. If 
local login is disabled, the username and password form will not be rendered.

![Login Page with OIDC](/img/screenshots/login_with_oidc.png)
