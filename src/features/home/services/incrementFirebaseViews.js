// fetchGitEvents.js
import { Start, Failure } from "../store/homeSlice";
import { db } from "../../../env/enviromentFirebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
export const incrementFirebaseViews = () => async(dispatch) => {
    dispatch(Start());;
    const visitasRef = doc(db, "visitas", "23bCIlytGq4TZ7tL6UGZ");
    try {
        // Obtener el contador actual
        const visitasSnapshot = await getDoc(visitasRef);
        if (visitasSnapshot.exists()) {
            // Incrementar el contador en 1
            await updateDoc(visitasRef, {
                contador: increment(1),
            });
        } else {
            console.error("El documento de visitas no existe.");
        }
    } catch (error) {
        dispatch(Failure("Error fetching events:" + error.toString()));
    }
};