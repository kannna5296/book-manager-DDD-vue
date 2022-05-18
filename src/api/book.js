import { client } from './client'

export default {
    getList () {
      return client
        .get('/book/search')
        .then(response => (response.data.content))
    },
}