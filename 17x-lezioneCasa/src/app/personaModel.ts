export class Persona {
    nome: string;
    cognome: string;
    isOnline: boolean;

    constructor(nome: string, cognome: string, isOnline: boolean) {
        this.nome = nome;
        this.cognome = cognome;
        this.isOnline = isOnline;
    }
}