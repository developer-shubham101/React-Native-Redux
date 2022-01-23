#!/usr/bin/env bash
set -euxo pipefail

TYPE=$1
BUNDLE_TYPE_NAME="bundle"

mkdir -p ./out

cd android

if [ "$BUNDLE_TYPE_NAME" = "$TYPE" ]; then
    ./gradlew clean :app:bundleRelease
    mv ./app/build/outputs/bundle/release/app-release.aab ../out/app-release.aab
else
    ./gradlew clean :app:assembleRelease
    mv ./app/build/outputs/apk/release/app-release.apk ../out/seedpray.apk
fi
