import { SUCCESS, FAIL } from "../../constants/restConstants"

export const bikeReducer = (state = { biketList: [] }, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                bikeList: action.payload
            }

        case FAIL:
            return {
                bikeList: action.payload
            }
        default:
            return state
    }

}