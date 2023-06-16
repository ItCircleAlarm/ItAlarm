import React from "react";
import { useEffect, useState } from "react";
import Header from "./AlbumHeader";

const AlbumCard = ({ text }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                사이트 들어가기
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlbumMain = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/clubs")
      .then((response) => response.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">It Circle Alarm</h1>
            <p className="lead text-muted">
              IT 연합 동아리 정보를 여기서 확인하세요.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {clubs.map((club) => (
            <AlbumCard
              key={club._id}
              title={club.title}
              deadline={club.deadline}
              link={club.link}
              description={club.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const AlbumFooter = () => {
  // Add footer content
  return (
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p class="mb-1"></p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumMain />
      </main>
      <footer>
        <AlbumFooter />
      </footer>
    </div>
  );
}

export default App;
