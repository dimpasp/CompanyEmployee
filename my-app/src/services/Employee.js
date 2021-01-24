import { ActionCreators } from '../redux/actionsRedux';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001',
})

export const GetAllEmployee = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get('/Employee');
        console.log(data)
        dispatch(ActionCreators.setEmployee(data));
    } catch (exception){
        console.log(exception);
    }
}

export const DeleteEmployee = async (dispatch, employee) => {
    try {
        await axiosInstance.delete(`/Employee/${employee.id}`);
        dispatch(ActionCreators.deleteEmployee(employee));
    } catch (exception){
        console.log(exception);
    }
}


export const NewEmployee = async (dispatch, employee) => {
    try {
        const { data } = await axiosInstance.post('/Employee', employee);
        dispatch(ActionCreators.newEmployee(data));
    } catch (exception){
        console.log(exception);
    }
}

export const EditEmployee = async (dispatch, employee) => {
    try {
        await axiosInstance.put(`/Employee/${employee.id}`, employee);
        dispatch(ActionCreators.editEmployee(employee));

    } catch (exception){
        console.log(exception);
    }
}