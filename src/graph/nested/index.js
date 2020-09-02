const nested = {
  church: {
    devotions: async (root, { archived = false }, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find',
        collection: 'devotion',
        params: {
          church: root.id,
          archived
        }
      })

      return data
    },
    sermons: async (root, { archived = false }, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find',
        collection: 'sermon',
        params: {
          church: root.id,
          archived
        }
      })

      return data
    },
    events: async (root, { archived = false}, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find',
        collection: 'event',
        params: {
          church: root.id,
          archived
        }
      })

      return data
    },
    notices: async (root, { archived = false }, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find',
        collection: 'notice',
        params: {
          church: root.id,
          archived
        }
      })

      return data
    },
    members: async (root, { archived = false }, { hemera }) => {
      const { data } = await hemera.act({
        topic: 'db-service',
        cmd: 'find',
        collection: 'users',
        params: {
          church: root.id,
          archived
        }
      })

      return data
    },
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
