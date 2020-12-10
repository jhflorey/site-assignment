# Testing Assignment 
Using Apollo, and a Node.js HTTP framework (Express.js or Koa), create a GraphQL endpoint
to retrieve a list of properties in a city. SimplyRETS is an API commonly used in real estate and
you will need to use it to retrieve the properties data.

# Project Structure Design
```bash

restDataSource
    - simplyRestApi
shemas
    - simply.shema.js
test
    - simply.test.js
services
    - authenticateMiddleWare.js
utils
    - user.json
.env
server.js

```
## Installation

Installing [nodejs](https://nodejs.org/en/) to install foobar.

```bash
npm install
```

## Usage
Open terminal

```nodejs
npm run serve

```

## Unit test
Open terminal and run this command to start server

```nodejs
npm test

```
## System Design
```bash
- Using 'apollo-server-express' for setup graphql server api
- 'graphql-json-type' for casting json object
- 'lodash' for handling json and array data
- 'apollo-datasource-rest' for request to another api
- Apply simple authentication and basic authentication
```
## Testing rest api
```bash
curl --location --request POST 'http://localhost:4000/graphql/' \
--header 'Authorization: 676cfd34-e706-4cce-87ca-97f947c43bd4' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\r\nsimply(q: \"Houston\") {\r\nproperty\r\naddress{\r\ncity      \r\n}\r\n}\r\n}\r\n","variables":{}}'
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)