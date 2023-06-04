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
              {html.children}
          </body>
          <footer class="sticky">
            Site Created By MADstax aka Rene' Larson @ <a href="https://www.linkedin.com/in/rene-larson-021152202/" id="linked">LinkedIN</a> & <a href="https://github.com/ReneLarson1990" id="linked">GitHub</a>
          </footer>
      </html>
  )
}


module.exports = Def