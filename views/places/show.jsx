const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.places.name}</h1>
          </main>
          <body><center>
            <div className="showPage">
            <img src={data.places.pic} alt="Place Image" />
            <br></br>
            <h2>description</h2> 
            Located: {data.places.city}, {data.places.state}
            <br></br>
            Available Cuisines: {data.places.cuisines} 
            <br></br>
            Year Founded:{data.places.founded} 
            <br></br>       
            <h2>Rating</h2>
            currently unrated.
            <h2>Comments</h2>
            No comments yet!
            <br></br>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            <i class="bi bi-pencil-square"></i> Edit
              </a> 
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete <i class="bi bi-trash3"></i>
                </button>
              </form></div>   
            </center></body>
        </Def>
    )
}

module.exports = show
