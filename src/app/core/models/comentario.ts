import { Creyente } from "./creyente";
import { Publicacion } from "./publicacion";

export interface Comentario {
    id?: number;
    contenido: string;
    fechaCreacion?: Date;
    creyente: Creyente;
    publicacion: Publicacion;
}
