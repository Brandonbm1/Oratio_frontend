import { useState } from "react";

const listVideos = [
  {
    name: "zapatos",
    link: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Seven_segment_display-animated.gif",
  },
  {
    name: "computador",
    link: "https://i.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
  },
  {
    name: "zapatos",
    link: "https://i.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
  },
];

const Search = () => {
  const [list, setList] = useState(listVideos);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    listVideos.forEach((video) => {
      if (video.name == text.trim().toLowerCase()) list.push(video);
    });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <main className="search">
        <form className="search_form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search_form-text"
            value={text}
            onChange={handleChange}
          />
          <button className="search_form-button" id="button">
            Buscar
          </button>
        </form>
        <div className="separator" />
        <section className="search_result">
          {list &&
            list.map((video, index) => {
              if (video.name === text.trim().toLowerCase()) {
                return (
                  <div key={index}>
                    <span className="search_result-text">{video.name}</span>
                    <img
                      src={video.link}
                      alt={video.name}
                      className="search_result-video"
                    />
                  </div>
                );
              }
            })}
        </section>
      </main>
    </div>
  );
};

export default Search;
