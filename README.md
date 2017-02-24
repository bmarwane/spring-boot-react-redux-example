# Spring boot + React and Redux example 

### Install

```sh
$ npm install
$ mvn clean install
```

### Run application during dev

#### run server first
```sh
$ mvn spring-boot:run
```

or by running Application class from your IDE.

#### run hot reload server
```sh
$ npm start
```

#### run front-end tests
```sh
$ npm test
```

### Package application for production

```sh
$ mvn clean install
```

this will package the java app + compiled react code into a jar file inside the target folder.

### Run the compiled jar file
```sh
$ java -jar target/react-starter-0.1.0.jar
```
