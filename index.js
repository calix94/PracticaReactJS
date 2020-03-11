import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema'; 

//resolvers
import resolvers from './resolvers';

const root=resolvers;

const app=express();

app.get('/',(req,res)=>{
res.send('Todo Listo');

});



app.use('/graphql',graphqlHTTP({

    //que schema va a usar

    schema,
    //el resolver se pasa como root value 
    rootValue:root,
    //utilizar graphical
    graphiql:true
}));

app.listen(8000,()=>console.log('El servidor esta funcionaod'));