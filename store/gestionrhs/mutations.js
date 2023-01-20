export default {
    initlist(state, newlist) {
        state.listgestionrhs = newlist
    },
    initheader(state, newlist) {
        state.headergestionrhs = newlist
    },
    initdetail(state, newgestionrh) {
        state.detailgestionrh = newgestionrh
    },
    removeItem(state,payload) {
        state.listgestionrhs = state.listgestionrhs.filter(item => item.id != payload)
    }
}