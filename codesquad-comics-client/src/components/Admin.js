import React from 'react';


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

        <tr>
          <td>Batman: The Dark Knight Returns</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>

        <tr>
          <td>Black Panther: A Nation Under Our Feet Book 1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Fun Home: A Family Tragicomic</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Hunter x Hunter Vol. 1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Lumberjanes Vol. 1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>March: Book One</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>One Piece, Vol. 1: Romance Dawn</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Parable of the Sower</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Queer: A Graphic History</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Wale: The Hidden History of Women-Led Slave Revolts</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Watchmen</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
      </table>
      </div>
    </main>
    </div>
    )
  }

  export default Admin;