#!/usr/bin/env bash
set -euxo pipefail

ENV=$1
PRODUCTION_ENV_NAME="production"

mkdir -p ./out
mkdir -p ./config/.tmp/

echo "Fetching profile"
if [ "$PRODUCTION_ENV_NAME" = "$ENV" ]; then
    echo $(fastlane sigh -o "./config/.tmp/" -q "profile.mobileprovision")
else
    echo $(fastlane sigh --adhoc -o "./config/.tmp/" -q "profile.mobileprovision")
fi

UUID=`/usr/libexec/PlistBuddy -c 'Print :UUID' /dev/stdin <<< $(security cms -D -i ./config/.tmp/profile.mobileprovision)`
echo "Installing profile: $UUID"

echo $(export UUID=${UUID}; cat ./config/build/exportOptions.model | envsubst > ./config/.tmp/exportOptions.plist)

cp ./config/.tmp/profile.mobileprovision "$HOME/Library/MobileDevice/Provisioning Profiles/${UUID}.mobileprovision"

if ! command -v xcpretty &> /dev/null
then
    echo "Please install xpretty."
    echo "https://github.com/xcpretty/xcpretty"
    exit
fi

echo "Archiving the project"
xcodebuild -workspace ios/seedpray.xcworkspace\
  -scheme seedpray clean archive\
  -configuration release\
  -sdk iphoneos\
  -archivePath config/.tmp/seedpray.xcarchive | xcpretty

echo "Exporting IPA file"
xcodebuild\
  -exportArchive\
  -archivePath config/.tmp/seedpray.xcarchive\
  -exportOptionsPlist config/.tmp/exportOptions.plist\
  -exportPath out/ | xcpretty

echo "Cleaning up cache data"
rm -rf config/.tmp/
rm out/DistributionSummary.plist out/ExportOptions.plist out/Packaging.log
