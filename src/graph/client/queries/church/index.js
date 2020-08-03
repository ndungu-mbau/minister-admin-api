const collection = "church"

const single = async (args, { church, hemera }) => {
  const { data } = await hemera.act({
    topic:'db-service',
    cmd:'find-one',
    collection,
    params:{
      id: church
    }
  })

  return data
}

export { single }
