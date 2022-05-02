<template>
  <div v-if="event.currentEvent">
    <h1>{{ event.currentEvent.title }}</h1>
    <p>{{ event.currentEvent.time }} on {{ event.currentEvent.date }} @ {{ event.currentEvent.location }}</p>
    <p>{{ event.currentEvent.description }}</p>
    <p>Organized by {{ event.currentEvent.organizer }}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: ["id"],
  created(){
    this.$store.dispatch('fetchEvent', this.id)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: error}
          })
        })
  },
  computed: {
    ...mapState(['event'])
  }
};
</script>
