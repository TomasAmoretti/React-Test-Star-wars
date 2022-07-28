import axios from 'axios';

export default function getCharacters(){
    return axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        const persons = res.data.results;
        return persons;
      })
      .catch(error => {
        return [];
      })
}