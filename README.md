# Home Automation WebApp

[![tests][tests]][tests-url]

## Docker

### Build

```bash
docker build -t jluccisano/home-automation-webapp .
```

### Run

```bash
docker run -dit --name home-automation-webapp \
    -p 8515:80 \
    -e SERVER_URL=http://home-automation-server:8514 \
    jluccisano/home-automation-webapp
```

[tests]: http://img.shields.io/travis/jluccisano/home-automation-webapp.svg
[tests-url]: https://travis-ci.org/jluccisano/home-automation-webapp
