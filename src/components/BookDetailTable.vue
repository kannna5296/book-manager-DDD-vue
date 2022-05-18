<template>
  <div class="detail-table">
    書籍詳細情報テーブルです
    <table>
      <thead style="display: block;">
        <tr>
          <th>書籍ID</th>
          <th>タイトル</th>
          <th>タイトル（カナ）</th>
          <th>作者</th>
          <th>作者（カナ）</th>
          <th>発売日</th>
          <th>ステータス</th>
      </tr>
      </thead> 
      <tbody style="display: block;">
        <tr v-for="book in list" :key="book">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.kana_title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.kana_author }}</td>
          <td>{{ book.release_date }}</td>
          <td v-if="book.is_rental" class="book">貸出中</td><td v-else class="book">貸出可</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import book from '@/api/book.js'
export default {
  data () {
    return {
      list: []
    }
  }, mounted() {
   book.getList().then((res) => (this.list = res))
  }
}
</script>

<style scoped>
  .detail-table {
    background: #aaaa;
    margin-left:auto;
    margin-right:auto;
  }
  thead {
    width: 100%;
  }
</style>