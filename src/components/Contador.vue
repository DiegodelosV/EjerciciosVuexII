<template>
  <div>
    <h3>{{ Contador }}</h3>
  </div>
  <div>
    <button @click="botonIncrementar">Incrementar contador</button>
  </div>
  <div>
    <button @click="botonDisminuir">Disminuir contador</button>
  </div>
  <div>
    <button @click="botonObtenerFrutas">contar frutas</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Contador", "frutas"]),
    botonObtenerFrutas() {
      this.$store.getters.obtenerFrutas;
    },
  },
  methods: {
    botonIncrementar() {
      // this.$store.commit("incrementar", 10);
      this.$store.dispatch("accionIncrementar");
    },
    botonDisminuir() {
      this.$store.dispatch("accionDisminuir");
    },
  },
};
</script>
