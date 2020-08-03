require("babel-polyfill")
import "graphql-import-node"
import { importSchema } from 'graphql-import'

import {
  resolvers as clientResolvers,
  mutations as clientMutations
} from './client'

import {
  resolvers as adminResolvers,
  mutations as adminMutations
} from './admin'

import { nested } from "./nested"

const typeDefs = importSchema("./schema.graphql")

const Query = {
  hello:() => "World",
  ...clientResolvers,
  ...adminResolvers
}

const Mutation = {
  hello: () => "Mutation world",
  ...clientMutations,
  ...adminMutations
}

const root = {
  Query,
  Mutation
}

Object.assign(root, nested)

export {
  typeDefs,
  root
}
