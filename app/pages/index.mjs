/** @type {import('@enhance/types').EnhanceElemFn} */
export default function Index({ html, state: { store } }) {

  return html`
<code><pre>${JSON.stringify(store, null, 2)}</pre></code>
  `
}
