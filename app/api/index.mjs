/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ session }) {
  const sessionUpdate = { foo: `${session.foo || 'foo'}-ENH`}
  session = { ...session, ...sessionUpdate, arc: false, enhance: true }

  return {
    session,
    json: session,
  }
}
