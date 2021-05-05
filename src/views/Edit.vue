<template>
<div>
    <h1>Esta  es  editar</h1>
   
    <form @submit.prevent="editHomework(tarea)">

    <Input  :tarea="tarea" />
    </form>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
            Input
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['setTarea','editHomework'])
    },
    created(){
        this.setTarea(this.$route.params.id)

    }

}
</script>

<style>

</style>