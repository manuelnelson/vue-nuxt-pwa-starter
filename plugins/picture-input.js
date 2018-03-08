import Vue from 'vue'
//import PictureInput from 'vue-picture-input' 
global.File = {}

//Vue.use(PictureInput);

if(process.browser){
    Vue.use(require('vue-picture-input'));
}
