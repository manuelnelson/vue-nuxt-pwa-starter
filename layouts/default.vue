<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" class="primary white--text">
      <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn class="white--text"
        icon 
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <alerts></alerts>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Alerts from '~/components/global/Alerts.vue'
import {mapGetters} from 'vuex'
  export default {
    computed:{
      userid: () => context.$store.state.auth.user ? context.$store.state.auth.user.id : '' 
    },
    data(context) {
      
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      //   items:[
      //   { 
      //     icon: 'person', 
      //     title: 'Account', 
      //     expand: false,
      //     active: false,
      //     visible:true,
      //     action: 'local_activity',
      //     subitems:[
      //       { icon: 'person', title: 'Login', to: '/login', showWhenLoggedIn:false },
      //       //not sure how to handle dynamic click events - for now since we only have logout we'll hardcode it
      //       { icon: 'person', title: 'Profile', to: `/profile/${this.userid}`, showWhenLoggedIn:true },
      //       { icon: 'person', title: 'Logout', click: 'true', showWhenLoggedIn:true }
      //     ] 
      //   },
      //   { icon: 'bubble_chart',  title: 'Inspire', to: '/inspire', visible:true }
      // ]      
      }
    },
    methods: {
      openMenu(item){
        if(this.miniVariant && !item.active){
          this.miniVariant = false;
          item.active = true;
        }
        else if(!this.miniVariant){
          item.active = !item.active;
        }
      },
      logout(){
        this.$auth.logout()
        this.$router.push('/');
      }
    },
    components:{
      Alerts
    }
  }
</script>
