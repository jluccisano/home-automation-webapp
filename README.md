#create release tag
git tag -a v1.0 -m "version 1.0"
git push origin v1.0

#encrypt pass and add in yaml
travis encrypt "pass" --add deploy.user

