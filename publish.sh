#!/bin/bash
set -e

# Build the 
npm run build

sed -e '/prepublishOnly/d' -e 's/.\/lib/./' package.json > ./lib/package.json

pushd lib
npm publish
popd

echo "Done"
