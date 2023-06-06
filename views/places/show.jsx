const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.places.name}</h1>
          </main>
          <body><center>
            <img src={data.places.pic} alt="Place Image" />
            <br></br>
            <h2>description</h2> 
            {data.places.city}, {data.places.state}
            <br></br>
            {data.places.cuisines}        
            <h2>Rating</h2>
            currently unrated.
            <h2>Comments</h2>
            No comments yet!
            <br></br>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>  
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>     
            </center></body>
        </Def>
    )
}

module.exports = show
