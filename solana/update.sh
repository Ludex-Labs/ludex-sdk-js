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
  LUDEX_PROTOCOL_REPO=git@github.com:Ludex-Labs/ludex-protocol.git
  LUDEX_NFT_CHALLENGE_REPO=git@github.com:Ludex-Labs/NFTChallenge.git
  INFINITE_ROYAL_REPO=git@github.com:Ludex-Labs/infinite-royal.git
else
  LUDEX_PROTOCOL_REPO=https://github.com/Ludex-Labs/ludex-protocol.git
  LUDEX_NFT_CHALLENGE_REPO=https://github.com/Ludex-Labs/NFTChallenge.git
  INFINITE_ROYAL_REPO=https://github.com/Ludex-Labs/infinite-royal.git
fi

if cd ludex-protocol
then
  git pull
  git checkout $git_pathspec
else
  git clone $LUDEX_PROTOCOL_REPO
  cd ludex-protocol
  git checkout $git_pathspec
fi

anchor build

cp ./target/types/challenge.ts ../../challenge/index.ts

cd ..

if cd NFTChallenge
then
  git pull
else
  git clone $LUDEX_NFT_CHALLENGE_REPO
  cd NFTChallenge
fi

anchor build

cp ./target/types/nft_challenge.ts ../../nft-challenge/index.ts

cd ..

if cd infinite-royal
then
  git pull
else
  git clone $INFINITE_ROYAL_REPO
  cd infinite-royal
fi

anchor build

cp ./target/types/infinite_royal.ts ../../infinite-royal/index.ts

cd ../..

npm version --no-git-tag-version $patch_bump
