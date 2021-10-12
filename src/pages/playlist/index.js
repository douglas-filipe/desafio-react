import { useMusic } from "../../contexts/music";

export const PlayList = () => {
  const playListSave = JSON.parse(localStorage.getItem("@music")) || [];
  console.log(playListSave);
  return (
    <div>
      {playListSave.length === 0 ? (
        <p>Playlist vazia</p>
      ) : (
        <>
          {playListSave.map((list) => {
            return (
              <div>
                <p>{list.date}</p>
                {list.playlist.map((e) => (
                  <p>{e}</p>
                ))}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
