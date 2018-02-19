export default function ({ $axios, redirect, app }) {  
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        //TODO add all necessary error code responses here
        console.log(code)
        switch(code){
            case 400:
                if(Array.isArray(error.response.data.messages))
                    error.response.data.messages.forEach(message => app.store.commit('alert/addAlert', {message: message.message, type: 'warning'}, {root:true}))            
                else
                    app.store.commit('alert/addAlert', {message: error.response.data.messages, type: 'warning'} , {root:true})            
                break;
            case 403:
                app.store.commit('alert/addAlert', {message: "You are not authenticated to access that resource", type:'error'}, {root:true})
                break;
            default:
                app.store.commit('alert/addAlert', {message: "Oops, we've messed up.", type: 'error'}, {root:true})
                //TODO create error page and redirect there
                redirect('/')
                break;

        }
    })
  }