<template>
  <h1>Events for good!</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  created(){
    this.$store.dispatch('fetchEvents');
  },
  computed: {
    events(){
      return this.$store.state.events;
    }
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
