import Inputdata from "../models/inputmodel.js";

const dbsearchController = async (req, res) => {
    const date0 = Date.now();
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
        // const data = await Inputdata.find({});
        console.log(data);
        const date3 = Date.now();
        const timetaken = date3-date0;
        return res.status(200).json({"Data": data, "Time Taken in seconds": timetaken/1000});
    }catch(error){
        console.log(error)
        return res.status(401).json("Error fetching data!")
    }
}

export default dbsearchController;