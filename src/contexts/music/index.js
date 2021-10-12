import { createContext, useContext, useState } from "react";
import api from '../../services/api'
import axios from 'axios'
import toast from "react-hot-toast";

const MusicContext = createContext()

export const MusicProvider = ({ children }) => {

    const [listMusics, setListMusics] = useState([])
    const [musicDate, setMusicDate] = useState('')
    const [musicTemp, setMusicTemp] = useState('')
    const [musicCity, setMusicCity] = useState('')
    const [musicStyle, setMusicStyle] = useState('')
    const [number, setNumber] = useState(0)

    const playListSave = JSON.parse(localStorage.getItem("@music")) || []

    const searchCity = async (valueInput) => {
        try{
            const response = await api.get(
                `/weather?q=${valueInput}&units=metric&appid=c278df46841362a54c1073618e5e3175`
            );
            const { temp } = await response.data.main;
            setMusicTemp(temp)
            setMusicCity(valueInput)
            const estilo = await verifyTemp(temp);
            reqListMusic(estilo);
            setMusicStyle(estilo)
        }catch(e){
            setListMusics([])
            toast.error("Cidade não encontrada")
        }
        
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
                const date = new Date().toLocaleDateString('pt-BR')
                setMusicDate(date)
                setListMusics(response.data)
            })
            .catch(function (error) {
                
            });
    };

    return (
        <MusicContext.Provider value={{searchCity, setListMusics, listMusics, musicDate, playListSave, musicTemp, musicCity, musicStyle, setNumber, number }}>
            {children}
        </MusicContext.Provider>
    )
}

export const useMusic = () => useContext(MusicContext)