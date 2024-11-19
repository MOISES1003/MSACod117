import { useDispatch, useSelector } from "react-redux";

import { fetchFirebaseViews } from "../services/fetchFirebaseViews";
import { incrementFirebaseViews } from "../services/incrementFirebaseViews";

export function useFetchFirebase() {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.home.firebase || []);
  const loading = useSelector((state) => state.home.loading);
  const error = useSelector((state) => state.home.error);
  const loadFirebase = async () => {
    await dispatch(incrementFirebaseViews());
    dispatch(fetchFirebaseViews());
  };
  const loadFecth = async()=>{
    dispatch(fetchFirebaseViews());
  }

  return { firebase, loadFirebase,loadFecth, loading, error};
}
