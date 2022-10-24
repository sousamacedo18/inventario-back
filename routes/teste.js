
const express = require("express");
const app = express();
const aluno=["CARLOS","ANTONIO","BISPO"];
const alunos=[
{nome:"CARLOS",endereco:"Rua Sta Cruz",idade:39},
{nome:"ANTONIO",endereco:"Rua das Mangueiras",idade:18},
{nome:"Bispo",endereco:"Rua 21 de Abril",idade:23}
]
const cadastro ={
    nome:"CARLOS",
    endereco:"Rua Sta Cruz",
    idade:39,
    cursos:["informática","pedreiro"],
    conjuge:[
        {nome:"Maria",idade:20,sexo:"F"},
        {nome:"Raimundo",idade:25,sexo:"M"}
    ],
    veiculos:[
    {tipo:"carro",modelo:"gol",ano:"1994"},
    "moto",
    "bicicleta"
    ]
    
}
const usuarios=[
    {nome:"Pedro",idade:20},
    {nome:"João",idade:50},
    {nome:"Maria",idade:19},
    {nome:"Raimundo",idade:70}
]
app.get("/",(req,res)=>{

    let idade =String(cadastro.conjuge[1].idade);
   res.send(idade);
})
app.get("/usuarios/:id",(req,res)=>{

   res.send()
 })

 app.get("/calcular",(req,res)=>{
    let novoarray = [];
    usuarios.map(linha=>{
      
        novoarray.push(
        {
            nome:linha.nome,
             idade:linha.idade+10
        }    
        )
       
    })
    
    res.send(
        [novoarray,usuarios]);
 })
 app.get("/imprimirarray",(req,res)=>{
  const primeiro=req.query.primeiro;
  const segundo=req.query.segundo;

   
  
    res.send([
       usuarios[primeiro],
       usuarios[segundo]
    ]
    );

 })

module.exports = app;