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
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    },
    computed: {
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
      },
      new_markers () {
        var p = this.$store.state.parks
        var marks = []
        for (var i = 0; i < p.length; i++) {
          marks.push({position: p[i].location})
        }
        this.markers = marks
      }
    },
    created: function () {
      this.load_parks()
      this.geocode_parks()
      this.new_markers()
    }
  }
</script>
