import fastify from 'fastify'

const server = fastify()

server.listen({port: 3333}).then(() => 
    console.log("Server Running")    
)

server.get('/', () => {
    return "Olá mundo!"
});

server.get('/home', () => {
    return "Olá usuário";
});
// server.get('/ping', async (request, reply) => {
//   return 'pong\n'
// })

// server.listen({ port: 8080 }, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`Server listening at ${address}`)
// })