import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
    tareas: [],

    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: '',
    },
  },
  mutations: {
    load(state,payload){
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload);
      console.log(state.tareas);
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
    tarea(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push('/');
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },
    edit(state, payload) {
      state.tareas = state.tareas.map(item =>item.id === payload.id ? payload : item)
      
      router.push('/')
      
      
     
    },
  },
  actions: {
    local({commit}){

      if(localStorage.getItem('tareas')) {
          const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('load' , tareas)
        return
      }
        localStorage.setItem('tareas',JSON.stringify([]))
    },
    setTareas({ commit }, tarea) {
      commit('set', tarea);
    },
    deleteHomework({ commit }, id) {
      commit('eliminar', id);
    },
    setTarea({ commit }, id) {
      commit('tarea', id);
    },
    editHomework({ commit }, tarea) {
      commit('edit', tarea);
    },
  },
  modules: {},
});
