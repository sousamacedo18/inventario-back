const express = require("express");
const router = express.Router();


const setores=[
    {
        id:1,
        nome:"Depto Pessoal"
    },
    {
        id:2,
        nome:"Admininstração"
    },
    {
        id:3,
        nome:"Recepção",
    },
    {
        id:4,
        nome:"Copa"
    },
    {
        id:5,
        nome:"Oficina"
    },


]
router.get("/",(req,res)=>{

   res.send(setores);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=setores.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   res.send(novoarray);
})
router.post("/",(req,res)=>{
    const {id,nome}=req.body;
    let i=0;
    let errorMsg=[];
    if (nome.length<=3){
      i++;
       errorMsg.push(
        {mensagem:"'Campo nome menor que 3 caracteres'"}
       )
    }
       if(i==0){
            setores.push(
                {
                    id:id,
                    nome:nome
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
 novoarray=setores.filter(linha=>{
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
  const {nome,id} = req.body;
 novoarray=
 setores.filter(linha=>{
    if(linha.id==id){
        return{
                    id:id,
                    nome:nome
                }
    }else{
        return linha;
    }
 })
})

module.exports = router;