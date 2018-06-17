read -r -p "Run package release? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then

  echo "What type of update is this: major, minor, patch?"
  read version

  echo "Type your commit message:"
  read message

  V="$(npm --no-git-tag-version version $version -f)"
  npm run bundle
  git add -A
  git commit -m "$message"
  git tag -a $V -m "$message"
  git push origin master --tags

  read -r -p "Publish package? [y/N] " response
  if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
    npm publish
  fi

fi

# read -r -p "Run storybook release? [y/N] " response
# if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
#   REMOTE=$(git config --get remote.deployer.url)
#   echo $REMOTE
#   if [ -z "$REMOTE" ]; then
#     git remote add deployer 'URL_HERE'
#   fi
#   npm run deploy-storybook -- --remote=deployer
# fi
