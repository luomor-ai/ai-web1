#!/bin/bash
cd ..
npm run build:prod
cd ai-web1
rm -rf webroot/*
cp -r ../dist/* webroot
git add .
git commit -a -m 'update'
git push -u origin main
