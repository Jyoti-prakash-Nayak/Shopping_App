import axios from 'axios';


export const signup=async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        },
    };
    const response=await axios.post('http://localhost:5002/api/auth/signup',data,config);
    //const response=await axios.post("http://localhost:5001/add",data);

    return response;
};

export const signin = async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        },
    };
    const response=await axios.post('http://localhost:5002/api/auth/signin',data,config);
    //const response=await axios.post("http://localhost:5001/add",data);

    return response;
};

