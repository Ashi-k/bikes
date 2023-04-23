import axios from "axios";
import { SUCCESS, FAIL } from "../constants/bikeConstants";



 const bikeLists = () => async (dispatch) => {

    try {
        const {data} = await axios.get('/bike.json')

        
        dispatch(
            {
                payload: data.bikes,
                type: SUCCESS
            }
        )

    }
    catch(error) {

        dispatch(
            {
                payload:error ,
                type: FAIL 
            }
        )
    }
}

export default bikeLists