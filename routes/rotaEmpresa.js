
const express = require("express");
const router = express.Router();


const empresas=[
    {
        id:1,
        nome:"Sup Campelo",
        contato: "633333333",
        responsavel:"João"
    },
    {
        id:2,
        nome:"Sup Baratão",
        contato: "633333333",
        responsavel:"José"
    },
    {
        id:3,
        nome:"Concrenorte",
        contato: "633333333",
        responsavel:"Pedro"
    },
    {
        id:4,
        nome:"Energisa",
        contato: "633333333",
        responsavel:"Antonio"
    },
    {
        id:5,
        nome:"Brk",
        contato: "633333333",
        responsavel:"Maria"
    },


]
router.get("/",(req,res)=>{

   res.send(empresas);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=empresas.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   res.send(novoarray);
})
router.post("/",(req,res)=>{
    const {id,nome,responsavel,contato}=req.body;
    let i=0;
    let errorMsg=[];
    if (nome.length<=3){
      i++;
       errorMsg.push(
        {mensagem:"'Campo nome menor que 3 caracteres'"}
       )
    }
       if(i==0){
            empresas.push(
                {
                    id:id,
                    nome:nome,
                    responsavel: responsavel,
                    contato: contato
                }
            )
            res.status(201).send(
                {mensagem:'Cadastro Salvo com Sucesso'}
                )
            }else{
                res.status(406).send(
                    {mensagem:errorMsg}
                    )  
            }
});
router.delete("/",(req,res)=>{
 let novoarray=[];
 const {id} = req.body;
 novoarray=empresas.filter(linha=>{
  if(linha.id!==id){
    return linha;
  }
    
 })
 res.status(200).send(
    novoarray
 )
})

router.patch("/",(req,res)=>{
 let novoarray=[];
  const {nome,email,senha,id} = req.body;
 novoarray=
 empresas.filter(linha=>{
    if(linha.id==id){
        return{
                    id:id,
                    nome:nome,
                    email: email,
                    senha: senha
                }
    }else{
        return linha;
    }
 })
})

module.exports = router;