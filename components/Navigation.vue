<template>
    <v-list>
        <v-list-group :prepend-icon="person" v-model="accountOpen" no-action @click="accountOpen = !accountOpen">
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
            <v-icon v-html="bubble_chart"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="Inspire"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

</template>
<script>
export default {
    data() {
        accountOpen: false
    },
    methods:{
        openMenu()
    }
}
</script>
