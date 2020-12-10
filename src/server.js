
const express = require('express');
require('dotenv').config();
const authorizer = require('./services/authenticateMiddleWare.js');
const { typeDefs }= require('./schemas/simply.shema');
const SimplyRestAPI = require('./restDataSource/simplyRetsApi.js');
const GraphQLJSON = require('graphql-type-json');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));
// Middleware checking header token befor access to server
// Reject error token
app.use([authorizer.verifyToken]);

// Set default format
app.use(function (req, res, next) {
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
 

// Root router
app.get('/', function (req, res) {
	res.send('Nodejs Application')
})

// A map of functions which return data for the schema.
// Trigger request query from client
const resolvers = {
	JSON : GraphQLJSON,
	Query: {
	  simply: async (_source, { q}, { dataSources }) => {
		return dataSources.simplyRetsApi.getProperties(q);
	  }
	},
  };
// Config graphql router and simplyRestApi
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
		simplyRetsApi: new SimplyRestAPI()
    };
  }
});

const appEnv = process.env;
// Aplly apollo express js
server.applyMiddleware({ app });


const start = () => (	
    app.listen(appEnv.PORT, () => {
      console.log("Start nodejs server"); 
	  console.log(`Port: ${appEnv.PORT}`);
	  console.log(`GraphQL Server ready at http://localhost:4000${server.graphqlPath}`)
    })
  );
// Start server
start()