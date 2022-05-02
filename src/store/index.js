import {createStore} from "vuex";

export default createStore({
    state: {
        user: 'Felix',
        events: []
    },
    getters: {},
    mutations: {
        ADD_EVENT(state, event){
            state.events.push(event);
        }
    },
    actions: {},
    modules: {},
});
