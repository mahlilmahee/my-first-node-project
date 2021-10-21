const express = require('express');
const app = express();
var cors = require('cors')
const port = 4000;
app.use(cors())

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World! Its mahee here again with mt  excitingly Watching what  I am learnign node here ')
  })
const users =[
    {name:'mahll', id:0, passion:'playing, reading,learning',phone:12454563},
    {name:'mohammed ', id: 1, passion:'playing, reading,learning',phone:12454563},
    {name:'virat kohli', id: 3, passion:'playing, reading,learning',phone:12454563},
    {name:'Mahendra shing dhoni ', id: 2, passion:'playing, reading,learning',phone:12454563},
    {name:' abudul walaka ', id: 4, passion:'playing, reading,learning',phone:12454563},
    {name:' sabnoor wlaka  ddum daraka aabud l ke sath re baba ', id: 5, passion:'playing, reading,learning',phone:12454563}
]
  app.get('/users',(req,res)=>
  {
      const query =req.query.search;
      console.log(query);
      if(query){
          const specificUsers=users.filter(data=>data.name.toLocaleLowerCase().includes(query));
          res.send(specificUsers)
      }
      

      else{
        res.send(users)
      }
  })
  app.post('/users',(req,res)=>{
    const newUser=req.body;
      newUser.id=users.length;
      users.push(newUser);
    console.log('post hitted now here ', req.body);
    res.json(newUser
      )
  })
  app.get('/fruits/magoo/fazli',(req,res)=>{
       res.send('this is fazli section what do you want tell us fastly ')
  })
  app.get('/fruits/mango',(req,res)=>{
      res.send('this is mango section what do you wand from us here ')
  })
  app.get('/fruits',(req,res)=>{
      res.send('hello I am the fruit businessman here what do you wand from us please tell me I am waiting for you ')
  })

  app.get('/users/:id',(req,res)=>
  {
      const id =req.params.id;
      const user =users[id];
     res.send(user)
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })