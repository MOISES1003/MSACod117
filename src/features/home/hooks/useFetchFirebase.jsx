import { useDispatch, useSelector } from "react-redux";
import { fetchFirebaseViews } from "../services/fetchFirebaseViews";
import { incrementFirebaseViews } from "../services/incrementFirebaseViews";
import { useEffect } from "react";

export function useFetchFirebase() {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.home.firebase || []);
  const loading = useSelector((state) => state.home.loading);
  const error = useSelector((state) => state.home.error);

  useEffect(() => {
    const unsubscribe = dispatch(fetchFirebaseViews());
    // Cleanup: Cancelar la suscripción cuando se desmonte el componente
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [dispatch]);

  const loadFirebase = async () => {
    await dispatch(incrementFirebaseViews());
  };

  return { firebase, loadFirebase, loading, error };
}
