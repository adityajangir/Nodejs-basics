import Inputdata from "../models/inputmodel.js"
import calculateAge from "./agecalculation.js";




const dbsavecontroller = async (req, res) => {
    try {
      // const inputdata = req.body;
      const element = req.body;
      
      // Check age for each element
      // for (const element of inputdata) {
      const ageforelement = calculateAge(element.dob);
      console.log(ageforelement);
      if (ageforelement < 15) {
        return res.status(401).json("Age smaller than 15!");
      }
      // }
  
      // If all ages are valid, proceed to insert data
      // await Inputdata.insertMany(inputdata);
      const data = new Inputdata(element);
      data.save();
      console.log("Data inserted");
      return res.status(200).json("The data is successfully inserted.");
    } catch (error) {
      console.log(error);
      return res.status(401).json("Data not according to required standards!");
    }
  };
  
export default dbsavecontroller;