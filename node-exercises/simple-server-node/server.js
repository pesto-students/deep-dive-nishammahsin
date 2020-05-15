const  SimpleServer  = require('./lib/SimpleServer');
const  Person  = require('./Person');

const app = new SimpleServer();
const PORT = 2022;

const person = new Person('/');
app.Routes = [person];

app.startServer(PORT,()=> {console.log(`server running on ${PORT}`)});
