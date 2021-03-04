<template>
  <div>
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user',
  components: {
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
