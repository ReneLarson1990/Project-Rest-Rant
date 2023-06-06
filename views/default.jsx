const React = require('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
              <link rel="stylesheet" href="/css/style.css"/>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/places">Places</a></li>
                <li><a href="/places/new">Add Place</a></li>
              </ul>
            </nav>
              {html.children}
          </body>
          <footer className='footer'>
            Site Created By MADstax aka Rene' Larson @ <a href="https://www.linkedin.com/in/rene-larson-021152202/" id="linked">LinkedIN</a> & <a href="https://github.com/ReneLarson1990" id="linked">GitHub</a>
          <br></br>
            Background Photo by <a href="https://unsplash.com/@john_matychuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" id="linked">John Matychuk</a> on <a href="https://unsplash.com/photos/fX2WyHHeAUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" id="linked">Unsplash</a>
            

          </footer>
      </html>
  )
}


module.exports = Def