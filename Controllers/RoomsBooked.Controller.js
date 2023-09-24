const BookedController = require('express').Router();
let booked = []



//PATH : http://localhost:5000/api/booked/room
BookedController.get('/room',(request,response,next)=>{
    return response.status(200).json({
        Message: "Booked Room Data Fetched Successfully!",
        data: booked,
    });
});

//PATH : http://localhost:5000/api/booked/create
BookedController.post('/createBooking',(request,response,next)=>{
    const{RoomName='', bookedStatus='', customerName='', Date='', startTime='', endTime=''}= request.body
    console.log(request.body);
    if(RoomName && bookedStatus && customerName && Date && startTime && endTime){
        booked.push({
            RoomName, bookedStatus, customerName,Date, startTime, endTime
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

module.exports = BookedController;