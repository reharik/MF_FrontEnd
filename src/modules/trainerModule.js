import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;


// export const LOGIN_SUCCESS = 'methodFit/auth/LOGIN_SUCCESS';


export default (state = [], action = {}) => {
    return state;
}


export function createNewTrainer(dispatch) {

    dispatch(notifSend({
        message: 'hello world',
        kind: 'info',
        dismissAfter: 2000
    }));
}
