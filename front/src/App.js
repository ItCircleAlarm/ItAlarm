import React from "react";

import Header from "./AlbumHeader";

const AlbumCard = ({ text }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">{/* card content */}</div>
    </div>
  );
};

const AlbumMain = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AlbumCard text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
          {/* Other AlbumCards */}
        </div>
      </div>
    </div>
  );
};

const AlbumFooter = () => {
  // Add footer content
  return <div></div>;
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
