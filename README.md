# Home Automation WebApp

[![tests][tests]][tests-url]


#create release tag
git tag -a v1.0 -m "Release 1.0"
git push --tags origin master


#encrypt pass and add in yaml
travis encrypt "pass" --add deploy.user

sudo docker build -t jluccisano/home-automation-webapp .
sudo docker run -it --name home-automation-webapp \
    -p 8515:8515 \
    jluccisano/home-automation-webapp

https://sebest.github.io/post/using-travis-ci-to-build-docker-images/

travis encrypt DOCKER_USER=username --add
travis encrypt DOCKER_PASS=password --add

[tests]: http://img.shields.io/travis/jluccisano/home-automation-webapp.svg
[tests-url]: https://travis-ci.org/jluccisano/home-automation-webapp
