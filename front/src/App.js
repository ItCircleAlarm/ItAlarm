import React from "react";
import { useEffect, useState } from "react";
import Header from "./AlbumHeader";
import AlbumCard from "./AlbumCard";

const AlbumMain = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    fetch("http://localhost:3001/clubs")
      .then((response) => response.json())
      .then((data) => {
        setClubs(data);
        setLoading(false); // 데이터를 가져온 후 로딩 상태를 false로 설정
      });
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
              imageUrl={club.imageUrl} // 모든 필드를 props로 전달
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
