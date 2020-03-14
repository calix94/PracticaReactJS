import express from 'express';
//graphql
//import graphqlHTTP from 'express-graphql';

import {ApolloServer} from 'apollo-server-express';
//import { schema } from './data/schema';
import {typeDefs} from './data/schema';
import {resolvers} from './data/resolvers';

const app = express();
const server=new ApolloServer({typeDefs,resolvers });


server.applyMiddleware({app});


app.listen({port:4000},()=>
console.log(`El servidor esta corriendo ${server.graphqlPath}`));






//esto es una prueba de subida de github
//segundo commit.
//este es el tercer commit
// app.get('/', (req, res) => {
//     res.send('Todo Listo');

// });



// app.use('/graphql', graphqlHTTP({

//     //que schema va a usar
//     schema,
//     //utilizar graphical
//     graphiql: true
// }));

// app.listen(8000, () => console.log('El servidor esta funcionaod'));