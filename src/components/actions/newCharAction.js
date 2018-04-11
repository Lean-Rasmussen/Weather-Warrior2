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
export const createCharAction =(name, selectedClass)=>({
    type: constants.NEW_CHAR_CREATED,
    name:name,
    class: selectedClass,
})