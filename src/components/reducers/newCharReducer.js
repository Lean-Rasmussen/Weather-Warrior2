import * as constants from '../actions/constants'

export const charClass =(state=  '', action)=>{
    switch(action.type){
        //class selection
        case constants.CLASS_SELECTED:
            return action.selectedclass;
        // returning on default    
        default:
            return state
    }
}

export const charName =(state=  '', action)=>{
    switch(action.type){
        //Name Input 
        case constants.INPUT_NAME:
            return action.name;
        // returning on default    
        default:
            return state
    }
}
export const createChar =(state ='', action)=>{
    if(action.type === constants.NEW_CHAR_CREATED & action.class === 'Nerd'){
        return ({
            name: action.name,
            class: action.class,
            items:constants.NerdItems, 
            stats: constants.NerdStats,
            })
    }else if(action.type === constants.NEW_CHAR_CREATED & action.class === 'Girl Scout'){
        return ({
            name: action.name,
            class: action.class,
            items:constants.girlScoutItems, 
            stats: constants.girlScoutStats,
            })
    }else if(action.type === constants.NEW_CHAR_CREATED & action.class === 'Sports Prodegy'){
        return ({
            name: action.name,
            class: action.class,
            items:constants.sportsProdegyItems, 
            stats: constants.sportsProdegyStats,
            })

    }else if(action.type === constants.NEW_CHAR_CREATED & action.class === 'Collector'){
        return ({
            name: action.name,
            class: action.class,
            items:constants.collectorItems, 
            stats: constants.collectorStats,
            })
    }else if(action.type === constants.NEW_CHAR_CREATED & action.class === 'Fat Kid'){
        return {
            name: action.name,
            class: action.class,
            items:constants.fatKidItems, 
            stats: constants.fatKidStats,
            }

    }else return state
}
