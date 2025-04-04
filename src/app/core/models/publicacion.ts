import { Creyente } from "./creyente";

export interface Publicacion {
    id?: number;
    titulo: string;
    contenido: string;
    fechaCreacion?: Date;
    creyente?: Creyente;
}
