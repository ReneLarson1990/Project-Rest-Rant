const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p> Oops, Sorry, we can't find this page!</p>
        <div>
        <img src="/images/gameover.jpg" alt="retro pixelated game over text with pac man characters above it."/>
        </div>
        <div>
        Photo by <a href="https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sigmund</a> on <a href="https://unsplash.com/photos/By-tZImt0Ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404