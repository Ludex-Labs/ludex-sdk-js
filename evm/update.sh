#!/bin/bash

set +x

OPTIND=1         # Reset in case getopts has been used previously in the shell.

use_ssh=0
git_pathspec=main

read -r -d '' help_msg <<- EOF
Usage: $0 [-s] [-g <git pathspec>] [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git ]

  <newversion> package version to set after updating, default: patch

  -s use ssh, clones the evm_ftwagers repo using ssh instead of https

  -g git pathspec, the tag, branch, commit hash to update from, default: main
EOF

while getopts "sg:h" opt; do
  case "$opt" in
    s)  use_ssh=1
      ;;
    g)  git_pathspec=$OPTARG
      ;;
    h)
        echo "$help_msg"
        exit 0
      ;;
  esac
done

shift $((OPTIND-1))

patch_bump=patch

if [[ -n $1 ]]
then
  patch_bump=$1
fi

if cd tmp
then
  :
else
  mkdir tmp
  cd tmp
fi

if [ $use_ssh -eq 1 ]
then
  EVM_REPO=git@github.com:Ludex-Labs/evm-ftwagers.git
else
  EVM_REPO=https://github.com/Ludex-Labs/evm-ftwagers.git
fi

if cd evm-ftwagers
then
  git pull
  git checkout $git_pathspec
else
  git clone $EVM_REPO
  cd evm-ftwagers
  git checkout $git_pathspec
fi

npm ci
# this is a throwaway private key, this is already on the internet, we just need one so hardhat doesn't complain although we shouldn't need it
DEPLOY_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 npm run build

cp ./typechain-types/common.ts ../../generated/common.ts

cp ./typechain-types/contracts/FtWagerPool.ts ../../generated/contracts/FtWagerPool.ts
cp ./typechain-types/factories/contracts/FtWagerPool__factory.ts ../../generated/factories/contracts/FtWagerPool__factory.ts
cp ./typechain-types/contracts/Ludex.ts ../../generated/contracts/Ludex.ts
cp ./typechain-types/factories/contracts/Ludex__factory.ts ../../generated/factories/contracts/Ludex__factory.ts
cp ./typechain-types/contracts/NativePool.ts ../../generated/contracts/NativePool.ts
cp ./typechain-types/factories/contracts/NativePool__factory.ts ../../generated/factories/contracts/NativePool__factory.ts

cd ../..

npm version --no-git-tag-version $patch_bump
