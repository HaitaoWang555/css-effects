<template>
  <div class="taiji"></div>
</template>

<style scoped>
.taiji {
  position: relative;
  width: 96px;
  height: 48px;
  background: white;
  border-width: 2px 2px 50px 2px;
  border-style: solid;
  border-color: dodgerblue;
  border-radius: 100%;
  box-sizing: content-box;
}

.taiji:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 12px;
  height: 12px;
  border: 18px solid dodgerblue;
  border-radius: 100%;
  background: white;
  box-sizing: content-box;
}

.taiji:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border: 18px solid white;
  border-radius: 100%;
  background: dodgerblue;
  box-sizing: content-box;
}
</style>
