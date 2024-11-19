// fetchGitEvents.js
import { Start, Failure, fetchFirebaseSuccess } from "../store/homeSlice";
import { db } from "../../../env/enviroment";
import { doc, getDoc } from "firebase/firestore";
export const fetchFirebaseViews = () => async(dispatch) => {
    dispatch(Start());
    const visitasRef = doc(db, "visitas", "23bCIlytGq4TZ7tL6UGZ");
    try {
        const visitasSnapshot = await getDoc(visitasRef);
        dispatch(fetchFirebaseSuccess(visitasSnapshot.data()));

    } catch (error) {
        dispatch(Failure("Error fetching events:" + error.toString()));
    }
};