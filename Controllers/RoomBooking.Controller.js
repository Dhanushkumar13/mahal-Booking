const BookingController = require('express').Router();
let booking = []



//PATH : http://localhost:5000/api/booking/room
BookingController.get('/room',(request,response,next)=>{
    return response.status(200).json({
        Message: "Room Fetched Succesfully",
        data: booking,
    });
});

//PATH : http://localhost:5000/api/booking/createBooking
BookingController.post('/createBooking',(request,response,next)=>{
    const{customerName='', date='', startTime='', endTime='', RoomId=''}= request.body
    console.log(request.body);
    if(customerName && date && startTime && endTime && RoomId){
        booking.push({
            customerName, date, startTime,endTime, RoomId
        })
        return response.status(200).json({
            Message: "Booking created Successfully!!"
        })
    }else{
        return response.status(400).json({
            Message: "Error Occured while creating!"
        });
    };
});

module.exports = BookingController;