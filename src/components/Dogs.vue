<template>
  <div class="Dogs">
    <ol>
      <li v-for="dog in dogs">
        {{ dog.name }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Dogs',
    computed: {
      dogs () {
        return this.$store.state.dogs
      }
    },
    methods: {
      load_dogs () {
        return this.$store.dispatch('LOG_DOGS')
      }
    },
    created: function () {
      this.load_dogs()
    }
  }
</script>
