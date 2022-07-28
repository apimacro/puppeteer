#!/bin/bash
# CONTRIBUTION
## Author: Tom Sapletta
## Created Date: 02.05.2022

## EXAMPLE
# ./csv.sh "premium.pl/login_user_screenshot.csv"
# echo "login_user_screenshot.csv" | ./csv.sh

# CONFIG
URL=
[ ! -t 0 ] && IFS='' read -d '' -r URL
[ ! -z "$1" ] && URL=$1
[ -z "$URL" ] && echo "url is empty" && exit
#ABS_URL="$(pwd)/$URL"
#[ ! -r "$ABS_URL" ] && echo "$ABS_URL not exist" && exit
# START
node ./puppeteer/screenshot.js $URL