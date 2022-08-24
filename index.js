const { ApolloServer } = require('apollo-server-express')
const { 
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault 
} = require('apollo-server-core')
const express = require('express')
const http = require('http')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

require('dotenv').config()

const PORT = process.env.PORT || 8080;

const routes = require('./routes');

(async () => {
    const app = express();
    
    app.use(express.json())

    routes(app, express);
    
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });

    await server.start();
    
    server.applyMiddleware({ 
        app: app,
        path: "/",
    });

    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
    
})();