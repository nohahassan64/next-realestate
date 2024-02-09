import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

/*export const fetchApi = async (url) => {
    const {data} = await axios.get( (url) , {
        headers: {
            'X-RapidAPI-Key': 'fb84f14fb2msh66e5063ca1acdd5p1b448djsncf320dedf251',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}
// 'iFUdxubHsQmshe51vbzzowIsXzBrp1zQDPGjsnlyuFeY1DeBLs'*/

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'fb84f14fb2msh66e5063ca1acdd5p1b448djsncf320dedf251'
        },
    });

    return data;
}