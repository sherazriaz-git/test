# Lega

This application was generated using JHipster 6.4.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.4.1](https://www.jhipster.tech/documentation-archive/v6.4.1).

## Development

## Prerequisites

- Node (LTS) ([Link For Installation](https://nodejs.org/en/))
- JAVA 8 Java `sudo apt-get install openjdk-8-jdk-headless`
- Maven `sudo apt-get install mvn`

## Run Lega Local

Run the following command to start the front-end of the application

- npm start

Run the following command to start the back-end (Spring-boot) of the application

- run: mvn spring-boot:run
- ./mvnw

Run These Command in Separate Terminals

For Local Run Lega
Then go to [http://localhost:8080](http://localhost:8080) in your browser.

### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## Building for production

### Packaging as jar

To build the final jar and optimize the Lega application for production, run:

    ./mvnw -Pprod clean verify

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.jar

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./mvnw -Pprod,war clean verify

## Testing

To launch your application's tests, run:

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test

For more information, refer to the [Running tests page][].
