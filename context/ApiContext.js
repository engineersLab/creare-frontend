import createDataContext from './createDataContext'
import axios from 'axios'

const instance = axios.create()

const apiReducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}

const registerUser = dispatch => async (data) =>{

    const params = {
        "name":{
            "first":data.firstName,
            "last":data.lastName
        },
        "role": data.role,
        "instId": "5f0c8839068cb4379170f38d",
        "password": data.password,
        "email": data.email
    }
    console.log(data)
    try{
        var res = await instance.post('/https://crearee.herokuapp.com/api/user/register',params)
        console.log(res)
    }catch(err){
        dispatch({type:'error'})
    } 
}

const registerInstitute = dispatch => async (data) =>{​

    const params = {
        "name": data.insName,
        "address": {
            "address1": data.addOne,
            "city": data.city,
            "state": data.state,
            "pincode": data.pincode,
            "country": data.country
        },
        "contact": {
            "email": data.email,
            "phone": data.phone,
            "altPhone": data.altPhone
        },
        "instType": data.insType,
        "idProof": data.idProof
    }
    try{
        // var res = await instance.post('/',params)
    }catch(err){
        dispatch({type:'error'})
    } 
}



export const { Provider, Context } = createDataContext(
    apiReducer,
    { 
    registerUser, registerInstitute
    },
    {}
)