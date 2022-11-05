const express = require("express");
const router = express.Router();
const usuarios=require('./usuario');
const empresas=require('./empresa');
const patrimonios=require('./patrimonio');
const setores=require('./setor');

const lotacao =[
    {
    "id":1,
    "patrimonioid":2,
    "setorid":3,
    "empresaid":1,
    "usuarioid":2,
    "dataentrada":"11-04-2022"
    },
    {
    "id":2,
    "patrimonioid":3,
    "setorid":2,
    "empresaid":3,
    "usuarioid":1,
    "dataentrada":"11-04-2022"
    }
]
function mostrarUsuario(id){
    const nome = usuarios.filter((linha)=>{
        if(linha.id===id){
            return linha.nome
        }
    })
    return nome;
}
router.get("/",(req,res)=>{
   const novoarray =[];
   novoarray=lotacao.filter((linha)=>{
   return( 
                {
                "id":linha.id,
                "patrimonioid":linha.patrimonioid,
                "setorid":linha.setorid,
                "empresaid":linha.empresaid,
                "usuarioid":linha.usuarioid,
                "nomeusuario":mostrarUsuario(linha.usuarioid),
                "dataentrada":linha.dataentrada
                }
   )
   })
 res.status(200).send(novoarray);
 })
router.get("/:id",(req,res)=>{

    
 })
router.post("/",(req,res)=>{

    
 })
router.patch("/",(req,res)=>{

  
 })
router.delete("/:id",(req,res)=>{

 })
 module.exports = router;