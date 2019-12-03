# SecurityError demo

1. Setup, either without Docker:

```
npm install
npm run build
npm run start
```

...or with Docker:

```
docker build -t example .
docker run -ti --rm -p "8080:8080" example
```

2. Open http://localhost:8080 and check the console for errors

## result

<img src="./result.png" />
