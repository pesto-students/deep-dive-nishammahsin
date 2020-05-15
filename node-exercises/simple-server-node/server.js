const  SimpleServer  = require('./lib/SimpleServer');
const  Person  = require('./Person');
const  User  = require('./User');

const app = new SimpleServer();
const PORT = 2022;

const person = new Person('/test');
const user = new User('/test1');
app.Routes = [person, user];

app.startServer(PORT,()=> {console.log(`server running on ${PORT}`)});
