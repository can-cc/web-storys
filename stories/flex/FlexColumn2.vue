<template>
  <div class="container">
    <div class="header">header</div>
    <div
      class="body"
      v-bind:style="{ overflow: bodyOverflow }"
    >
    {{bodyOverflow}}
      body 
      <button v-on:click="bodyOverflow = 'hidden'">set body overflow hidden</button>
      <button v-on:click="bodyOverflow = 'scroll'">set body overflow scroll</button>
      <button v-on:click="bodyOverflow = 'visible'">set body overflow visible</button>

      <div class="body-content">
        height: 320px
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flex-column",
  data() {
    return { bodyOverflow: 'visible' };
  }
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
  padding: 12px;
  max-height: 100%;
}
.body-content {
  height: 320px;
  background-color: aqua;
}
</style>
