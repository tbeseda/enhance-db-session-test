import arc from '@architect/functions'

export const handler = arc.http(async function ({ session }) {
  if (!session) session = {}

  const sessionUpdate = { foo: `${session.foo || 'foo'}-ARC`}
  session = { ...session, ...sessionUpdate, arc: true, enhance: false }

  return {
    session,
    json: session,
  }
})
