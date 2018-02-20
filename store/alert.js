import Axios from "axios";

export const actions = {
}

export const getters = {
    alerts: state => state.alerts,
  };

export const mutations = {
    addAlert: (state,payload) => {
      state.alerts.push(payload)
    },
    clearAlerts: (state) => {
      state.alerts = []
    },    
    clearAlert: (state, payload) => {
      state.alerts = state.alerts.filter(alert => alert != payload);
    }    
  };
  
export const state = () => ({
    alerts:[],
})

