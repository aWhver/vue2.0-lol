/**
 * Created by DELL on 2017/4/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      title: '英雄联盟助手',
    },
    mutations: {
      set_title(state,val){
        state.title=val
      }
    }
})

export default store
