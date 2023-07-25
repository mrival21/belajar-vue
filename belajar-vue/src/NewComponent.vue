<template>
    <p>Ini Dari NewComponent</p>
    <myComponent nama="ivall" umur="17"/>
    <LatihanComponent name="ganteng" age="17" />
    <Latihan2Component></Latihan2Component>
    <h2>Wacthers-component</h2>
    <WatchersComponent nama="rival" umur="90"></WatchersComponent>
    <LatihanEventComponent></LatihanEventComponent>
    </template>
    
    <script setup >
    import myComponent from './myComponent.vue';
import LatihanComponent from './LatihanComponent.vue';
import Latihan2Component from './Latihan2Component.vue';
import WatchersComponent from './watchers-component.vue';
import LatihanEventComponent from './LatihanEventComponent.vue';

    
    
    </script>