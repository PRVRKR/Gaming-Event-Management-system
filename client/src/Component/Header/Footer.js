import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer id="footer">
    <div class="footer py-5 mt-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <a class="footer-link" href="#">Home</a>
            <a class="footer-link" href="#Reviews">Reviews</a>
            <a class="footer-link" href="#Developers">Developers</a>
            <a class="footer-link" href="#FAQ">FAQ</a>
            <div class="footer-social pt-4 text-center">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-twitch"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-playstation"></i></a>
              <a href="#"><i class="fab fa-steam"></i></a>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="footer-copy">
              <div class="copy-right text-center pt-5">
                <p class="text-light">Copyright © 2022. All Rights Reserved By <span
                    class="text-danger bg-light">@GamingHustlers</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
