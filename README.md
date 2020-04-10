# Infos

Node module development template

# Development

## Development Tools

1. Create a new 'build' terminal
2. Create a new 'dev' terminal

## Development Procedure

1. In the **'build' terminal**, run:

```
> npm run build
```

This will cause:

a. The compilation of the application ./dist/index.js
b. Webpack to start wathcing any future source code updates
c. On any future source code update
d. The nodemon application to reload

2. In the **'dev' terminal**, run:

```
> npm start
```

This will cause:

a. The start the nodemon application
b. The nodemon application will keep watching for updates in ./dist/index.js
c. On any detected update, the nodemon application will update

3. Develop your code as you like in the ./src folder

4. Look at the **'dev' terminal** to see the updated application output
