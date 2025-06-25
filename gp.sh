#!/bin/bash

git add .
git rm --cached .env
git commit -m "$1"
git push
