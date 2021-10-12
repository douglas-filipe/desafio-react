import { useMusic } from "../../contexts/music";
import { useState } from "react";
import toast from "react-hot-toast";
import { Container, Music } from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";

export const PlayList = () => {
  const [playListSave, setListSave] = useState(
    JSON.parse(localStorage.getItem("@music")) || []
  );

  const deletePlayList = (city) => {
    const newList = playListSave.filter((play) => {
      return play.city !== city;
    });

    localStorage.setItem("@music", JSON.stringify(newList));
    setListSave(JSON.parse(localStorage.getItem("@music")) || []);
    toast.success("Item removido");
  };

  return (
    <>
      <Link to="/" className="Back">
        <AiFillBackward/>Voltar
      </Link>
      <Container>
        {playListSave &&
          playListSave.map((list) => {
            return (
              <>
                <Music>
                  <h1>Data: {list.date}</h1>
                  {list.playlist.map((e) => (
                    <p>{e}</p>
                  ))}
                  <button onClick={() => deletePlayList(list.city)}>
                    <RiCloseCircleFill />
                    Excluir
                  </button>
                </Music>
              </>
            );
          })}
      </Container>
    </>
  );
};
