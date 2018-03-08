import router from 'vue-router';
export const actions = {
    login({commit}, payload){
        this.$auth.login('api/users/login',payload).then((response) =>{
            this.$auth.setToken(response.token)
        })
    },
    register({commit},payload){
        var $that = this;
        this.$axios.$post('/users',payload).then((response) =>{
            $that.$auth.setToken(response.token) 
            $that.$router.push({name:'index'})
        })
    },
    getUser({commit}, payload){
        var $that = this;
        this.$axios.get(`/users/${payload}`).then((response) =>{
            commit('setUser', response.user)            
        })
    }
}

export const getters = {
    user: state => state.user,
    token: state => state.token
  };
  
export const mutations = {
    removeLogin: state => {
      state.user = null;
      state.token = null;
    },
    setLogin: (state, payload) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setUser: (state, payload) => {
        state.user = payload.user;
      }    
    };

export const state = () => ({
    user:null,
    token: null,
})

