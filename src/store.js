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
          audioVolume: 80,
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
              albumName: "Kostolom",
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
      SET_PLAYING(state){
        state.isPlaying = !state.isPlaying
      },
      SET_SELECTED(state, album){
        state.isSelected = album
        console.log(state.isSelected)

        // getters.isSelected = album
        // getters.isSelected.audio.src = selected.audio
        // getters.isSelected = selected.audio
      },
      PLAY_TRACK(state){
        state.isPlaying ? state.audio.play() : state.audio.pause()
        console.log(`track: ${state.audio.src} ${state.isPlaying}`)
      },
    },
    // Геттер нужен для того, чтобы не обращаться напрямую к state, тк его изменение может привести к неккоректной работе приложения
    // Трансформируем данные, не трансформируя state
    getters: {
      IS_TRACK_INDEX: (state) => {
        return state.trackIndex
      },
      IS_DATA_BASE: (state) => {
        return state.dataBase
      },
      IS_SELECTED: (state) => {
        return state.isSelected
      },
      IS_PLAYING: (state) => {
        return state.isPlaying
      },
      IS_AUDIO: (state) => {
        return state.audio
      },
      IS_VOLUME_AUDIO: (state) => {
        return state.audio.volume * 100
      }
    },
    actions:{
      SET_PLAYING(context, playing){
        context.commit('SET_PLAYING', playing)
      },
      PLAY_TRACK(context){
        context.commit('PLAY_TRACK')
      },
      SET_SELECTED(context, album){
        context.commit('SET_SELECTED', album)
      }
    }
})