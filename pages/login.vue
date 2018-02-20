<template>
  <v-layout justify-center align-center>
      <v-flex xs12 sm8 md6>
      <v-card>
        <v-form v-if="!$auth.state.loggedIn" v-model="valid" ref="form" @submit.prevent="logIn()" lazy-validation>
          <v-card-title class="headline">Login
          </v-card-title>
          <v-card-text>
              <v-text-field
              label="E-mail"
              v-model="email"
              :rules="[rules.email,rules.required]"
              required
              ></v-text-field>
              <v-text-field
                  name="input-10-1"
                  label="Enter your password"
                  hint="At least 8 characters"
                  v-model="password"
                  :rules="[rules.minLength]"
                  min="8"
                  :append-icon="e1 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  counter
              ></v-text-field>  
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>          
          <v-btn type="submit" color="primary" flat>Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <nuxt-link class="d-block mt-3 mx-3" to="/register">Not Registered? Register Here</nuxt-link>
    </v-flex>
    </v-layout>

    
  </template>
  
<script>

  export default {
    auth: false,
    middleware: ['auth'],
    created(){
    },
    data () {
      return {
        e1: true,
        password: '',
        email: '',
        name: '',
        valid: false,
        rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          minLength: (value) => {
            return value.length > 7 || 'At least 8 Characters'
          }
        }
      }
    },
    methods:{
      logIn(){    
        let that = this;
        if (this.$refs.form.validate()) {          
          this.$auth.login({
            data: {
              email: this.email,
              password: this.password
            }
          }).then((response) => {
            this.$auth.state.loggedIn;
            this.$router.push({name:'index'});
          }).catch((err) => {
            this.$store.commit('alert/addAlert', {message: "You are not authenticated to access that resource"}, {root:true})
          })
        }
      }
    }
  }
</script>