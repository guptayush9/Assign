var jwt=require('jsonwebtoken');
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var hs_useremail=req.body.hs_useremail;
    var hs_userpassword=req.body.hs_userpassword;
    // var query='SELECT * FROM client WHERE cl_emailid="'+email+'" and cl_password = "'+password+'"';
    var query='SELECT hs_id, hs_emailid, hs_name, hs_description, hs_address, hs_googlelocation, hs_latitude, hs_longitude, hs_registrationstatus, lc_locationpin FROM abcd WHERE hs_emailid =  "'+hs_useremail+'" AND hs_password =  "'+hs_userpassword+'"';
    console.log(query);
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
          if(results.length >0){
                var token = jwt.sign(JSON.parse(JSON.stringify(results[0])), process.env.SECRET_KEY, {
                    expiresIn: 5000 
                  });
                  res.json({
                      status:true,
                      token:token,
                      data:results
                  })
              }
              else{
                  res.json({
                    status:false,                  
                    message:"Email and password does not match"
                   });
              }
        }
      });
  }