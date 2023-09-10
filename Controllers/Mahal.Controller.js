const MahalController = require('express').Router();
const mahal = []


//PATH : http://localhost:5000/api/mahal/
MahalController.get('/',(request,response,next)=>{
    return response.status(200).json({
        Message: "Mahal Fetched Succesfully",
        data: mahal,
    });
});

//PATH : http://localhost:5000/api/mahal/create
MahalController.post('/create',(request,response,next)=>{
    const {name='', pricePerHour= '', location= '', capacity=''} = request.body
    if (name && pricePerHour && location && capacity){
        mahal.push({
            name, pricePerHour, location, capacity
        });
    }
    return response.status(200).json({
        Message: "Mahal Created Succesfully",
    });
});

module.exports = MahalController;