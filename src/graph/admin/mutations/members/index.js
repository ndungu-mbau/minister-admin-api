const collection = "users"

const archive = async (args, { hemera }) => {
  const { id: _id } = args[collection]

  const { data } = await await hemera.act({
    topic:'db-service',
    cmd:'update-one',
    collection,
    params: {
      _id,
      archived: true,
    }
  })
  return data
}

const restore = async (args, { hemera }) => {
  const { id: _id } = args[collection]

  const { data } = await await hemera.act({
    topic:'db-service',
    cmd:'update-one',
    collection,
    params: {
      _id,
      archived: false,
    }
  })
  return data
}

export default () => ({
  archive,
  restore
})
