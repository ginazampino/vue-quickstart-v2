<template>
    <div>
        <p>
            App
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    import sample from './sample.vue';

    const axios = require('axios');
    const getData = 'https://jsonplaceholder.typicode.com/todos/1';

    export default {
        components: {
            'sample': sample
        },

        data() {
            return{
                data: []
            }
        },

        mounted() {

        },

        methods: {

        }
    };
</script>