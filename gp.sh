#!/bin/bash

# Ensure .env is in .gitignore
if ! grep -q ".env" .gitignore; then
  echo ".env" >> .gitignore
fi

# Untrack .env (if it was ever tracked)
git rm --cached .env 2> /dev/null

# Add all non-ignored files
git add .

# Commit & push
git commit -m "$1"
git push