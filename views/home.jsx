const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/fire.jpg" alt="image of fire pit"/>
        </div>
        <div>
        Photo by <a href="https://unsplash.com/@tirzavandijk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tirza van Dijk</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
      </main>
    </Def>
  )
}

module.exports = home 