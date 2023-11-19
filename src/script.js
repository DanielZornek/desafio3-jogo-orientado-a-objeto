class heroi{

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; // guerreiro, mago, monge, ninja
    }

    atacar(){
        if(this.tipo === "guerreiro"){
            console.log(`| #${this.nome} - ${this.idade}yrs | pertencente à classe de [ ${this.tipo} ] atacou usando espada!`);
        }else if(this.tipo === "mago"){
            console.log(`| #${this.nome} - ${this.idade}yrs | pertencente à classe de [ ${this.tipo} ] atacou usando magia!`);
        }else if(this.tipo === "monge"){
            console.log(`| #${this.nome} - ${this.idade}yrs | pertencente à classe de [ ${this.tipo} ] atacou usando artes marciais!`);
        }else if(this.tipo === "ninja"){
            console.log(`| #${this.nome} - ${this.idade}yrs | pertencente à classe de [ ${this.tipo} ] atacou usando shurikens!`);
        }else{
            console.log(`| #${this.nome} - ${this.idade}yrs | pertencente à classe de [ desconhecida ] atacou usando ???!`);
        }
    }
}

let heroi001 = new heroi("Cavaleiro Dourado", 37, "guerreiro");
heroi001.atacar();

let heroi002 = new heroi("Jerônimo, o desintegrador", 67, "mago");
heroi002.atacar();

let heroi003 = new heroi("Jackie Chan", 29, "monge");
heroi003.atacar();

let heroi004 = new heroi("Naruto", 17, "ninja");
heroi004.atacar();

let heroi005 = new heroi("Kira", 16, "Shinigami");
heroi005.atacar();