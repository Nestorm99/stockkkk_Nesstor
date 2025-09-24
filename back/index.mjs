// GUIA https://expressjs.com/en/guide/routing.html

// Importar Express


// Crear servidor Express


// Agregar a express el soporte para JSON


// Crear Ruta GET para obtener productos


// Crear Ruta POST para crear producto


// Crear Ruta PUT para modificar producto


// Crear Ruta DELETE para eliminar un producto


// Iniciar servidor express
// Dentro de la función hay que agregar sequelize.sync()
import express from "express"

const app = express()

app.use(express.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {
    res.json(req.query)
}
)

app.post('/', async function (req, res) {
    res.json({
        saludo: "ruta post"
    })
}
)

app.put('/', async function (req, res) {
    res.json("ruta post")
}
)

app.delete('/', async (req, res) => {
    res.json('DELETE request to homepage')
})

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000")
})