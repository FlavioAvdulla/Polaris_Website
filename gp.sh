#!/bin/bash

# Ensure .env is in .gitignore
if ! grep -q ".env" .gitignore; then
  echo ".env" >> .gitignore
fi

# Ensure backend/public/images/ is in .gitignore
if ! grep -q "backend/public/images/" .gitignore && ! grep -q "backend/public/images" .gitignore; then
  echo "backend/public/images/" >> .gitignore
fi

# Untrack .env (if it was ever tracked)
git rm --cached .env 2> /dev/null

# Untrack backend/public/images folder (if it was ever tracked)
git rm -r --cached backend/public/images 2> /dev/null

# Add all non-ignored files
git add .

# Commit & push
git commit -m "$1"
git push