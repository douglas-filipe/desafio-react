import { createContext, useContext, useState } from "react";
import api from '../../services/api'
import axios from 'axios'

const MusicContext = createContext()

export const MusicProvider = ({ children }) => {

    const [listMusics, setListMusics] = useState([])
    const [musicDate, setMusicDate] = useState('')

    const searchCity = async (valueInput) => {
        try{

        }catch(e){
            
        }
        const response = await api.get(
            `/weather?q=${valueInput}&units=metric&appid=c278df46841362a54c1073618e5e3175`
        );
        const { temp } = await response.data.main;
        const estilo = await verifyTemp(temp);
        reqListMusic(estilo);
    }

    const verifyTemp = (temp) => {
        if (temp > 32) {
            return "ROCK";
        } else if (temp < 32 && temp > 24) {
            return "POP";
        } else if (temp < 24 && temp > 16) {
            return "ELECTRONIC";
        } else if (temp < 16) {
            return "LATIN";
        }
    };

    const reqListMusic = async (style) => {
        const options = {
            method: "GET",
            url: "https://shazam-core.p.rapidapi.com/v1/charts/genre-world",
            params: { genre_code: style, limit: "10" },
            headers: {
                "x-rapidapi-host": "shazam-core.p.rapidapi.com",
                "x-rapidapi-key": "39b33b5103msh5ce9c53e39bbdbbp1c8258jsncdfcd27d1d43",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setMusicDate(Date.now())
                setListMusics(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    

    return (
        <MusicContext.Provider value={{searchCity, setListMusics, listMusics, musicDate}}>
            {children}
        </MusicContext.Provider>
    )
}

export const useMusic = () => useContext(MusicContext)