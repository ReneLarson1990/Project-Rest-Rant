const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
          </main>
          <body><center>
            <div className="showPage">
            <img src={data.place.pic} alt="Place Image" />
            <br></br>
            <h2>description</h2> 
            Located: {data.place.city}, {data.place.state}
            <br></br>
            Available Cuisines: {data.place.cuisines} 
            <br></br>
            Year Founded:{data.place.founded} 
            <br></br>       
            <h2>Rating</h2>
            currently unrated.
            <h2>Comments</h2>
            No comments yet!
            <br></br>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            <i class="bi bi-pencil-square"></i> Edit
              </a> 
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete <i className="bi bi-trash3"></i>
                </button>
              </form></div>   
            </center></body>
        </Def>
    )
}

module.exports = show;
