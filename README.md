# Home Automation WebApp

[![tests][tests]][tests-url]

## Docker

### Build

```bash
docker build -t jluccisano/home-automation-webapp .
```

### Run

```bash
docker run -it --name home-automation-webapp \
    -p 8515:8515 \
    jluccisano/home-automation-webapp
```

[tests]: http://img.shields.io/travis/jluccisano/home-automation-webapp.svg
[tests-url]: https://travis-ci.org/jluccisano/home-automation-webapp
