<template>
  <div class="weatherdetails">
    <span>The weather value that was passed to me is: {{ $route.params.city }}</span>
  </div>
</template>

<script>
  export default {
    name: 'weatherdetails'
  }
</script>
