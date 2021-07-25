<template>
  <div id="app" class="container mx-auto p-0 w-100">
    <div class="row bg-primary py-3">
      <div class="col">
        <the-header></the-header> 
      </div>
    </div>
    <div class="row mt-3">
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

