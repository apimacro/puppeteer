# puppeteer.letclient.com

puppeter client to handle the automation on shell perspective with txt data



### create file

login_user_screenshot.csv
```bash
cat << 'EOF' > login_user_screenshot.csv
COMMAND,VALUE
goto_wait,https://premium.pl/auth/login.html
screenshot,screen_login_user.png
EOF
```

### start the client

```bash
node client.js "login_user_screenshot.csv"
```


### show screenshot

![img](screen_login_user.png)


# APIDSL


```js
./apidsl puppeter.csv("login_user_screenshot.csv")
```




portal("websitemap.json","credentials.json").target_user("softreck","home").screen("home.png")

multisitemap.schema_data("premium.map.json","premium.user.json", "download_invoices.js").

node login.commands.js "login.commands.js" "premium.commands.csv"
node login.commands.js "premium.commands.csv"
multisitemap.steps("login.commands.js","premium.commands.csv").
