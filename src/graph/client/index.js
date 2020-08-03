import {
  resolvers as clientResolvers
} from './queries'

import clientMutationResolvers from './mutations'

const resolvers = {
  client:(root, args, { user }) => {
    return {
      hello:() => {
        return "World"
      },
      ...clientResolvers
    }
  }
}

const mutations = {
  client: (root, args, { user }) => {
    return {
      ...clientMutationResolvers
    }
  }
}

export {
  resolvers,
  mutations
}
