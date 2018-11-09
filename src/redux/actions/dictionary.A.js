
// key for https://dictionaryapi.com/
const API_KEY = 'dc94651e-f5ee-4986-80a5-588dcb4bc932'

export const fetchDefinition = (word) => {
  return dispatch => {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "FETCH_DEFINITION", payload: data });
        return data;
      })
      .catch(function(error) {
				console.error(error);
        return error;
      });
  };
};