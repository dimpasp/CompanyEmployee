const initialState = {
    employee: [],
}

export const ActionTypes = {
    SET_EMPLOYEE: 'SET_EMPLOYEE',
    DELETE_EMPLOYEE:'DELETE_EMPLOYEE',
    EDIT_EMPLOYEE:'EDIT_EMPLOYEE',
    NEW_EMPLOYEE:'NEW_EMPLOYEE',
}

export const ActionCreators = {
    setEmployee: payload => ({ types: ActionTypes.SET_EMPLOYEE, payload }),
    deleteEmployee: payload => ({ types: ActionTypes.DELETE_EMPLOYEE, payload }),
    editEmployee: payload => ({ types: ActionTypes.EDIT_EMPLOYEE, payload }),
    newEmployee: payload => ({ types: ActionTypes.NEW_EMPLOYEE, payload }),

}

export default function ActionsRedux(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_EMPLOYEE:
            return { ...state, employee: [...action.payload] };
        case ActionTypes.DELETE_EMPLOYEE:
            for(let i=0;i<state.employee.length;i++){
                if(state.employee[i].id===action.payload.id){
                    state.employee.splice(i,1);
                    break;
                }
            }
            return {...state,employee:[...state.employee]}
         case ActionTypes.NEW_EMPLOYEE:
            return { ...state, employee: [...state.employee,action.payload] };
         
            case ActionTypes.EDIT_EMPLOYEE:
                for(let i=0;i<state.employee.length;i++){
                    if(state.employee[i].id===action.payload.id)
                    {
                        state.employee[i].firstName=action.payload.firstName;
                        state.employee[i].lastName=action.payload.lastName;
                        state.employee[i].phone=action.payload.phone;
                        state.employee[i].address=action.payload.address;
                        state.employee[i].email=action.payload.email;        
                    }
                }
                return {...state,employee:[...state.employee]}
        default:
             return state;
    }
}
