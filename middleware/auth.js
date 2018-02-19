
export default function ({ store, error, root, redirect }) {
    console.log('testing')
    if (!store.state.auth.loggedIn) {
        store.commit('alert/addAlert', {message: "You are not authenticated"}, {root:true})
        redirect('/login')
    }
}