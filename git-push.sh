#!/bin/sh

git status

# Meminta input file atau direktori untuk di-add
echo "Enter the files or directories you want to add (leave empty to add all): "
read filesToAdd

# Jika tidak ada input, tambahkan semua file
if [ -z "$filesToAdd" ]; then
  git add .
else
  git add $filesToAdd
fi

# Meminta input untuk pesan commit
echo "Enter your commit message: "
read commitMessage

# Meminta input untuk nama branch dengan default 'main'
echo "Enter your branch name (default is main): "
read branchName

# Jika tidak ada input untuk branch name, gunakan 'main'
if [ -z "$branchName" ]; then
  branchName="main"
fi

# Commit dan push
git commit -m "$commitMessage"
git push origin $branchName