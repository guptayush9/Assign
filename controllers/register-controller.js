var connection = require('./../config');
module.exports.register=function(req,res){
    
    var sql = 'INSERT INTO client SET ?';
    //console.log(firstname);
    var client={
        "hs_id":req.body.hs_id,
        "hs_firstname":req.body.hs_firstname,
        "hs_middlename":req.body.hs_middlename,
        "hs_lastname":req.body.hs_lastname,
        "hs_emailid":req.body.hs_emailid,
        "hs_password":req.body.hs_password,
        "hs_age":req.body.hs_age,
        "hs_gender":req.body.hs_gender,
        "hs_aadhaarno":req.body.hs_aadhaarno,
        "hs_panno":req.body.hs_panno
    }
    connection.query(sql,[client],function(err,result){
      if (err) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:result,
            message:'user registered sucessfully'
        });
      }
      
    });  
    
}