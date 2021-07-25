<template>
    <nav class="col-3">
        <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <router-link to="/">Dashboard</router-link> 
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <router-link to="/staff">Staff</router-link> 
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <router-link to="/about">About</router-link> 
            </li>
          </ul>
      </nav>
</template>

<script>
export default {
    name: 'TheNavigation'
}
</script>