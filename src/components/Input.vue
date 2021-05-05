<template>
    <div>

      <input
        type="text"
        v-model.trim="tarea.nombre"
        placeholder="Ingresa tarea"
        class="form-control my-2"
      />
      <div class="form-check form-check-inline div">
        <input
          type="checkbox"
          id="check-1"
          class="form-check-input"
          v-model="tarea.categorias"
          value="javascript"
        />
        <label for="check-1" class="form-check-label">javascript </label>
      </div>
      <div class="form-check form-check-inline div">
        <input
          type="checkbox"
          id="check-2"
          class="form-check-input"
          v-model="tarea.categorias"
          value="php"
        />
        <label for="check-2" class="form-check-label">php </label>
      </div>
      <div class="mt-2">
        <div class="form-check form-check-inline div">
          <input
            type="radio"
            id="radio-1"
            class="form-check-input"
            value="urgente"
            v-model="tarea.estado"
          />
          <label for="radio-1" class="form-check-label"> Urgente</label>
        </div>
        <div class="form-check form-check-inline div">
          <input
            type="radio"
            id="radio-2"
            class="form-check-input"
            value="relax"
            v-model="tarea.estado"
          />
          <label for="radio-2" class="form-check-label"> Relax</label>
        </div>
        <div class="mt-2">
          <input
            type="number"
            v-model.number="tarea.numero"
            class="form-control"
          />
        </div>
      </div>

      <hr />
      <button class="btn btn-dark mt-2 btn-block" type="submit">Enviar</button>
   

  </div>
</template>

<script>
export default {
    props:{
        tarea:Object
    }

}
</script>

<style>

</style>