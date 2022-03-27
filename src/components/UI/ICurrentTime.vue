<template>
    <span id="track-time-start" class="header__track-time">
        {{minutes}}:{{seconds}}
    </span>
</template>

<script>
    export default {
        data(){
            return{
                hours: '',
                minutes: '',
                seconds: '',
            }
        },
        name: "i-current-time",
        methods: {
            updateCurrentTime(){
                setInterval(()=>{
                    this.hours = Math.floor(this.audio.currentTime / 60 / 60).toString().padStart(2, '0')
                    this.minutes = (Math.floor(this.audio.currentTime / 60) - (Math.floor(this.audio.currentTime / 60 / 60) * 60)).toString().padStart(2, '0')
                    this.seconds = Math.floor(this.audio.currentTime % 60).toString().padStart(2, '0')
                }, 50)
            }
        },
        mounted(){
            this.updateCurrentTime()
        },
        props: {
            audio: {
                type: Object,
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>