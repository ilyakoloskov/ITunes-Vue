<template>
  <span
    id="track-time-end" class="header__track-time">
      {{ minutes }}:{{ seconds  }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  name: "i-duraion-time",
  methods: {
    updateDurationtTime() {
      setInterval(() => {
        this.hours = Math.floor(this.audio.duration / 60 / 60)
          .toString()
          .padStart(2, "0");
        this.minutes = (
          Math.floor(this.audio.duration / 60) -
          Math.floor(this.audio.duration / 60 / 60) * 60
        )
          .toString()
          .padStart(1, "0");
        this.seconds = Math.floor(this.audio.duration % 60)
          .toString()
          .padStart(2, "0");
      }, 50);
    },
  },
  mounted() {
    this.updateDurationtTime();
  },
  props: {
    audio: {
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped></style>
