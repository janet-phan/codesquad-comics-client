import React from 'react';


const Home = () => {
    return (

        <main>
      <div class="home">
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

      <div class="comic-collection">
        <h2>COMPLETE COLLECTION</h2>
        <article>
          <a href="#"><img src="public/images/fun-home.jpg" /></a>
          <br />
          <i>Fun Home: A Family Tragicomic</i>
          <br />by Alison Bechdel <br />5 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/watchmen.jpg" /></a>
          <br />
          <i>Watchmen</i>
          <br />by Alan Moore <br />5 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/hunter-x-hunter.jpg" /></a>
          <br />
          <i>Hunter x Hunter Vol. 1</i>
          <br />by Yoshihiro Togashi <br />5 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/lumberjanes.jpg" /></a>
          <br />
          <i>Lumberjanes Vol. 1</i>
          <br />by Noelle Stevenson <br />4 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="onepiece-vol1.html"
            ><img src="public/images/one-piece.jpg"
          /></a>
          <br />
          <i>One Piece, Vol. 1: Romance Dawn</i>
          <br />by Eiichiro Oda <br />5 stars <br /><a href="onepiece-vol1.html"
            >Details</a
          >
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/wake.jpg" /></a>
          <br />
          <i>Wake: The Hidden History of Women-Led Slave Revolts</i>
          <br />by Rebecca Hall <br />4 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/black-panther.jpg" /></a>
          <br />
          <i>Black Panther: A Nation Under Our Feet Book 1</i>
          <br />by Ta-Nehisi Coates <br />3 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/the-walking-dead.jpg" /></a>
          <br />
          <i>The Walking Dead, Vol. 1: Days Gone Bye</i>
          <br />by Robert Kirkman <br />4 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/march.jpg" /></a>
          <br />
          <i>March: Book One</i>
          <br />by John Lewis <br />5 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/batman.jpg" /></a>
          <br />
          <i>Batman: The Dark Knight Returns</i>
          <br />by Frank Miller <br />3 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/queer.jpg" /></a>
          <br />
          <i>Queer: A Graphic History</i>
          <br />by Meg-John Barker <br />4 stars <br /><a href="#">Details</a>
          <br />
        </article>
        <article>
          <a href="#"><img src="public/images/parable-of-the-sower.jpg" /></a>
          <br />
          <i>Parable of the Sower</i>
          <br />by Octavia E. Butler <br />4 stars <br /><a href="#">Details</a>
        </article>

        <br />
        <br />
        <button class="more-comics-button">DISPLAY MORE</button>
      </div>
    </main>
        

    )
  }

  export default Home;