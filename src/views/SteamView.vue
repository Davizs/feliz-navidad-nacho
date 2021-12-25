<template>
  <div class="home">
    <steam :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Steam from "@/components/Steam.vue";

export default {
  name: "SteamView",
  components: {
    Steam,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>
