import React from "react";
import booksData from "../data/books"


const Home = () => {
  return (
    <main>
      <div className="home">
        <h1>CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Janet Phan.
          The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information about each graphic novel including the
          publisher, genre, number of pages, and a brief synopsis. The About
          page includes meta information about this collection. Login is only
          available to the site administrator at this time.
        </p>
        <br />
      </div>

      <div className="comic-collection">
        <h2>COMPLETE COLLECTION</h2>
        {booksData.map((book) => (
        <article key={book._id}>
          <a href="#">
            <img src={"/images/" + book.image} />
          </a>
          <br />
          <i>{book.title}</i>
          <br />
          by {book.author} <br />
          {book.rating} stars <br />
          <a href="#">Details</a>
          <br />
        </article>
      ))

      }
      
        <br />
        <br />
        <button className="more-comics-button">DISPLAY MORE</button>
      </div>
    </main>
  );
};

export default Home;
