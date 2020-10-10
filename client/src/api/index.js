import axios from "axios";

const baseURL = "https://api.data.charitynavigator.org/v2";

// GET charities by zip code
const getByZIP = zipcode => {
  return axios
    .get(`${baseURL}/Organizations?app_id=f7141bd7&app_key=7aa7fbc4c09ef4c5dd4ed0207eb9f40b&zip=${zipcode}`)
    .then(res => {
        console.log("GET /zipcode", res);
        return res.data;
    })
    .catch(err => {
        console.log("GET /zipcode", err);
    })
};

export {
  getByZIP,
};