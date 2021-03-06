import Axios from "axios";

export const actions = {
}

export const getters = {
    items: state => state.items,
    miniVariant: state => state.miniVariant,
    accountOpen: state => state.accountOpen
  };

export const mutations = {
    refresh: (state,payload) => {
      state.items = [
        { 
          icon: 'person', 
          title: 'Account', 
          expand: false,
          active: false,
          visible:true,
          action: 'local_activity',
          subitems:[
            { icon: 'person', title: 'Login', to: '/login', visible:false },
            { icon: 'person', title: 'Logout', click: () => this.$auth.logout(), visible:true },
            { icon: 'person', title: 'Profile', to: '/profile', visible:true }
          ] 
        },
        { icon: 'bubble_chart',  title: 'Inspire', to: '/inspire', visible:true }
      ]
    },
    setMinivariant: (state, payload) => {
      if(!payload)
        state.miniVariant = !state.miniVariant;
      else
        state.miniVariant = payload;
    },
    closeGroups: (state) =>{
      state.accountOpen = false;
    },
    setAccountOpen: (state, payload) => {
      if(!payload)
        state.accountOpen = !state.accountOpen;
      else
        state.accountOpen = payload;
    }
  };
  
export const state = () =>  ({
    items: [
      { 
        icon: 'person', 
        title: 'Account', 
        expand: false,
        active: false,
        visible:true,
        action: 'local_activity',
        subitems:[
          { icon: 'person', title: 'Login', to: '/login', visible:false },
          { icon: 'person', title: 'Logout', click: () => this.$auth.logout(), visible:true },
          { icon: 'person', title: 'Profile', to: '/profile', visible:true }
        ] 
      },
      { icon: 'bubble_chart',  title: 'Inspire', to: '/inspire', visible:true }
    ],
    miniVariant: false,
    accountOpen: false
})
