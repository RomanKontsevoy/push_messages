<template>
    <div class="home-section">
        <h2 class="home-subt">Used materials:</h2>
        <ul>
            <li class="used-materials__listitem" v-for="el in used">
                <a :href="el.url">{{el.inner}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                used: [
                    {
                        inner: `Как работает JS: веб-воркеры и пять сценариев их использования`,
                        url: `https://habr.com/ru/company/ruvds/blog/348424/`
                    },
                    {
                        inner: `Как работает JS: сервис-воркеры`,
                        url: `https://habr.com/ru/company/ruvds/blog/349858/`
                    },
                    {
                        inner: `Как работает JS: веб push-уведомления`,
                        url: `https://habr.com/ru/company/ruvds/blog/350486/`
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .home-section {
        text-align: justify;
        padding: 20px;
    }

    .home-subt {
        line-height: 2;
    }

    .used-materials__listitem {
        list-style: none;
        line-height: 2;
        a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }

</style>