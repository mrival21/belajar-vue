<template>
    <div>
        <h1>Aplikasi Vue.Js</h1>
        <my-component 
        :nama="nama"
        :umur="umur"
        @greeted="onGreeted"></my-component>
    </div>
</template>

<script>
    import MyComponent from './myComponent.vue';

    export default {
        component: {
            MyComponent
        },
        data() {
            return {
                nama: 'rival',
                umur: 17
            };
        },
        methods: {
            onGreeted(){
                console.log('Kamu udah disapa,bro');
            }
        }
    }
</script>