#!/bin/bash

# Exclude .env and other unwanted files from being staged
git add --all -- ':!.env' ':!*/other-sensitive-file*'

# Commit with a dynamic message
git commit -m "$1"

# Push to remote
git push