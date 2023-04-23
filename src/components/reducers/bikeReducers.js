import { SUCCESS,FAIL } from "../constants/bikeConstants"

export const bikeReducer = (state = { bikeList: [] }, action) => {
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