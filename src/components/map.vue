<template>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  export default {
    name: 'map',
    data () {
      return {
        center: {lat: -41.2865, lng: 174.7762},
        markers: [{
          position: {lat: -41.2865, lng: 174.7762}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>
