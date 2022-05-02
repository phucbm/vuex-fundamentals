<template>
  <h1>Events for good!</h1>
  <div class="events">
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
import {mapState} from "vuex";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  created(){
    this.$store.dispatch('fetchEvents')
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

<style scoped>
.events {
  display:flex;
  flex-direction:column;
  align-items:center;
}
</style>
