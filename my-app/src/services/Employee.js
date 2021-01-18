import {ActionCreators} from '../redux/actionsRedux';
import * as axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'https://localhost:5001/Employee',
})

export const GetAllEmployee=async(dispatch)=>{
    try{
      const{data}=await axiosInstance.get();

        dispatch(ActionCreators.setEmployee(data));
    }catch{
        console.log('something happen!!');
    }
}

export const DeleteEmployee=async(dispatch,employee)=>{
    try{
       

        dispatch(ActionCreators.deleteEmployee(employee));
    }catch{
        console.log('something happen!!');
    }
}