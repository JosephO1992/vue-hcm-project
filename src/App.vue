<template>
  <div id="app" class="container m-0 p-0">
    <div class="row my-5">
      <div class="col">
        <the-header></the-header> 
      </div>
    </div>
    <div class="row">
      <the-navigation></the-navigation>
      <div class="col-9">
       <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheHeader,
    TheNavigation
  }
}
</script>

