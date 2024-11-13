export class Libro {
    public codLibro: number;
    public tituloLibro: string;
    public autorLibro: string;
    public codGeneroLibro: string;
    public imagenLibro: string;
    public imagenLibroBase64: string;

    constructor(cod1: number, titu: string, auto: string, codg: string, img: string, base64: string){
        this.codLibro = cod1;
        this.tituloLibro = titu;
        this.autorLibro = auto;
        this.codGeneroLibro = codg;
        this.imagenLibro = img;
        this.imagenLibroBase64 = base64;
    }
}