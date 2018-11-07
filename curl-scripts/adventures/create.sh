#!/bin/bash

API="http://localhost:4741"
URL_PATH="/adventures"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "adventure": {
      "title": "'"${TITLE}"'",
      "place": "'"${PLACE}"'",
      "notes": "'"${NOTES}"'",
      "checked": "'"${CHECKED}"'"
    }
  }'

echo
