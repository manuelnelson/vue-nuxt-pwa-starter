
export default function ({ store, error, root, redirect }) {
    if (!store.state.auth.loggedIn) {
        store.commit('alert/addAlert', {message: "You are not authenticated"}, {root:true})
        redirect('/login')
    }
}