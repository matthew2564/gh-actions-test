#!/bin/sh

# Extract version from package.json
VERSION=$(jq -r .version package.json)

echo "Setting version to: ${VERSION}"

# Pass VERSION as an argument to update config.xml
node scripts/set-config-version.js ${VERSION}

# Update plist files
#cd ios/App
#xcrun agvtool new-marketing-version ${VERSION}
#xcrun agvtool new-version -all ${VERSION}
