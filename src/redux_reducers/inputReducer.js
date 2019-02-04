export default function (state = {
    input: "",
    default: "string"
}, action){
    switch(action.type){
        case "INPUT":
            return {
                ...state,
                input: state.input+action.payload
            }
        default:
            return state;
    }
}