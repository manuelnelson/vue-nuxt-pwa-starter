<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm8 md4>
      <v-card>
        <v-card-text>
          <v-flex >
            <no-ssr>
              <picture-input @change="onChange" ref="pictureInput" width="300" height="300" accept="image/jpeg,image/png"></picture-input>
            </no-ssr>
            <v-btn color="primary" @click="uploadImage()" flat>Upload</v-btn>
          </v-flex>
        </v-card-text>
        <v-card-title class="headline">{{user.name}}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>                    
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  
</template>


<script>
import PictureInput from 'vue-picture-input'
import {mapMutations,mapGetters} from 'vuex';
import aws from 'aws-sdk'

let s3 = new aws.S3({

})


export default {
  async asyncData({app,params}){
      let user = await app.$axios.$get(`/users/${params.id}`)
      return {user:user}
  },
  data() {
    return {
      profileImage: null
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange(image){
      this.profileImage = image;
      console.log(this.$refs.pictureInput.file)
      //console.log(image); 
    },
    async uploadImage(){
      this.$axios.defaults.transformRequest.push((data, headers) => { delete headers.common.Authorization; return data });
      let s3SignedUrl = await this.$axios.$get(`/signatures/${encodeURIComponent(this.$refs.pictureInput.file.name)}/${encodeURIComponent(this.$refs.pictureInput.file.type)}`);
      console.log(s3SignedUrl);
      let options = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': this.$refs.pictureInput.file.type
          }
      }
      try{
        console.log(this)
        let message = await this.$axios.$put(s3SignedUrl.url,this.$refs.pictureInput.file, options);
        this.$axios.defaults.transformRequest.pop();
        
        console.log(message)
      } catch(ex){
        this.$axios.defaults.transformRequest.pop();
        console.log(ex)
      }
    }
  }
}
</script>
