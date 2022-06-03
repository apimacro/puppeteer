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



