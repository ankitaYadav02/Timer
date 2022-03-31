import createRoomServices from "../Services/services.js";

const createRoomControllers = (req,res) => {
    const{ url, duration, owner } = req.body;
    if(!url || !duration || owner) {
        return res.status(400).send({message: 'NOT FOUND'});
    } else {
        createRoomServices(req,res);
    }
}
export default createRoomControllers;