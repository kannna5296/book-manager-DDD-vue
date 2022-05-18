import { client } from './client'

export default {
    getList () {
      return client
        .get('/book/search')
        .then(response => (response.data.content))
    },
    getDetail(id) {
        return client
        .get(`/book/${id}`)
        .then(response => (response.data))
    }
}