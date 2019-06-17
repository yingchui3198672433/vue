import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        num:0,
        list:[{text:'ss'}]
    },
    mutations:{
        "CHANGE_NUM"(state,action){
            state.num = action === 'add' ? state.num+1 : state.num-1;
        },
        'ADD_LIST'(state,action){
            state.list.push({
                text:action
            })
        }
    }
})
window.store=store;
export default store;