<template>
    <div id="app" class="app-wrapper">
        <h1>{{test}}</h1>
        <div class="router-links__wrap">
            <router-link class="router-link" to="/">Home</router-link>
            <router-link class="router-link" to="/web-workers">Web-Workers</router-link>
            <router-link class="router-link" to="/service-workers">Service-Workers</router-link>
            <router-link class="router-link" to="/push-messages">Push Messages</router-link>
        </div>
        <router-view></router-view>


    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                test: 'Push-уведомления',
            }
        }
    }
</script>

<style scoped lang="scss">
    .app-wrapper {
        padding-top: 20px;
    }

    h1 {
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .router-link {
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: darkblue;
        margin-right: 20px;
        margin-bottom: 20px;
        position: relative;
        display: inline-block;
        &:after {
            content: '';
            display: block;
            position: absolute;
            height: 15px;
            width: 2px;
            background: darkblue;
            right: -14px;
            top: 0;
        }
        &:hover {
            color: #7a8bff;
            text-decoration: underline;
        }
        &:last-child {
            margin-right: 0;
            &:after {
                display: none;
            }
        }
    }
</style>