#!/bin/bash

# Remove .env from Git (keeps local file)
git rm --cached .env  

# Add remaining files
git add .  

# Commit & push
git commit -m "$1"
git push