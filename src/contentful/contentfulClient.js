import { createClient } from 'contentful'

function initClient() {
  const client = createClient({
    space: 'vi5mrlcy449e',
    accessToken: '89cBhaVFq9tZfalgug5eEkQKnQ1He7qoFiupemy0xiE',
    host: 'cdn.contentful.com'
  })

  return client
}

export { initClient }
