# Home Automation WebApp

[![tests][tests]][tests-url]

## Docker

### Build

```bash
docker build -t jluccisano/chrono .
```

### Run

```bash
docker run -dit --name chrono \
    -p 8515:80 \
    jluccisano/chrono
```

[tests]: http://img.shields.io/travis/jluccisano/chrono.svg
[tests-url]: https://travis-ci.org/jluccisano/chrono
