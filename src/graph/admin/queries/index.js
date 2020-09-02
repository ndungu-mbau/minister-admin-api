import {
  list as devotions,
  single as devotion,
} from './devotions'

import {
  list as sermons,
  single as sermon,
} from './sermons'

import {
  list as events,
  single as event,
} from './events'

import {
  list as notices,
  single as notice,
} from './notices'

import {
  single as church,
} from './church'

import {
  list as notes,
  single as note,
} from './notes'

import {
  list as members,
  single as member,
} from './members'

const resolvers = {
  devotions,
  devotion,

  sermons,
  sermon,

  notices,
  notice,

  events,
  event,

  notes,
  note,

  church,

  members,
  member,
}

export {
  resolvers
}
