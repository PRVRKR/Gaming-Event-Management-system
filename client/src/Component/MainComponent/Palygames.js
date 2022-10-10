import React from 'react'

export default function Portfolio() {
  return (
    <div>
   <div className="container p-5">
    <div className="row text-center">
      <div className="col-md-4">
        <img src="./../img/game1.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/Bingo/" className='btn btn-success mt-2'>Play Now</a>
      </div>
      <div className="col-md-4">
      <img src="./../img/game2.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/TripeaksFarm/" className='btn btn-success mt-2'>Play Now</a>
      </div>
      <div className="col-md-4">
      <img src="./../img/game3.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/CastleMysteries/" className='btn btn-success mt-2'>Play Now</a>
      </div>
    </div>
   </div>
   <div className="container p-5">
    <div className="row text-center">
      <div className="col-md-4">
        <img src="./../img/game4.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/HexConnect/" className='btn btn-success mt-2'>Play Now</a>
      </div>
      <div className="col-md-4">
      <img src="./../img/game5.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/TilesOfJapan/" className='btn btn-success mt-2'>Play Now</a>
      </div>
      <div className="col-md-4">
      <img src="./../img/game6.jpg" alt="" />
        <a href="https://cdn.htmlgames.com/Aerobatics/" className='btn btn-success mt-2'>Play Now</a>
      </div>
    </div>
   </div>

<div className="container ">
  <b>
    {" "}
    <h1 className="text-secondary">
      Upcoming<span className="text-warning">Games </span>{" "}
    </h1>{" "}
  </b>
  <div className="container-fault">
    <div className="row">
      <div className="col-md-4">
        <div className="bg-image hover-zoom">
          <a href="event/coc.html">
            <div className="background img hover">
              <h3> </h3>
             
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <a href="event/warzone.html">
          <div className="background img1 hover">
            <h3></h3>
           
          </div>
        </a>
      </div>
      <div className="col-md-4">
        <a href="event/cod.html">
          <div className="background img2 hover">
            <h3></h3>
     
          </div>
        </a>
      </div>
    </div>
 
    <section>
      <div className="wrapper testimonial-section ">
        <div className="container text-center">
          <div className="text-center pb-4 mt-5">
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
                        "I play Tournament every day, it's a great way to relax
                        and win cash too! "
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
                        " When I hang out with my friends, we play Tournament,
                        its so much fun. "
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
    {/* COMPANY SPONSOR */}
    <div className="spon">
      <div className="scroll container">
        <b>
          {" "}
          <h1 style={{ fontSize: 30, textAlign: "center", marginTop: 20 }}>
            Company <span style={{ color: "grey" }}> Sponsors </span>{" "}
          </h1>{" "}
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
</div>




    </div>
  )
}
