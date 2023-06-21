const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>NEON-DINER - REST-Rant</h1>
        <div>
          <img src="/images/burgers-steaks-shakes.jpg" className="front-sign" alt="image of fire pit"/>
        </div>
        <div>
        Photo by <a href="https://unsplash.com/@dondaskalodesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Don Daskalo</a> on <a href="https://unsplash.com/photos/KvEB9zTk5SE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <br></br>
        <br></br>
        <a href="/places">
  <button className="btn btn-primary" id="locations-btn"><h3><i className="fa-solid fa-store fa-beat fa-lg"></i> Neon-Diners <i className="fa-solid fa-store fa-beat fa-lg"></i></h3></button>
</a>
      </main>
    </Def>
  )
}

module.exports = home 