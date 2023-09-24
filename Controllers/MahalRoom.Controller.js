const MahalController = require('express').Router();
let mahal = []



//PATH : http://localhost:5000/api/mahal/room
MahalController.get('/room',(request,response,next)=>{
    return response.status(200).json({
        Message: "Room Fetched Succesfully",
        data: mahal,
    });
});

//PATH : http://localhost:5000/api/mahal/create
MahalController.post('/create',(request,response,next)=>{
    const{numberOfSeats=0, amentities=[], pricePerHour=0}= request.body
    console.log(request.body);
    if(numberOfSeats && amentities && pricePerHour){
        mahal.push({
            numberOfSeats, amentities, pricePerHour
        })
        return response.status(200).json({
            Message: "Room created Successfully!!"
        })
    }else{
        return response.status(400).json({
            Message: "Error Occured while creating!"
        });
    };
});

module.exports = MahalController;