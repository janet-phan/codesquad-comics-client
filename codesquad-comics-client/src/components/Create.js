import React from "react";

const Create = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;

    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
  }

  return (
    <main className="create-form-main">
      <h1>CREATE NEW COMIC</h1>

      <form className="create-form" onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input type="Title" placeholder="Title" required />
        </div>
        <div className="author">
          <label htmlFor="author">Author: </label>
          <input type="Author" name="author" id="author" placeholder="Author" required />
        </div>
        <div className="publisher">
          <label htmlFor="publisher">Publisher:</label>{" "}
          <select name="publisher" id="publisher" required>
            <option value="" disabled selected>
              Select
            </option>
            <option value="boombox">BOOM! Box</option>
            <option value="dccomics">DC Comics</option>
            <option value="harrynabrams">Harry N. Abrams</option>
            <option value="iconbooks">Icon Books</option>
            <option value="imagecomics">Image Comics</option>
            <option value="marvel">Marvel</option>
            <option value="simonandschuster">Simon & Schuster</option>
            <option value="topshelfproductions">Top Shelf Productions</option>
            <option value="vizmediallc">VIZ Media LLC</option>
          </select>
        </div>
        <div className="genre">
          <label htmlFor="genre">Genre: </label>
          <input type="genre" name="genre" id="genre" placeholder="Genre" required />
        </div>
        <div className="pages">
          <label htmlFor="pages">Number of Pages: </label>
          <input type="pages" name="pages" id="pages" placeholder="255" required />
        </div>
        <div className="rating">
          <label htmlFor="rating">Rating: </label>
          <input type="rating" size="5" placeholder="5" required />
        </div>
        <div className="synopsis">
          <label htmlFor="synopsis">Synopsis: </label>
          <textarea
            id="synopsis"
            name="synopsis"
            rows="2"
            cols="25"
            placeholder="Synopsis"
            required ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Create;
