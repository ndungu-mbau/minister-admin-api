const collection = "sermon"

const list = async ({ archived = false }, { church, hemera }) => {
  const { data } = await hemera.act({
    topic:'db-service',
    cmd:'find',
    collection,
    params: { church, archived }
  })

  return data
}

const single = async ({ _id }, { hemera }) => {
  const { data } = await hemera.act({
    topic:'db-service',
    cmd:'find-one',
    collection,
    params: { _id }
  })

  return data
}

export { list, single }
