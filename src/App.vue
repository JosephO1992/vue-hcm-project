<template>
  <div id="app" class="container mx-auto mw-100 p-0 bg-info text-light vh-100">
    <div class="row py-3">
      <div class="col">
        <the-header></the-header> 
      </div>
    </div>
    <div class="row mt-3">
      <the-navigation></the-navigation>
      <div class="col-9">
        <div class="row">
          
        </div>
        <div class="row">
          <div class="col-9">
            <add-staff></add-staff>
          </div>
          <div class="col-9">
            <transition name="slide-fade">
              <router-view />
           </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import AddStaff from './components/AddStaff.vue';

export default {
  components: {
    TheHeader,
    TheNavigation,
    AddStaff
  }
}
</script>

<style scoped>
  

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
