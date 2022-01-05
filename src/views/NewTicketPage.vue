<template>
  <base-layout page-default-back-link="/scan">
    <create-ticket-form @save-ticket="saveTicket"></create-ticket-form>
  </base-layout>
</template>
<script>
import CreateTicketForm from "../components/tickets/CreateTicketForm.vue";
export default {
  components: { CreateTicketForm },
  methods: {
    saveTicket(newTicketData) {
      this.$store.dispatch("createTicket", newTicketData);
      this.$router.replace("/home");
    },
  },
};
</script>