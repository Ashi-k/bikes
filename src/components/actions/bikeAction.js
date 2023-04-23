import axios from "axios";
import { SUCCESS, FAIL } from "../constants/bikeConstants";
import { type } from "@testing-library/user-event/dist/type";


export const bikeList = () => async (dispatch) => {

    try {
        const { data } = await axios.get('/bikes.json')
        console.log(data.bikes);
        dispatch(
            {
                payload: data.bikes,
                type: SUCCESS
            }
        )

    }
    catch (error) {

        dispatch(
            {
                payload:error ,
                type: FAIL 
            }
        )
    }
}