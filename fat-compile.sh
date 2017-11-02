# lein externs > externs/externs.js
# lein cljsbuild clean
lein cljsbuild once fat
RC=$?
if [ "${RC}" -ne "0" ]; then
  afplay roll &
else
  afplay beep &
fi

