
export const ENV = {
  //API ENDPOINTS
  API_ENDPOINT: 'http://156.35.98.43:3000/api',
    AuthKey: 'AuthData',
    SEARCH_GAMES:(game)=>{return `Juegos/IGDB?name=${game}`},
    REGISTER_USER: 'Usuarios',
    LOGIN: 'Usuarios/login',
    ADD_GAME:(user)=>{return `Usuarios/${user}/juegosUsuario`},
    GET_GAMES:(user)=>{return `Usuarios/${user}/juegosUsuario?filter=%7B%22include%22%3A%7B%22relation%22%3A%22juego%22%7D%7D`},
    DELETE_GAME:(user,game)=>{return `Usuarios/${user}/juegosUsuario/${game}`},
    GET_USERS: 'Usuarios',
};
