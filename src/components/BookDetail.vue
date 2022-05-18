<template>
<div>書籍詳細</div>
<div><router-link to="/">一覧へ戻る</router-link></div>
    <table class="detail-table">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>著者</th>
          <th>発売日</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.release_date }}</td>
        </tr>
      </tbody>
    </table>


貸出情報
    <div v-if="book.rental_info != null">
      <table class="detail-table">
        <thead>
        <tr>
          <th>貸出ユーザーID</th>
          <th>貸出日</th>
          <th>返却予定日</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ book.rental_info.user_id }}</td>
          <td>{{ book.rental_info.rental_date }}</td>
          <td>{{ book.rental_info.return_deadline }}</td>
        </tr>
        </tbody>
      </table>
      <br />
    </div>
</template>

<script>
import book from '@/api/book.js'
export default {
  data () {
    return {
      book: ''
    }
  }, mounted() {
   book.getDetail(this.$route.params.id).then((res) => (this.book = res))
  }
}
</script>

<style scoped>
  .detail-table {
    background-color: #b9d08b;
    width: 60%;
    margin-left:auto;
    margin-right:auto;
  }
</style>