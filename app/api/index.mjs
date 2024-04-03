/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ session }) {
  const sessionUpdate = { foo: `${session.foo || 'foo'}-bar`}

  return {
    session: { ...session, ...sessionUpdate },
    json: sessionUpdate,
  }
}
