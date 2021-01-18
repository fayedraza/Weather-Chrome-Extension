
const express = require('express')
const cors = require('cors')
const app = express()

const accountSid = "AC4954ccf3dce9a486e108e02fb5cff698";
const authToken = "63c7c769208e08c30c04d72e3cb84502";
const client = require("twilio")(accountSid, authToken);

app.use(cors());

app.get("/", function(req,res){
  res.send("hello world")
});

app.get("/send-text", function(req,res){
 
  const {recipient, textmessage} =  req.query;
  
  console.log(recipient)
  console.log(textmessage)

  const editedVersion =  textmessage;

  client.messages.create({
       body: editedVersion,
       to: "+1"+recipient,
       from: "+17066034842"
     })
    .then((message) => console.log(message.body));
    
});
 
app.listen(process.env.PORT || 3000);
