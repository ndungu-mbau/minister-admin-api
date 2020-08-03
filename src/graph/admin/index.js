import {
  resolvers as adminResolvers
} from './queries'

import adminMutationResolvers from './mutations'

const resolvers = {
  admin:(root, args, { user }) => {
    return {
      hello:(root, args, ctx) => {
        console.log({ root, args, ctx })
        return "World"
      },
      ...adminResolvers
    }
  }
}

const mutations = {
  admin: (root, args, { user }) => {
    return {
      hello:(args, ctx) => {
        console.log({ args, ctx })
        return "World"
      },
      ...adminMutationResolvers
    }
  }
}

export {
  resolvers,
  mutations
}
