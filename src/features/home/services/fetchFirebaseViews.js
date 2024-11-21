import { Start, Failure, fetchFirebaseSuccess } from "../store/homeSlice";
import { db } from "../../../env/enviromentFirebase";
import { doc, onSnapshot } from "firebase/firestore";

export const fetchFirebaseViews = () => (dispatch) => {
    dispatch(Start());
    const visitasRef = doc(db, "visitas", "23bCIlytGq4TZ7tL6UGZ");

    try {
        // Escuchar actualizaciones en tiempo real
        const unsubscribe = onSnapshot(visitasRef, (snapshot) => {
            if (snapshot.exists()) {
                dispatch(fetchFirebaseSuccess(snapshot.data()));
            } else {
                console.error("El documento no existe.");
            }
        });

        // Devolver función para cancelar suscripción (opcional, si lo necesitas)
        return unsubscribe;
    } catch (error) {
        dispatch(Failure("Error fetching events: " + error.toString()));
    }
};