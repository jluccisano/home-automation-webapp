#create release tag
git tag -a v1.0 -m "Release 1.0"
git push --tags origin master


#encrypt pass and add in yaml
travis encrypt "pass" --add deploy.user

