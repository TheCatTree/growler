<template>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position={{markers[index].location}}
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
        center: {lat: -41.2865, lng: 174.7762}
      }
    },
    computed: {
      markers () {
        return this.$store.state.parks
      },
      parks () {
        return this.$store.state.parks
      }
    },
    methods: {
      load_parks () {
        return this.$store.dispatch('PARS_PARKS')
      },
      geocode_parks () {
        return this.$store.dispatch('GEO_CODEPARKS', this.$store.state.parks)
      }
    },
    created: function () {
      this.load_parks()
      this.geocode_parks()
    }
  }
</script>
