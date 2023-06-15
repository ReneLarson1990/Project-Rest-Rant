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
            <img src={data.place.pic} alt={data.place.name} />
            <br></br>
            Located: {data.place.city}, {data.place.state}
            <h2>description</h2>
            <h3>
              {data.place.showEstablished()}
              </h3>
              <h4>{data.place.cuisines}</h4> 
            <br></br>
            {/* Available Cuisines: {data.place.cuisines} 
            <br></br>
            {/* Year Founded:{data.place.founded}  */}
            {/* <br></br>        */} 
            <h2>Rating</h2>
            currently unrated.
            <h2>Comments</h2>
            No comments yet!
            <br></br>
            <a href={`/places/${data.place._id}/edit`} className="btn btn-warning"> 
  <i className="bi bi-pencil-square"></i> Edit
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


