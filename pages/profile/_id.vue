<template>
  <v-layout>
    <v-flex text-xs-center>
        <v-card>
          <v-card-title class="headline">Login
          </v-card-title>
        <v-card-text>
          <picture-input></picture-input>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>                    
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import PictureInput from 'vue-picture-input';
export default {
  middleware: ['auth'],
  components: {
    PictureInput
  },
  asyncdata(){

  }
}
</script>
