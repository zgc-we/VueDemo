export default {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        subtraction(state) {
            state.count == 0 ? 0 : state.count--;
        } 
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        subtraction(context) {
            context.commit('subtraction')
        }
    }
}