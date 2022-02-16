import { createStore } from "vuex";

export default createStore({
  // ОБЬЕКТ КОНФИГУРАЦИИ

  // Глобальное хранилище, все данные обяьвленные внутри state, доступны всем компонентам
  state() {
    return {
      trackSrc: "",
      trackName: "",
      audio: new Audio(),
      trackIndex: 0,
      isPlaying: false,
      isSelected: {},
      audioVolume: 80,
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
      console.log(state.audio.src);
    },
    PLAY_TRACK(state) {
      state.isPlaying ? state.audio.play() : state.audio.pause();
      console.log(`track: ${state.audio.src} ${state.isPlaying}`);
    },
    NEXT_TRACK(state) {
      state.trackIndex++;
      let trackName = Object.keys(state.isSelected.audio);
      let trackSrc = Object.values(state.isSelected.audio);
      state.audio.src = trackSrc[state.trackIndex];
      state.trackName = trackName[state.trackIndex];
      console.log(state.audio.src);
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
    IS_VOLUME_AUDIO: (state) => {
      return state.audio.volume * 100;
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
  },
});
