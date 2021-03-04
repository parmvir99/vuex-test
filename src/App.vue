<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Records</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <router-view/>
    <notif :text="text"  @onCloseNotif="closeNotif()"/>
  </div>
</template>
<script>
import { bus } from './main.js'
import { DataApi } from '@/api'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      text: null
    }
  },
  components: {
    notif: () => import('@/components/notif')
  },
  mounted () {
    this.getRecords()
    bus.$on('openNotif', text => {
      this.text = text
    })
  },
  methods: {
    async getRecords () {
      try {
        const records = await DataApi.getRecords()
        this.storeRecords(records)
      } catch (e) {
        console.log('error', e)
      }
    },
    closeNotif () {
      this.text = null
    },
    ...mapActions([
      'storeRecords'
    ])
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
