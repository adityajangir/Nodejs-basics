
const calculateAge = (dob) => {
    const inputDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - inputDate.getFullYear();
    if((currentDate.getMonth()-inputDate.getMonth()<0) || (currentDate.getMonth()-inputDate.getMonth()==0 && currentDate.getDay()<inputDate.getDay())){
        age--;
    }
    return age;
}


export default calculateAge;