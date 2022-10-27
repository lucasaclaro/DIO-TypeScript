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


