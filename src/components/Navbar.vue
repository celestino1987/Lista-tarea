<template>
  <div class="nav">
    <router-link to="/" class="btn-form">
      Formularios
    </router-link>
    <div>
      <router-link to="/" class="btn-tareas">
        tareas
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background: rgb(46, 46, 46);
  padding: 20px;
}
.btn-form {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.btn-tareas {
  color: white;
  font-weight: bold;
  background: rgb(22, 22, 22);
  padding: 10px;
  border-radius: 10%;
  text-decoration: none;
}
.btn-tareas:hover {
  background: rgb(61, 61, 61);
}
</style>
