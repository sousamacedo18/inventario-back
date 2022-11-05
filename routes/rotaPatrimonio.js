const express = require("express");
const router = express.Router();
const patrimonio=[
    {
        id:1,
        nome:"computador",
        dataaquisicao:"10/12/1999"
    },
    {
        id:2,
        nome:"notebook",
        dataaquisicao:"21/05/2004"
    },
    {
        id:3,
        nome:"Mouse",
        dataaquisicao:"25/12/2004"
    },
    {
        id:4,
        nome:"Mesa",
        dataaquisicao:"21/09/2000"
    },
    {
        id:5,
        nome:"Porta",
        dataaquisicao:"23/09/2004"
    }

                 ];
 router.get("/",(req,res)=>{
    res.status(200).send(
       {
        mensagem:"Lista de Todos os patrimônios",
        patrimonio:patrimonio
       } 
    )
 });
 router.get("/:id",(req,res)=>{
        const {id} = req.params;
        let novoarray=[];
        novoarray=patrimonio.filter(linha=>{
            if(linha.id==id){
                return linha
            }
        })
        return res.status(200).send(novoarray)
 });
module.exports = router;