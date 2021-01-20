import { ActionCreators } from '../redux/actionsRedux';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001',
})

export const GetAllEmployee = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get('/Employee');
        dispatch(ActionCreators.setEmployee(data));
    } catch {
        console.log('something happen!!');
    }
}

export const DeleteEmployee = async (dispatch, employee) => {
    try {
        await axiosInstance.delete('/Employee/${id}');
        dispatch(ActionCreators.deleteEmployee(employee));
    } catch {
        console.log('something happen!!');
    }
}


export const NewEmployee = async (dispatch, employee) => {
    try {
        const { data } = await axiosInstance.post('/Employee', employee);
        dispatch(ActionCreators.newEmployee(data));
    } catch {
        console.log('something happen!!');
    }
}

export const EditEmployee = async (dispatch, employee) => {
    try {
        await axiosInstance.put('/Employee/${id}', employee);
        dispatch(ActionCreators.editEmployee(employee));

    } catch {
        console.log('something happen!!');
    }
}