export class User {
    constructor(
        public nome: string,
        public sobrenome: string,
        public conta: string | number,
        public email: string,
        public password: string
    ){}
}
