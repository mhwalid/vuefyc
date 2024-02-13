<script setup lang="ts">

import Nav from '../src/components/Navbar.vue'

</script>

<template>
        <Nav></Nav>
        <div class="flex justify-center">
          <div class="container place-self-auto">
            <RouterView />
          </div>
        </div>

</template>
<style scoped>
</style>
