export class Usuario {

    nombre: string;
    localizacion = {lat: "",lng: ""};
    edad: number;
    realm: string;
    username: string;
    email: string;
    password: string;

    constructor(nombre: string, localizacion:any, edad:any,realm:any,email:any,username:any,password:any) {
        this.nombre = nombre;
        this.localizacion=localizacion;
        this.edad=edad;
        this.realm=realm;
        this.username=username;
        this.email=email;
        this.password=password;
    }
}
