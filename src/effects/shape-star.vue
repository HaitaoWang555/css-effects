<template>
  <div class="star"></div>
</template>

<style scoped>
.star {
  display: block;
  position: relative;
  width: 0px;
  height: 0px;
  margin: 50px 0;
  border-right: 50px solid transparent;
  border-bottom: 35px solid dodgerblue;
  border-left: 50px solid transparent;
  color: dodgerblue;
  transform: rotate(35deg);
}

.star:before {
  content: "";
  display: block;
  position: absolute;
  top: -22.5px;
  left: -32.5px;
  height: 0;
  width: 0;
  border-bottom: 40px solid dodgerblue;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transform: rotate(-35deg);
}

.star:after {
  content: "";
  display: block;
  position: absolute;
  top: 1.5px;
  left: -52.5px;
  width: 0px;
  height: 0px;
  border-right: 50px solid transparent;
  border-bottom: 35px solid dodgerblue;
  border-left: 50px solid transparent;
  color: dodgerblue;
  transform: rotate(-70deg);
}
</style>
