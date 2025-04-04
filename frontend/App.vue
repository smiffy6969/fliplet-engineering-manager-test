<script setup>
import DragDrop from './drag-drop.vue'
</script>

<template>
  <header>
    <h1>Drag and Drop from a component library</h1>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <DragDrop />
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
</style>
