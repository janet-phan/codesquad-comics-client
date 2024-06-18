import React from "react";
import { getBooks } from "../data/books";

const Update = () => {
  const [book, setBook] = useState({});

  const id = 1;
  
  useEffect(() => {
    const foundBook = booksData.find((book) => book.id === id);
    setBook(foundBook);
  }, []);

  const submitBookUpdate = (event) => {
    event.preventDefault();
    console.log("Update form submitted");

    console.log("Book ID:", event.target.elements.bookId.value);
    console.log("Book Title:", event.target.elements.bookTitle.value);
    console.log("Book Author:", event.target.elements.bookAuthor.value);
  };


  return (
    <main className="update-form-main">
      <h1>UPDATE COMIC</h1>

      <form className="update-form" onSubmit={submitBookUpdate}>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input type="Title" placeholder="title data stored in database" required />
        </div>
        <div className="author">
          <label htmlFor="author">Author: </label>
          <input
            type="Author"
            name="author"
            id="author"
            placeholder="author data stored in database"
            required
          />
        </div>
        <div className="publisher">
          <label htmlFor="publisher">Publisher:</label>
          <select name="publisher" id="publisher" required>
            <option value="boombox">BOOM! Box</option>
            <option value="dccomics">DC Comics</option>
            <option value="harrynabrams">Harry N. Abrams</option>
            <option value="iconbooks">Icon Books</option>
            <option value="imagecomics">Image Comics</option>
            <option value="marvel">Marvel</option>
            <option value="simonandschuster">Simon & Schuster</option>
            <option value="topshelfproductions">Top Shelf Productions</option>
            <option value="vizmediallc">VIZ Media LLC</option>
            <option value="" disabled selected>
              publisher value stored in database
            </option>
          </select>
        </div>
        <div className="genre">
          <label htmlFor="genre">Genre: </label>
          <input
            type="genre"
            name="genre"
            id="genre"
            placeholder="Genre data stored in database"
            required
          />
        </div>
        <div className="pages">
          <label htmlFor="pages">Number of Pages: </label>
          <input type="pages" name="pages" id="pages" placeholder="255" required/>
        </div>
        <div className="rating">
          <label htmlFor="rating">Rating: </label>
          <input type="rating" size="5" placeholder="5" required/>
        </div>
        <div className="synopsis">
          <label htmlhtmlFor="synopsis">Synopsis: </label>
          <textarea
            id="synopsis"
            name="synopsis"
            rows="2"
            cols="25"
            placeholder="Synopsis value stored in database"
            required
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Update;
