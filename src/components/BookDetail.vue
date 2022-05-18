<template>
  <div>
BookDetailやで〜
  </div>
</template>

<script>
import book from '@/api/book.js'
export default {
  data () {
    return {
      data: ''
    }
  }, mounted() {
   book.getList().then((res) => (this.list = res))
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