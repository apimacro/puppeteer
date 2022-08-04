#!/bin/bash
# CONTRIBUTION
## Author: Tom Sapletta
## Created Date: 02.05.2022

## USAGE
# ./screenshot.sh "http://softreck.pl" "softreck.png"
# echo "http://softreck.pl" | ./screenshot.sh

# CONFIG
URL=
[ ! -t 0 ] && IFS='' read -d '' -r URL
[ ! -z "$1" ] && URL=$1
[ -z "$URL" ] && echo "url is empty" && exit
#[ ! -r "$ABS_URL" ] && echo "$ABS_URL not exist" && exit
# START
# node screenshot_base64_img.js "http://softreck.pl"
# node screenshot_base64_img.js "http://4gtutorial.com"
node ./puppeteer/screenshot_base64_img.js $URL
