// type heroi = {
//     name: string;
//     vulgo: string;
// };


// function printaObjetos(pessoa: heroi) {
//     console.log(pessoa)
// }


// printaObjetos({
//     name: "Bruce Wayne",
//     vulgo: "Batman",
// })


// Tipos primitivos:
let ligado:boolean = true;
let nome:string = "Lucas";
let idade:number = 33;
let altura:number = 1.83;

// Tipos especiais:
let nulo:null = null; //só pode receber o valor null
let indefinido:undefined //só pode receber o valor undefined

// Tipos abrangentes:
let retorno:void // não tem o retorno de nenhum valor. Por exemplo, em uma função que somente é executada e não tem retorno nenhum
let retornoView:any = 'Lucas'; //aceita qualquer valor

// Objeto (sem presivibilidade)
let produto:object = {
    name: "Luke",
    sobrenome: "Skywalker",
} // define a valor como sendo um objeto, sendo necessário informar os dados entre {}, uma vez que é assim que um objeto é declarado

// melhor forma de declarar um objeto, uma vez que é possível definir quais as propriedades que ele deve ter
type ProdutoLoja = {
    nome:string,
    valor:number,
    estoque:boolean,
}

let meuproduto:ProdutoLoja = {
    nome: "Tênis",
    valor: 899.99,
    estoque: true,
}



// Arrays:
let dados:string[] = ["Batman", "Superman"];
let dadosDois:Array<string> = ["Batman", "Superman"]; // pode ser declarado das duas maneiras
let infos:(string | number)[] = ["Batman", 44];

// Tuplas:
let boleto:[string, number, number] = ["Conta de água", 180.90, 45]; // tem que ser na ordem informada

// Datas:

let aniversario:Date = new Date("2022-12-01 05:00"); // padrão americano

// Funções
function addNumber(x:number, y:number):number {
    return x+ y;
}

function callToPhone(phone: number | string) {
    return phone;
}

// Quando utilizar uma função async, a qual retorna uma promise, é necessário declarar o tipo de formato desejado que a promise retornará
async function getDataBase(id: number):Promise<string> {
    return "Lucas"; 
}

// Ao invés do type, pode utilizar-se o interface
// Quando utilizar class, utilizar o interface

type robot = {
    id: number;
    name: string;
};

const bot: robot = {
    id: 1,
    name: "Robocop",
};

interface robotTwo {
    id: number;
    name: string;
};

const botTwo: robotTwo = {
    id: 2,
    name: "Megaman",
};


// classes

class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() :void{
        console.log(`Attack with ${this.stregth} points.`)
    }
}

const p1 = new Character('Ryu', 88, 98);
