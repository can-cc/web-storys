<template>
  <div class="container">
    <div class="header">header</div>
    <div class="body">body</div>
  </div>
</template>

<script>
export default {
  name: "flex-column"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 12px;
  height: 300px;
}
.header {
  flex: 0;
  background: blue;
}
.body {
  flex: 1 1 auto;
  background: yellow;
}
</style>
