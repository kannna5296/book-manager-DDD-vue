<template>
  <div>
    こんにちは
    <BookDetailTable/>
  </div>
</template>

<script>
import BookDetailTable from '../components/BookDetailTable.vue'
import axios from 'axios'

export default {
    components: { BookDetailTable },
  data () {
    return {
      messages: [],
    }
  },
  methods: {
    async getMessages () {
      try {
        const res = await axios.get('http://localhost:3000/book/1')
        if (!res) {
          //Backエンドに任すのか自分で出すのか...
          new Error('書籍一覧を取得できませんでした')
        }
        this.messages = res.data
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>