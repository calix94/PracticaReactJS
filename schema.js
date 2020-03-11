import {buildSchema} from 'graphql'; 

const schema=buildSchema(`
type Cliente{
    id:ID
    nombre:String
    apellido:String
    empresa:String
    emails:[Email]
    edad:Int
    tipo:TipoCliente
    pedidos:[Pedido]
}
type Pedido
{
    producto:String
    precio:Int
}

type Email{
    email:String
}

"""ASIGNA LA CATEGORIA DEL CLIENTE"""
enum TipoCliente{
    BASICO
    PREMIUM
}

type Query
{
    getCliente(id: ID) :Cliente
}

input PedidoInpunt
{
    producto:String
    precio:Int
}


input EmailInput{
    email:String
}

"""Campos para los clientes Nuevos"""
input ClienteInput
{
    id:ID
    nombre:String!
    apellido:String!
    empresa:String!
   emails:[EmailInput]!
    edad:Int!
    tipo:TipoCliente!
    pedidos:[PedidoInpunt]
}

"""Mutations para crear nuevos Clientes"""
type Mutation
{
    #Nombre del Resolver, Input con Datos y Valor que retorna.
    """Te Permite crear nuevos clientes"""
    crearCliente(input: ClienteInput) : Cliente
}
`);

export default schema;