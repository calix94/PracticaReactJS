import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';
const app = express();

//esto es una prueba de subida de github
//segundo commit.
//este es el tercer commit
app.get('/', (req, res) => {
    res.send('Todo Listo');

});



app.use('/graphql', graphqlHTTP({

    //que schema va a usar
    schema,
    //utilizar graphical
    graphiql: true
}));

app.listen(8000, () => console.log('El servidor esta funcionaod'));