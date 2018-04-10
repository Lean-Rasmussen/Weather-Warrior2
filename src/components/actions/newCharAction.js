import * as constants from '../actions/constants';

export const classSelected = (SelectedClass)=>(
    {
        type: constants.CLASS_SELECTED,
        selectedclass: SelectedClass,
    }
)

export const inputName = (name)=>({
    type: constants.INPUT_NAME,
    name: name,
    }
)