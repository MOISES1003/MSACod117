/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/
import { Start, fetchStarredSuccess, Failure } from "../store/homeSlice";

//obtener listado de los lentes
export const fetchGitStarred = () => async(dispatch) => {
    dispatch(Start());
    try {
        const username = "MOISES1003";

        // Obtener repositorios estrellados
        const starsResponse = await fetch(
            `https://api.github.com/users/${username}/starred`
        );

        const starsData = await starsResponse.json();
        dispatch(fetchStarredSuccess(starsData));
    } catch (error) {
        dispatch(Failure("Error fetching events:" + error.toString()));
    }
};