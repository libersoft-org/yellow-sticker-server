#!/bin/sh

bun i
screen -dmS yellow-sticker-server bash -c '
echo -ne "\033]0;YELLOW STICKER SERVER\007"
while true; do
 bun server.js || exit 1
done
'
