import Inputdata from "../models/inputmodel.js";

const dbsearchController = async (req, res) => {
    const date1 = new Date();
    const date2 = new Date();

    date1.setFullYear(date1.getFullYear()-25);
    date2.setFullYear(date2.getFullYear()-10);
    try{
        const data = await Inputdata.find({
            dob: {
              $gte: date1,
              $lte: date2
            }
          })
        return res.status(200).json(data);
    }catch(error){
        console.log(error)
        return res.status(401).json("Error fetching data!")
    }
}

export default dbsearchController;