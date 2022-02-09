import { createStore } from 'vuex'

export default createStore({
    // ОБЬЕКТ КОНФИГУРАЦИИ

    // Глобальное хранилище, все данные обяьвленные внутри state, доступны всем компонентам
    state(){
      return {
          audio: new Audio("./assets/audio/Aite, bet.mp3"),
          trackIndex: 0,
          isPlaying: false,
          isSelected: {},
          // Массив альбомов
          dataBase: [
            {
              artistName: "$uicideboy$",
              albumName: "Dark Side Of The Clouds",
              albumCover: "./assets/covers/darkSideOfTheClouds.png",
              audio: 
                {
                  'Aite, Bet': './assets/audio/Aite, bet.mp3',
                  'Antarctica': './assets/audio/Antarctica.mp3'
                },
            },
            {
              artistName: "Slaughter To Prevail",
              albumName: "Zavali Ebalo",
              albumCover: "./assets/covers/kostolom.jpg",
              audio: 
              {
                "Bonebreaker": "./assets/audio/Bonebreaker.mp3"
              },
            },
            {
              artistName: "Mick Gordon",
              albumName: "Doom",
              albumCover: "./assets/covers/doom.jpg",
              audio: 
                {
                  "Vega Core": "./assets/audio/VegaCore.mp3"
                },
            },
          ],
        }; 
    },
    // Обьект, для обьявление функций изменяющий state
    // Для вызова нужной мутации в нужном компоненте используется commit
    mutations: {
      setIsPlaying(getters){
        getters.isPlaying = !getters.isPlaying
      },
      setIsSelected(getters, selected){
        getters.isSelected = selected
        console.log(getters.isSelected)
      },
      playTrack(getters){
        getters.isPlaying ? getters.audio.play() : getters.audio.pause()
        console.log(`track: ${getters.audio.src} ${getters.isPlaying}`)
      },
      setVolumeAudio(getters, value){
        getters.isVolumeAudio = value
      }
      // setPlayTrack(state, selected){
      //   state.isSelected.audio = selected
      //   console.log(selected)
      // },
    },
    // Геттер нужен для того, чтобы не обращаться напрямую к state, тк его изменение может привести к неккоректной работе приложения
    // Трансформируем данные, не трансформируя state
    getters: {
      isTrackIndex(state){
        return state.trackIndex
      },
      isDataBase(state){
        return state.dataBase
      },
      isSelected(state){
        return state.isSelected
      },
      isPlaying(state){
        return state.isPlaying
      },
      isAudio(state){
        return state.audio
      },
      isVolumeAudio(state){
        return state.audio.volume 
      }
    },
    actions:{
      actionIsPlaying(context){
        context.commit('setIsPlaying')
      },
      actionPlayTrack(context){
        context.commit('setPlayTrack')
      },
    }
})