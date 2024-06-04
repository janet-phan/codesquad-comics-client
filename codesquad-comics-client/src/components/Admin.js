import React from "react";
import booksData from "../data/books";

const Admin = () => {
  return (
    <div>
      <main className="admin-main">
        <h1>ADMIN PAGE</h1>
        <button className="new-comic-button">ADD NEW COMIC</button>
        <br />
        <br />
        <div>
          <table>
            <tr>
              <th>COMIC TITLE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
            {booksData.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>
                  <button>EDIT</button>
                </td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            ))}
            
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
