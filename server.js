const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person = require('./models/person');
const menuitem = require('./models/menuitem');

//only routes use

//const personRoutes=require('./routes/personRoutes');
//app.use('/person',personRoutes);


//const menueRoutes=require('./routes/menueRoutes');
//app.use('/person',menueRoutes);



app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data saved:", response); // Log the saved data
        res.status(200).json(response);
    } catch (err) {
        console.error("Error:", err); // Log the actual error
        res.status(500).json({ error: 'Internal server error' });
    }
});




app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fatched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
})

//menu item post method

app.post('/menuitem', async (req, res) => {
    try {
        const data = req.body;
        const newmenuitems = new menuitem(data);
        const response = await newmenuitems.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log("err");
        res.status(500).json({ err: 'internal server' });
    }
});



//get method to get menu
app.get('/menuitem', async (req, res) => {
    try {
        const data = await menuitem.find();
        console.log('data fatched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
})
/*
app.put('/person/:id', async(req,res)=>{
    try{
        const personid=req.params.id;
        const updatepersonid=req.body;
        const response=await Person.findByIdAndUpdate(personid,updatepersonid,{
            new:true,
            runValidators:true,

        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log("data featched");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
      
})
*/

app.put('/person/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log("Data fetched");
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log("listning on port 3000");
});