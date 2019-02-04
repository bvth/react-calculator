export default function input(input){
    return dispatch => {
        dispatch({
            type: "INPUT",
            payload: input
        })
    }
}