<template>
  <div>
    <div class="display-flex">
      <div class="card" v-for="record in records" :key="record.id" @click="notify(record)">
        <h4 class="text-left">{{ record.title }}</h4>
        <p class="text-left">{{ record.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main.js'
import { mapGetters } from 'vuex'
export default {
  name: 'records',
  components: {
  },
  computed: {
    ...mapGetters({
      records: 'records'
    })
  },
  methods: {
    notify (record) {
      bus.$emit('openNotif', record.title)
    }
  }
}
</script>
<style lang="scss" scoped>
.display-flex {
  display:flex;
  flex-wrap: wrap;
}
.card {
  width: 28%;
  padding:20px;
  border:1px solid #e5e5e5;
  margin:10px;
  cursor: pointer;
}
.text-left {
  text-align:left;
}
</style>
