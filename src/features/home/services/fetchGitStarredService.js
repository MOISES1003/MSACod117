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
        // Obtener lenguajes para cada evento que tenga un repositorio y un languages_url válido
        const eventsWithLanguages = await Promise.all(
            starsData.map(async(event) => {
                // Verificar si existe languages_url en el repositorio
                if (event.languages_url) {
                    const languagesResponse = await fetch(event.languages_url);
                    const languagesData = await languagesResponse.json();
                    // Agregar los lenguajes al evento
                    return {...event, languages: languagesData };
                }
                // Si no tiene repo o languages_url, retornar el evento sin lenguajes
                return event;
            })
        );
        dispatch(fetchStarredSuccess(eventsWithLanguages));
    } catch (error) {
        dispatch(Failure("Error fetching events:" + error.toString()));
    }
};