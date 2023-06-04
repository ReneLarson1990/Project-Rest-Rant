const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/drive-thru.jpg" class="fire" alt="image of fire pit"/>
        </div>
        <div>
        Photo by <a href="https://unsplash.com/@ilona_celeste?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ilona Celeste</a> on <a href="https://unsplash.com/photos/To8ytBVztOw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
      </main>
      <footer>
        Background Photo by <a href="https://unsplash.com/@john_matychuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Matychuk</a> on <a href="https://unsplash.com/photos/fX2WyHHeAUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </footer>
    </Def>
  )
}

module.exports = home 