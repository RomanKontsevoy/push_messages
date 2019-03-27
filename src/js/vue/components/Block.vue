<template>
    <div class="block">
        <h3
                @click="showText=!showText"
                @selectstart.prevent=""
        >{{block.title}}</h3>
        <transition name="bounce">
            <div class="block-text__wrap"
                 v-if="showText"
            >
                <template v-for="elem in block.body">
                    <h4 v-if="elem.subt" class="block-text__par">
                        {{elem.subt}}
                    </h4>
                    <p v-else-if="elem.pre" class="block-text__par">
                        <pre><code class="plaintext hljs">{{elem.pre}}</code></pre>
                    </p>
                    <ul v-else-if="elem.li" class="block-text__par block-text__ul">
                        <li v-for="li in elem.li" v-html="li"></li>
                    </ul>
                    <p v-else class="block-text__par" v-html="elem"></p>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Block",
        props: ['block'],
        data() {
            return {
                showText: false
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    h3 {
        padding: 20px;
        background: #eafeff;
        color: #7a8bff;
        cursor: pointer;
        user-select: none;
        text-transform: uppercase;
        border-top: 1px solid #a5a28f;
        &:hover {
            text-decoration: underline;
        }
    }

    h4 {
        color: #7a8bff;
        margin: 10px 0;
    }

    .block-text__wrap {
        text-align: justify;
    }

    .block-text__par {
        padding: 20px 20px 0;
        text-indent: 20px;
        &:last-child {
            padding-bottom: 10px;
        }
    }

    .block-text__ul {
        text-indent: 0;
        li {
            padding-left: 20px;
            margin-bottom: 10px;
            list-style-position: inside;
        }
    }

    pre {
        padding: 15px;
        font-style: italic;
        border: inset 2px #ccc;
        text-indent: 0;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
        transform-origin: 100% 0
    }

    .bounce-leave-active {
        animation: bounce-in .3s reverse;
        transform-origin: 100% 0
    }

    @keyframes bounce-in {
        0% {
            transform: scaleY(0);
        }
        70% {
            transform: scaleY(1);
        }
        100% {
            transform: scaleY(1);
        }
    }

</style>