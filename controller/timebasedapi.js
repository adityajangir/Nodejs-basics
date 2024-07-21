import Inputdata from "../models/inputmodel.js";


const timebasedapiController = (req, res) => {
    const currentdateandtime = new Date();

    const todayday = currentdateandtime.getDay();
    if(todayday == 1){
        return res.status(401).json("Please do not use this api on monday");
    }
    if(currentdateandtime.getHours() >=8 && currentdateandtime.getHours() < 16){
        return res.status(401).json("Please try after 3pm");
    }
    try{
        const data = new Inputdata(req.body);
        data.save();
    }catch(error){
        console.log(error);
        return res.status(401).json("Data not acc to standards.");
    }
    return res.status(200).json("Data inserted successfully!");
}


export default timebasedapiController;