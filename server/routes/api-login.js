module.exports = function(app){
    app.post('/api/auth' ,function(req,res){
        let users =  [
            { 'id':"1" , "username":"username1" , "email":"username1@1.com" , "birthdate":"01/01/01", "age":1, "pwd":"PW1" , "valid":"true"},
            { 'id' :"2" , "username":"username2" , "email":"username2@2.com" , "birthdate":"02/02/02", "age":2, "pwd":"PW2" , "valid":"true"},
            { 'id' :"3" , "username":"username3" , "email":"username3@3.com" , "birthdate":"03/03/03", "age":3, "pwd":"PW3" , "valid":"true"}] 
        
        if (!req.body) {
            return res.sendStatus(400)
        }
            
            var customer = {}; 
            // console.log(req);

            customer.valid = false;
            customer.email = "";
            customer.username = "";
            customer.birthdate = ""; 
            customer.age = 0;
            console.log(req.body)
            
        for (let i=0;i<users.length;i++){
            if ((req.body.email == users[i].email) && (req.body.pwd == users[i].pwd)){
                customer.valid = "true";
                customer.email = users[i].email;
                customer.username = users[i].username;
                customer.birthdate = users[i].birthdate;
                customer.age = users[i].age;
            }
        }
            res.send(customer);
    })
}
