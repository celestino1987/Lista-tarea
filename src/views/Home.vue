<template>
<div>

  <form @submit.prevent="handleSumit">
    <Input :tarea="tarea" />
  </form>
  <ListHomework />
</div>
</template>

<script>
import Input from "../components/Input";
import ListHomework from "../components/ListHomework"
import { mapActions } from "vuex";
const shortid = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListHomework
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: "",
      },
    };
  },
  methods: {
    ...mapActions(["setTareas"]),
    handleSumit() {
      console.log(this.tarea);
      //genera  un id
    this.tarea.id = shortid.generate()
  //enviar tarea
    this.setTareas(this.tarea)
    //limpiar tarea
     this.tarea = {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: "",
      }
    }
  },
};
</script>
<style>
input {
  width: 100vh;
  height: 30px;
  font-weight: bold;
  color: dimgray;
}
.div {
  width: 10%;
  margin-top: 10px;
}
</style>
