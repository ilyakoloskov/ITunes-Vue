import { createStore } from 'vuex'

export default createStore({
    // ОБЬЕКТ КОНФИГУРАЦИИ

    // Глобальное хранилище, все данные обяьвленные внутри state, доступны всем компонентам
    state(){
        return {
            trackIndex: 0,
            tracks:
              [
                {
                  artistName: "$uicideboys",
                  trackName: "Aite, bet",
                  trackCover: "./assets/covers/darkSideOfTheClouds.png",
                  trackAudio: "./assets/audio/Aite, bet.mp3",
                  trackId: 0,
                },
                {
                  artistName: "Slaughter To Prevail",
                  trackName: "Zavali Ebalo",
                  trackCover: "./assets/covers/kostolom.jpg",
                  trackAudio: "./assets/audio/Bonebreaker.mp3",
                  trackId: 1,
                },
              ]
          }; 
    },
    // Обьект, для обьявление функций изменяющий state
    // Для вызова нужной мутации в нужном компоненте используется commit
    mutations: {
      prevTrack(state){
        state.trackIndex--
      },
      nextTrack(state){
        state.trackIndex++
      }
    },
    // Геттер нужен для того, чтобы не обращаться напрямую к state, тк его изменение может привести к неккоректной работе приложения
    // Трансформируем данные, не трансформируя state
    getters: {
      trackIndex(state){
        return state.trackIndex
      },
      tracks(state){
        return state.tracks
      }
      // trackIndex(state){
      //   if(state.trackIndex >= state.tracks.length){
      //     return state.trackIndex = 0
      //   }else if(state.trackIndex < 0){
      //     return state.trackIndex = 0
      //   }
      // },

    }
})