import { createStore } from "vuex";

export default createStore({
  // ОБЬЕКТ КОНФИГУРАЦИИ

  // Глобальное хранилище, все данные обяьвленные внутри state, доступны всем компонентам
  state() {
    return {
      // player: {
      //   settings: {
      //     audio: new Audio(),
      //     volume: 80,
      //     trackIndex: 0,
      //   },
      //   get: {
      //     isPlaying: false,
      //     isSelected: null,
      //   }
      // },
      audio: new Audio(),
      trackIndex: 0,
      isPlaying: false,
      isSelected: null,
      isAudioDuration: null,
      // Массив альбомов
      dataBase: [
        {
          artistName: "$UICIDEBOY$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/darkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/Aite, bet.mp3",
            "CHERISH THE DEAD": "./assets/audio/CHERISH THE DEAD.mp3",
          },
        },
        {
          artistName: "Slaughter To Prevail",
          albumName: "Kostolom",
          albumCover: "./assets/covers/kostolom.jpg",
          audio: {
            Bonebreaker: "./assets/audio/Bonebreaker.mp3",
          },
        },
        {
          artistName: "Mick Gordon",
          albumName: "Doom",
          albumCover: "./assets/covers/doom.jpg",
          audio: {
            "Vega Core": "./assets/audio/VegaCore.mp3",
          },
        },
      ],
    };
  },
  // Обьект, для обьявление функций изменяющий state
  // Для вызова нужной мутации в нужном компоненте используется commit
  mutations: {
    SET_PLAYING(state) {
      state.isPlaying = !state.isPlaying;
    },
    SET_SELECTED(state, album) {
      state.isSelected = album;
      let trackIndex = 0;
      let trackName = Object.keys(state.isSelected.audio);
      let trackSrc = Object.values(state.isSelected.audio);
      state.audio.src = trackSrc[trackIndex];
      state.trackName = trackName[trackIndex];
      state.audio.play()
    },
    PLAY_TRACK(state) {
      if(state.IS_SELECTED !== null ){
        state.isPlaying ? state.audio.play() : state.audio.pause();
        // let trackDuration = (state.audio.duration* 1.64).toFixed() 
        // console.log(trackDuration)
        console.log(`track: ${state.audio.src} ${state.isPlaying}`);
        console.log('Альбом выбран, играем его')
      }else{
        console.log('Я заиграю рандомным треком, если ничего не выбрано')
      }
    },
    NEXT_TRACK(state) {
      state.trackIndex++;
      let trackName = Object.keys(state.isSelected.audio);
      let trackSrc = Object.values(state.isSelected.audio);
      state.audio.src = trackSrc[state.trackIndex];
      state.trackName = trackName[state.trackIndex];
      state.audio.play()
      console.log(state.audio.src);
    },
    PREV_TRACK(state){
      state.trackIndex--;
      let trackName = Object.keys(state.isSelected.audio);
      let trackSrc = Object.values(state.isSelected.audio);
      state.audio.src = trackSrc[state.trackIndex];
      state.trackName = trackName[state.trackIndex];
      state.audio.play()
      console.log(state.audio.src);
    },
    UPDATE_VOLUME(state, event){
      let volume = Math.abs(event.target.value)
      state.audio.volume = volume
    },
  },
  // Геттер нужен для того, чтобы не обращаться напрямую к state, тк его изменение может привести к неккоректной работе приложения
  // Трансформируем данные, не трансформируя state
  getters: {
    IS_TRACK_INDEX: (state) => {
      return state.trackIndex;
    },
    IS_DATA_BASE: (state) => {
      return state.dataBase;
    },
    IS_SELECTED: (state) => {
      return state.isSelected;
    },
    IS_PLAYING: (state) => {
      return state.isPlaying;
    },
    IS_AUDIO: (state) => {
      return state.audio;
    },
    IS_AUDIO_VOLUME: (state) => {
      return state.audio.volume;
    },
  },
  actions: {
    SET_PLAYING(context, playing) {
      context.commit("SET_PLAYING", playing);
    },
    SET_SELECTED(context, album) {
      context.commit("SET_SELECTED", album);
    },
    PLAY_TRACK(context) {
      context.commit("PLAY_TRACK");
    },
    NEXT_TRACK(context) {
      context.commit("NEXT_TRACK");
    },
    PREV_TRACK(context) {
      context.commit("PREV_TRACK");
    },
    UPDATE_VOLUME(context, event){
      context.commit("UPDATE_VOLUME", event)
    },
  },
});
