import { createStore } from "vuex";

export default createStore({
  state: {
    Contador: 1,
    frutas: ["Fruta 1", "Fruta 2", "Fruta 3"],
  },
  getters: {
    obtenerFrutas(state) {
      console.log(state.frutas.length);
    },
  },
  mutations: {
    incrementar(state, payload) {
      return (state.Contador += payload);
    },
    disminuir(state, payload) {
      return (state.Contador -= payload);
    },
  },
  actions: {
    accionIncrementar(context) {
      console.log(typeof context.dispatch);
      setTimeout(() => {
        context.commit("incrementar", 10);
      }, 3000);
    },
    accionDisminuir(context) {
      setTimeout(() => {
        context.commit("disminuir", 10);
      }, 1000);
    },
  },
  modules: {},
});
