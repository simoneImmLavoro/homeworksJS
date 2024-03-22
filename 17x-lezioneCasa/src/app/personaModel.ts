export class Persona {
    nome: string;
    cognome: string;
    isOnline: boolean;
    color: string;

    constructor(nome: string, cognome: string, isOnline: boolean, color: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.isOnline = isOnline;
        this.color = color
    }
}