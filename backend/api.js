var express = require('express')
var cors = require('cors')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var patientmodel = require('./pRegister')
var doctermodel = require('./dRegister')
var pDetail = require('./pDetail')
var bcrypt = require('bcrypt');


var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static("attach"));

mongoose.connect("mongodb://127.0.0.1:27017/Learn_Lookup")
.then((res)=>{
    console.log(res,"DB Connected")
}).catch(err=>{console.log(err)});

//User Register API
app.post("/UserRegister",async(req,res)=>{
    const{pname,email,address,mobile,password}=req.body;

    const pid = await patientmodel.findOne({mobile:mobile});
    const secPass=await bcrypt.hash(password,10);

    if(!pid){
    let send = await patientmodel.create({
        pname:pname,
        email:email,
        address:address,
        mobile:mobile,
        password:secPass,
    })

    if(send){
        res.status(200).json({'msg':'data inserted'})
    }
    else{
        res.status(400).json({'error':'Invalid Argu'})
    }
}
else{
    res.status(400).json({"error":"This Phone number is already registerd"})
}
})

//Patient Login
app.post("/userLogin",async(req,res)=>{
    const{pname,password}=req.body;

    let login = await patientmodel.findOne({pname:pname})

    if(login){
        const cpass = await bcrypt.compare(password,login.password);
        if(cpass){
        // res.status(200).json({"msg":"Right User and Password"});
        res.send(login);
    }
        else{
        res.status(400).json({"error":"Wrong Password"});
    }
}
    else{
        res.status(400).json({"error":"Wrong User"})
    }
})

//Docter Register
app.post("/DocterRegister",async(req,res)=>{
    const{id,dname,profession,mobile,password}=req.body;

    const did = await doctermodel.findOne({mobile:mobile});
    const secPass=await bcrypt.hash(password,10);

    if(!did){
    let send = await doctermodel.create({
        id:id,
        dname:dname,
        profession:profession,
        mobile:mobile,
        password:secPass,
    })

    if(send){
        res.status(200).json({'msg':'data inserted'})
    }
    else{
        res.status(400).json({'error':'Invalid Argu'})
    }
}
else{
    res.status(400).json({"error":"This number is already registerd"})
}
})

//Docter Login
app.post("/docterLogin",async(req,res)=>{
    const{dname,password}=req.body;

    let login = await doctermodel.findOne({dname:dname})

    if(login){
        const cpass = await bcrypt.compare(password,login.password);
        if(cpass){
        // res.status(200).json({"msg":"Right User and Password"});
        res.send(login);
    }
        else{
        res.status(400).json({"error":"Wrong Password"});
    }
}
    else{
        res.status(400).json({"error":"Wrong User"})
    }
})

//multer npm
var multer = require('multer');
const dRegister = require('./dRegister')

let storage= multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'attach')
    },

    filename:function(req,file,cb){
        cb(null,file.fieldname+ '-'+Date.now()+'.'+file.originalname.split('.')
		[file.originalname.split('.').length-1])
       }


});
let upload = multer({storage:storage}).single('attachment');

// Dieses Details
app.post("/appointment",async(req,res)=>{

    upload(req,res,async(err)=>{

        if(err){
            res.status(400).json({"error":"Error in Image Uploading"})
        }
        else{
            const{pname,category,address,age,description}=req.body;

            let send = pDetail.create({
                "pname":pname,
                "category":category,
                "address":address,
                "age":age,
                "description":description,
                "attachment":req.file.filename
            })
            if(send){
            res.status(200).json({"Success":"Appointment fixed"})
            }
            else{
            res.status(400).json({"error":"Error in DB query"})
            }
        }
    })
})

//fetch Disease detail
app.get("/fetchDetail",async(req,res)=>{

    

    const abc = await pDetail.aggregate([
        {
            $lookup:{
                from:"dregister",
                localField:"id",
                foreignField:"category",
                as:"matched_data"
            }
        }
    ])
    
res.send(abc);
})

app.listen(1234);
