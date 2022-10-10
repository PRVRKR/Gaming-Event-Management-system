// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <React.Fragment>
    <div>
    <div className="hiw-body">
  <div className="hiw text-white">
    <h3>HOW IT WORKS</h3>
    <p>It's easier than you think.Follow 4 simple easy steps.</p>
    <div className="hiw-1 ">
      <div className="hiw-1-1 ">
        <div className="hiw-1-1-1 ">
          <img
            src="./../img/icon-1.png"
            alt=""
            className="hiw-img-bor"
          />
        </div>
        <div className="hiw-1-1-2">
          <p>Sign Up</p>
        </div>
      </div>
      <div className="hiw-1-1">
        <div className="hiw-1-1-1">
          <img
            src="https://pixner.net/begam/images/line-two.png"
            alt=""
            className="hiw-img"
          />
        </div>
        <div className="hiw-1-1-2" />
      </div>
      <div className="hiw-1-1 ">
        <div className="hiw-1-1-1 ">
          <img
            src="https://pixner.net/begam/images/how-icon-2.png"
            alt=""
            className="hiw-img-bor"
          />
        </div>
        <div className="hiw-1-1-2">
          <p>Deposit</p>
        </div>
      </div>
      <div className="hiw-1-1">
        <div className="hiw-1-1-1">
          <img
            src="https://pixner.net/begam/images/line-one.png"
            alt=""
            className="hiw-img"
          />
        </div>
        <div className="hiw-1-1-2" />
      </div>
      <div className="hiw-1-1 ">
        <div className="hiw-1-1-1 ">
          <img
            src="https://pixner.net/begam/images/how-icon-3.png"
            alt=""
            className="hiw-img-bor"
          />
        </div>
        <div className="hiw-1-1-2">
          <p>Compete</p>
        </div>
      </div>
      <div className="hiw-1-1">
        <div className="hiw-1-1-1">
          <img
            src="https://pixner.net/begam/images/line-two.png"
            alt=""
            className="hiw-img"
          />
        </div>
        <div className="hiw-1-1-2" />
      </div>
      <div className="hiw-1-1 ">
        <div className="hiw-1-1-1 ">
          <img
            src="https://pixner.net/begam/images/how-icon-4.png"
            alt=""
            className="hiw-img-bor"
          />
        </div>
        <div className="hiw-1-1-2" id="Events">
          <p>Get Paid</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container game-c">
  <b>
    <h2 className="title34">
      Ongoing <span> Events </span>{" "}
    </h2>
  </b>
  <div className="container-fault">
    <div className="row">
      <div className="col-md-4">
        <div className="bg-image hover-zoom">
          <a href="event/coc.html">
            <div className="background img hover">
              <h3> </h3>
              {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i>Multiplayer,survival</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <a href="event/warzone.html">
          <div className="background img1 hover">
            <h3> </h3>
            {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i>Multiplayer,survival</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
          </div>
        </a>
      </div>
      <div className="col-md-4">
        <a href="event/cod.html">
          <div className="background img2 hover">
            <h3> </h3>
            {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i> Multiplayer,survival</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
          </div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <a href="event/bgmi.html">
          <div className="background img3 hover">
            <h3 />
            {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i> Multiplayer,survival</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
          </div>
        </a>
      </div>
      <div className="col-md-4">
        <a href="event/pubg.html">
          <div className="background img4 hover">
            <h3> </h3>
            {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i> Multiplayer,survival</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
          </div>
        </a>
      </div>
      <div className="col-md-4">
        <a href="event/league.html">
          <div className="background img5 hover">
            <h3 />
            {/* <h5 class="DIS"><i class="bi bi-bookmark-check"></i> RACING,SPORT</h5>
            <h5 class="DIS"><i class="bi bi-cast"></i> STEAM,UPLAY</h5> */}
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<section id="counter">
  <section className="counter-section">
    <p className="data">Updated-Data</p>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
          <h2 className="counting">
            <span id="count1" />K<p>MATCHES PLAYED</p>
          </h2>
        </div>
        <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
          <h2 className="counting">
            ₹<span id="count2" />L<p>WINNINGS PAID</p>
          </h2>
        </div>
        <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
          <h2 className="counting">
            <span id="count3" />
            <p>ACTIVE TEAMS</p>
          </h2>
        </div>
        <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
          <h2 className="counting">
            <span id="count4" />
            HL
            <p id="Games">XP EARNED</p>
          </h2>
        </div>
      </div>
    </div>
  </section>
</section>

<b>
  <h2 className="title34">
    Featured <span> Games </span>{" "}
  </h2>
</b>


<div className="row row-cols-1 row-cols-md-3 py-3 px-3 text-light">
  <div className="col-md-2">
    <div className="card4 h-100 ">
      <img
        src="https://www.gameinformer.com/sites/default/files/styles/full/public/2021/01/18/d83f5176/apex_s08_primary_art_1920x1080.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">APEX : LEGEND</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning">
          watch
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="card4 h-100">
      <img
        src="https://1.bp.blogspot.com/-znVg5UZzECE/X8ufjM2uquI/AAAAAAAABZo/nm5YnHmUkoIiUBkzoefUgNU6Zj2qeW-ZQCLcBGAsYHQ/s1920/439638.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">GTA : FIVE</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning">
          watch
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="card4 h-100">
      <img
        src="https://cdn.gamerjournalist.com/primary/2020/07/Fall-Guys-Ultimate-Knockout.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">FALL GUYS</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning ">
          watch
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="card4 h-100">
      <img
        src="https://cdn2.unrealengine.com/Fortnite/blog/best-fortnite-creative-codes-for-april-2020/09BR_Evergreens_Red_Social-1920x1080-60c4de5754c1d1fc66a74e7bf48771b67ed6912e.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">FORTNITE</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning">
          watch
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="card4 h-100">
      <img
        src="https://www.gamedevid.com/wp-content/uploads/2021/01/MC-1024x576.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">MINECRAFT</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning">
          watch
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="card4 h-100">
      <img
        src="https://play4.uk/wp-content/uploads/2021/03/zaz3une03fm31.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-light">NFS: Need For speed</h5>
        <div className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half mb-2" />
          <br />
        </div>
        <a href="#" className="btn btn-outline-primary">
          Visit
        </a>
        <a href="#" className="btn btn-warning">
          watch
        </a>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid">

<img src="./../img/fortnite-slide.gif" alt="" className ="w-100" />

</div>






<section className="headabt" id="About">
  <h2>About Us</h2>
  <p className="abt-txt" id="Developers">
    Gaming Hustlers is a gaming platform hub Esports tournaments for the biggest
    titles on every device.It is an immersive online gaming <br />
    experience for all Esports fans out there. Doesn’t matter if you’re a new
    gamer, casual player, an amateur pro or a registered professional,
    <br />
    if you’re passionate about playing and competing in the hottest tournaments,
    Gaming Hustlers has what you need.Our team is made up of gamers, nerds,
    techies, <br />
    and dreamers, who love what we do and are dedicated to bringing you the best
    in competitive gaming. Whether it’s local, state,national or even global,
    we’ve got tournaments for everyone.
  </p>
  <b>
    <h2 className="title34 bg-light text-warning">
      Our <span> Developers </span>{" "}
    </h2>
  </b>
  <div className="abouta">
    <div className="container abt">
      <input type="radio" name="dot" id="one" />
      <input type="radio" name="dot" id="two" />
      <div className="main-card1">
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src="img/kaushal.jpeg" alt="Kaushal" />
              </div>
              <div className="details">
                <div className="name">Kaushal Mandal</div>
                <div className="job">Web Developer</div>
                <div className="job text-primary">A45349521002</div>
              </div>
              <div className="media-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src="img/praveer.jpeg" alt="Praveer" />
              </div>
              <div className="details">
                <div className="name">Praveer Kishore</div>
                <div className="job">Web Designer</div>
                <div className="job text-primary">A45349521001</div>
              </div>
              <div className="media-icons">
                <a href="#">
                  <i className="new fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="new fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="new fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="new fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src="img/nitya.jpeg" alt="Nityanand" />
              </div>
              <div className="details">
                <div className="name">Nityanand Kumar</div>
                <div className="job">Web Devloper</div>
                <div className="job text-primary">A45349521005</div>
              </div>
              <div className="media-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src="img/nitesh.jpeg" alt="Nitesh" />
              </div>
              <div className="details">
                <div className="name">Nitesh Kumar</div>
                <div className="job">Web Designer</div>
                <div className="job text-primary">A45304821078</div>
              </div>
              <div className="media-icons" id="Reviews">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards"></div>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="wrapper testimonial-section">
    <div className="container text-center">
      <div className="text-center pb-4">
        <h2>Reviews</h2>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-10 offset-lg-1">
          <div
            id="carouselExampleDark"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <img src="https://img.redbull.com/images/c_crop,x_1434,y_0,h_3168,w_2376/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2021/12/2/c5alifbbijhb8yndiiim/jonathan-bgmi-gamer" />
                  <p className="text-dark">
                    "I play Tournament every day, it's a great way to relax and
                    win cash too! "
                  </p>
                  <h5>Jonathan Jude Amaral - BGMI Player</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <img src="https://images.news18.com/ibnlive/uploads/2022/04/carry-minati.jpg" />
                  <p className="text-dark">
                    " I joined for the community but ended up winning cash,
                    amazing. "
                  </p>
                  <h5>Ajey Nagar(CARRYMINATI) - YTCreator</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <img src="https://yt3.ggpht.com/ytc/AMLnZu-LZQjmUJrgT3yEmwAurMJA1vJkYBKdJI05KOaUpw=s900-c-k-c0x00ffffff-no-rj" />
                  <p className="text-dark">
                    " When I hang out with my friends, we play Tournament, its
                    so much fun. "
                  </p>
                  <h5>Ajay (Ajju Bhai) - FREEFIRE player</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="spon">
  <div className="scroll container">
    <b>
      <h2 className="title34">
        Company <span> Sponsors </span>{" "}
      </h2>
    </b>
    <div className="row_companys">
      <img src="img/steam.jpg" alt="" className="row_company" />
      <img src="img/activision.jpg" alt="" className="row_company" />
      <img src="img/xbox.jpg" alt="" className="row_company" />
      <img src="img/playstation.jpg" alt="" className="row_company" />
      <img src="img/tencent.jpg" alt="" className="row_company" />
      <img src="img/epic.png" alt="" className="row_company" />
      <img src="img/nintendo.png" alt="" className="row_company" />
      <img src="img/rockstar.png" alt="" className="row_company" />
      <img src="img/ubisoft.jpg" alt="" className="row_company" />
      <img src="img/rog.png" alt="" className="row_company" />
      <img src="img/playstore.png" alt="" className="row_company" />
      <img src="img/eaarts.png" alt="" className="row_company" />
    </div>
  </div>
</div>







    </div>
    </React.Fragment>
  )
}
