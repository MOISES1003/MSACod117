import { useDispatch, useSelector } from "react-redux";
import { fetchGitEvents } from "../services/fetchGitEventsService";
import { fetchGitStarred } from "../services/fetchGitStarredService";

export function useFetchGit() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.home.events || []);
  const starred = useSelector((state) => state.home.starred || []);
  const loading = useSelector((state) => state.home.loading);
  const error = useSelector((state) => state.home.error);
  const loadEvents = async () => {
    dispatch(fetchGitEvents());
  };
  const loadStarred = async () => {
    dispatch(fetchGitStarred());
  };

  return { events, starred, loading, error, loadEvents, loadStarred };
}
