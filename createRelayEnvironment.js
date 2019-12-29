const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')


function fetchQuery(
  operation,
  variables,
) {
  return fetch('https://api.graph.cool/relay/v1/ck4qttf5c0fxw0155ej5hnqs7', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
  network,
  store,
})

export default environment
