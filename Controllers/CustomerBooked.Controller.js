const CustomerBookedController = require('express').Router();
let customerBooked = []



//PATH : http://localhost:5000/api/data/
CustomerBookedController.get('/',(request,response,next)=>{
    return response.status(200).json({
        Message: "Booked Data Fetched Succesfully",
        data: customerBooked,
    });
});

//PATH : http://localhost:5000/api/data/create
CustomerBookedController.post('/create',(request,response,next)=>{
    const{customerName='', roomName='', Date='', startTime='', endTime='', bookingId='', bookingDate='', bookingStatus=''}= request.body
    if(customerName && roomName&& Date && startTime && endTime && bookingId && bookingDate && bookingStatus){
        customerBooked.push({
            customerName, roomName, Date, startTime,endTime, bookingId, bookingDate, bookingStatus
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

module.exports = CustomerBookedController;