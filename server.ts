import app from './src/app'

const port = process.env.DB_PORT;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})