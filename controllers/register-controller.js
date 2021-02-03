var connection = require('./../config');
module.exports.register=function(req,res){
    
    var sql = 'INSERT INTO client SET ?';
    //console.log(firstname);
    var client={
        "cl_id":req.body.cl_id,
        "cl_firstname":req.body.cl_firstname,
        "cl_middlename":req.body.cl_middlename,
        "cl_lastname":req.body.cl_lastname,
        "cl_emailid":req.body.cl_emailid,
        "cl_password":req.body.cl_password,
        "cl_age":req.body.cl_age,
        "cl_gender":req.body.cl_gender,
        "cl_aadhaarno":req.body.cl_aadhaarno,
        "cl_panno":req.body.cl_panno
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