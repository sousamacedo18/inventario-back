
const express = require("express");
const router = express.Router();


const usuarios=[
    {
        id:1,
        nome:"Derick",
        email: "derick@gmail.com",
        senha: "123"
    },
    { 
        id:2,
        nome:"Iudhy",
        email: "iudhy@gmail.com",
        senha: "123"
    },
    {
        id:3,
        nome:"Willian",
        email: "willian@gmail.com",
        senha: "123"
    },
    {
        id:4,
        nome:"Bispo",
        email: "bispo@gmail.com",
        senha: "123"
    },
    {
        id:5,
        nome:"Wesley",
        email: "bispo@gmail.com",
        senha: "123"
    },
    { 
        id:6,
        nome:"Raimundo",
        email: "raimundo@gmail.com",
        senha: "123"
    },
    {
        id:7,
        nome:"Wallysson",
        email: "wallysson@gmail.com",
        senha: "123"
    },

]
router.get("/",(req,res)=>{

   res.send(usuarios);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=usuarios.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   res.send(novoarray);
})
router.post("/",(req,res)=>{
    const {id,nome,email,senha}=req.body;
    if (nome.length<=3){
        res.status(500).send(
            {mensagem:'Campo nome menor que 3 caracteres'}
            )
       }else{
            usuarios.push(
                {
                    id:id,
                    nome:nome,
                    email: email,
                    senha: senha
                }
            )
    

            res.status(200).send(
                {mensagem:'Cadastro Salvo com Sucesso'}
                )
            }
});
router.delete("/",(req,res)=>{
 let novoarray=[];
 const {id} = req.body;
 novoarray=usuarios.filter(linha=>{
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
 novoarray=usuarios.filter(linha=>{
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