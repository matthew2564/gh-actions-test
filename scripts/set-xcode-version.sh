#!/bin/sh
echo "Set version to: $1"

node scripts/set-config-version.js $1
#cd ios/App
xcrun agvtool new-marketing-version $1
xcrun agvtool new-version -all $1
