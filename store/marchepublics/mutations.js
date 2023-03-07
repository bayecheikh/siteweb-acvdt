export default {
    initlist(state, newlist) {
        state.listmarchepublics = newlist
    },
    initheader(state, newlist) {
        state.headermarchepublics = newlist
    },
    initdetail(state, newmarchepublic) {
        state.detailmarchepublic = newmarchepublic
    },
    removeItem(state,payload) {
        state.listmarchepublics = state.listmarchepublics.filter(item => item.id != payload)
    }
}