import express from 'express';

const app = express();

app.use(express.json())

const usuarios = [
    {id:1, nome: "Enrico",sobrenome:"Brasil"},
    {id:2, nome: "Andre",sobrenome:"Porto"},
    {id:3, nome: "Bia",sobrenome:"Galvão"},
    {id:4, nome: "Fernanda",sobrenome:"Andrade"},
    {id:5, nome: "João",sobrenome:"Silva"},
]

function buscarUsuarioPorId(id) {
    return usuarios.filter( usuario => usuario.id == id);
}

function buscaIdUsuario(){
    
}

function deletarUsuarioPorId(id) {
    return usuarios.splice( usuario => usuario.id == id);
}

//criar rota raiz
app.get('/', (req,res)=>{
    res.send("aqui é a Home")
});

app.get('/usuarios', (req,res)=>{
    res.status(200).send(usuarios)
})

app.get('/usuarios/:id', (req,res) =>{
    res.json(buscarUsuarioPorId(req.params.id));
})

app.delete('/usuarios/:id', (req,res)=>{
    let index = buscarUsuarioPorId(req.params.id)
    usuarios.splice(index, 1)
    res.send("Usuario" + req.params.id + " deletado com sucesso")
})

app.post('/usuarios', (req,res)=>{
    usuarios.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})

export default app;