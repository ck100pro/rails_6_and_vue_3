<template>
    <div>
        Hello Vue3~~~!!!!
        <router-view></router-view>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
    },
}
</script>