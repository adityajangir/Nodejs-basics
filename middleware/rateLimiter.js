

let rateStore = {};
let commonHits = [];

const rateLimiter = (req, res, next) => {
    let fullname = req.body.customer_name;
    if(!fullname) return res.status(401).json("Customer_name required!")

    if(!rateStore[fullname]) rateStore[fullname] = [];
    let currenttime = new Date();

    rateStore[fullname] = rateStore[fullname].filter(timestamp => currenttime-timestamp < 120000);
    console.log(rateStore)
    if(rateStore[fullname].length >=1){
        return res.status(401).json(`You cannot make 2 request within 2 minutes. Your last request was made on ${rateStore[fullname][0]}`)
    }
    commonHits = commonHits.filter(timestamp => currenttime-timestamp < 300000);
    if(commonHits.length >= 2){
        return res.status(401).json('Make another request in some time!');
    }
    rateStore[fullname].push(currenttime);
    commonHits.push(currenttime);
    console.log(commonHits);

    next();
}


export default rateLimiter;