const regiserUser = (state = [], action) => {
    switch (action.type) {
        case 'Register_user':
            return [...state, action.payload]

        default:
            return state
    }
}
export default regiserUser;