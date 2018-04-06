import * as constants from './constants';

export const navAction = (screen)=>(
    {
        type: constants.SET_SCREEN,
        mainScreen: screen,
    }

)