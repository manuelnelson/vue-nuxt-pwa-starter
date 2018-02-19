<template>
  <div v-if="alerts">
     <v-alert v-for="(alert,ndx) in alerts" @click="clearAlert(alert)" class="mb-3" :dismissible="true" outline v-bind:key="ndx"  :color="alert.type" :value="true">
       {{alert.message}}
    </v-alert>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      alerts: 'alert/alerts'
    }),
  },
  methods: {
    ...mapMutations({
      clearAlert: 'alert/clearAlert'
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
