const CustomerController = require('express').Router();
let customerData = []



//PATH : http://localhost:5000/api/customer/data
CustomerController.get('/data',(request,response,next)=>{
    return response.status(200).json({
        Message: "Customer Data Fetched Succesfully",
        data: customerData,
    });
});

//PATH : http://localhost:5000/api/customer/create
CustomerController.post('/create',(request,response,next)=>{
    const{customerName='', roomName='', Date='', startTime='', endTime=''}= request.body
    console.log(request.body);
    if(customerName && roomName&& date && startTime && endTime){
        customerData.push({
            customerName, roomName, date, startTime,endTime
        })
        return response.status(200).json({
            Message: "Customer Data created Successfully!!"
        })
    }else{
        return response.status(400).json({
            Message: "Error Occured while creating!"
        });
    };
});

module.exports = CustomerController;