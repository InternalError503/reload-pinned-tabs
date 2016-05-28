#!/bin/bash

if [ "$1" == "build" ]; then
    jpm xpi
    exit 1
fi

if [ "$1" == "test" ]; then
    jpm test
    exit 1
fi

if [ "$1" == "run" ]; then
    jpm run
    exit 1
fi

# Important to sign requires API kyes from AMO.
if [ "$1" == "sign" ]; then
    jpm sign --api-key "$2" --api-secret "$2"
    exit 1
fi

echo "Unknown task command, Please check tasks.json and try again!""