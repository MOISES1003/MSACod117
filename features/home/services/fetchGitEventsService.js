// fetchGitEvents.js
import { Start, fetchEventsSuccess, Failure } from "../store/homeSlice";

export const fetchGitEvents = () => async(dispatch) => {
    dispatch(Start());
    try {
        const username = "MOISES1003";
        const eventsResponse = await fetch(
            `https://api.github.com/users/${username}/events`
        );
        const eventsData = await eventsResponse.json();
        const recentEvents = eventsData.slice(0, 10);
        dispatch(fetchEventsSuccess(recentEvents));
    } catch (error) {
        dispatch(Failure("Error fetching events:" + error.toString()));
    }
};