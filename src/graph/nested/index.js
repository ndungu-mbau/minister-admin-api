const nested = {
  church: {

  },
  devotion: {
    id: async (root, args, { hemera }) => {
      return root._id
    },
    church: async (root, args, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find-one',
        collection: 'church',
        params: {
          id: root.church
        }
      })

      return data
    }
  },
  event: {
    id: async (root, args, { hemera }) => {
      return root._id
    },
    church: async (root, args,  { hemera }) => {
      const { data } = await hemera.act({
        topic:'db-service',
        cmd:'find-one',
        collection: 'church',
        params: {
          id: root.church
        }
      })

      return data
    }
  },
  notice: {
    id: async (root, args, { hemera }) => {
      return root._id
    },
    church: async (root, args,  { hemera }) => {
      const { data } = await hemera.act({
        topic:'db-service',
        cmd:'find-one',
        collection,
        params: {
          id: root.church
        }
      })

      return data
    }
  },
  sermon: {
    id: async (root, args, { hemera }) => {
      return root._id
    },
    church: async (root, args,  { hemera }) => {
      const { data } = await hemera.act({
        topic:'db-service',
        cmd:'find-one',
        collection: 'church',
        params: {
          id: root.church
        }
      })

      return data
    }
  }
}

export { nested }
