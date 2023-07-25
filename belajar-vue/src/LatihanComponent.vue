<template>
    <div v-if="age > 18">
        <p>Selamat Datang {{ name }}</p>
    </div>
    <div v-else>
        <p>Maaf kamu belum cukup umur</p>
    </div>
    <div >
        <button @click="greet">Sapa</button>
    </div>
</template>

<script>
    export default{
        props: ['name', 'age'],
        methods: {
            greet(){
                alert("Hallo" + this.name)
            }
        }
    }
</script>