const express = require ('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({}))

const USER = {
    email: 'admin@example.com',
    password: 'admin'
}

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    console.log('email:', email, 'password:', password);
    

    if(email === USER.email && password === USER.password){
        res.status(200).json({message: 'Login Successful', token: '1q2w3e4r5t'})
    }else{
        res.status(401).json({message: 'Invalid Credentials'})
    }
})
app.get('/ping',async(req, res)=>{
    res.status(200).send('pong');
})

app.listen(3000, ()=>{
    console.log(('server is running on port 3000'));
    
})
