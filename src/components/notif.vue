<template>
  <div v-if="text">
    <div class="notif">
      <span>{{ text }}</span>
      <span class="close" @click="closeNotif()">x</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notif',
  props: {
    text: {
      required: false,
      type: String
    }
  },
  methods: {
    closeNotif () {
      this.$emit('onCloseNotif')
    }
  }
}
</script>
<style lang="scss" scoped>
.notif {
  background:green;
  padding:20px;
  color:#fff;
  position:absolute;
  right:20px;
  top:20px;
}
.close {
  margin-left:10px;
  font-weight:bold;
  font-size:20px;
  font-family: cursive;
  cursor: pointer;
}
</style>
