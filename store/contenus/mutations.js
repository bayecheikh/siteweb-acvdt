export default {
    initlist(state, newlist) {
        state.listcontenus = newlist
    },
    initheader(state, newlist) {
        state.headercontenus = newlist
    },
    initdetail(state, newcontenu) {
        state.detailcontenu = newcontenu
    },
    removeItem(state,payload) {
        state.listcontenus = state.listcontenus.filter(item => item.id != payload)
    }
}