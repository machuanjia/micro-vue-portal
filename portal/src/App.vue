<template>
  <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
    <div class="navbar">
      <ul>
        <a href="#/app4">
          <li>App 4 (Vue)</li>
        </a>
        <a href="#/app5">
          <li>App 5</li>
        </a>
        <a href="#/app6">
          <li>App 6</li>
        </a>
      </ul>
    </div>
    <div id="app5"></div>
  </div>
</template>

<script>
import "zone.js";
import * as singleSpa from "single-spa"; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
// import { GlobalEventDistributor } from "./globalEventDistributor";
import { loadApp } from "./helper";
export default {
  name: "app",
  components: {},
  mnounted: () => {

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
