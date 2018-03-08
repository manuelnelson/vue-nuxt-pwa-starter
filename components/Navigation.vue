<template>
    <v-list>
        <v-list-group prepend-icon="person" v-model="accountOpen" no-action @click="openMenu()">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Account</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile  v-if="!$auth.state.loggedIn" route to="/login">
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-if="$auth.state.loggedIn" route :to="'/profile/' + $auth.state.user.id">
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-if="$auth.state.loggedIn" @click="logout()">
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile route to="/inspire">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inspire</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters({
        miniVariant: 'menuItems/miniVariant',
        accountOpen: 'menuItems/accountOpen'
      }),
    },
    methods:{
      openMenu(){
        if(this.miniVariant && !this.accountOpen){
          this.setMinivariant(false);
          this.setAccountOpen(true);
        }
        else if(!this.miniVariant){
          this.setAccountOpen();
        }
      },
      logout(){
        this.$auth.logout()
        this.$router.push('/');
      },
      ...mapMutations({
        setMinivariant: 'menuItems/setMinivariant',
        setAccountOpen: 'menuItems/setAccountOpen',
      })

    }
}
</script>
