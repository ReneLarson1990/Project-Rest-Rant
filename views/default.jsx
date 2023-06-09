const React = require('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous"></link>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
              <link rel="stylesheet" href="/css/style.css"/>
              
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="/" className="hm"><i class="bi bi-house"></i>Home</a></li>
                <li><a href="/places" className='pl'><i class="bi bi-geo-alt"></i>Places</a></li>
                <li><a href="/places/new" className='nw'><i class="bi bi-building-add"></i>Add Place</a></li>
              </ul>
            </nav>

            
              {html.children}
          </body>
          <footer className='footer'>
            Site Created By MADstax aka Rene' Larson @ <a href="https://www.linkedin.com/in/rene-larson-021152202/" id="linked">LinkedIN</a> & <a href="https://github.com/ReneLarson1990" id="linked">GitHub</a>
          <br></br>
            Background Photo by <a href="https://unsplash.com/@john_matychuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" id="linked">John Matychuk</a> on <a href="https://unsplash.com/photos/fX2WyHHeAUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" id="linked">Unsplash</a>
            <br></br>
             Neon font by <a href="https://www.dafont.com/neon.font" id="linked"> Fenotype @ Dafont </a>
             <br></br>
             Diner Font by <a href="https://www.dafont.com/momsdiner.font?text=resturant" id="linked"> Moms Diner by Jake Luedecke @ Dafont </a>


          </footer>
      </html>
  )
}


module.exports = Def