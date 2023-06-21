const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment')

function show(data) {
  let comments = <h3 className='inactive'>No comments yet!😢</h3>
  let rating = <h3 className="inactive">Not yet rated 😭</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
    let sumRatings = data.place.comments.reduce((total, comment) => {
      return total + comment.stars;
    }, 0);

    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "🍔";
    }
    rating = <h1>{stars} 
    {/* <i>Yumtastic Rating</i> */}
    </h1>;
      return (
        <div className="col-sm-4 rant-box" key={c.id}>
          <h2 className="rant"><i>{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</i></h2>
          <h3>{c.content}</h3>
          <h3>
            <strong> - {c.author} - </strong> 
          </h3>
          <h4><i>Rating:</i> {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              {/* <input type="submit" className="btn btn-danger" defaultValue="Delete " /> */}
              <button type="submit" className="btn btn-danger">
              <i className="fa-solid fa-trash fa-beat"></i> Delete
              </button>
          </form>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
          <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={data.place.pic} alt={data.place.name}/>
            <h2><i>Located in</i></h2><h3>{data.place.city}, {data.place.state}</h3> 
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <div>
              <h2><i>Yumtastic Rating</i></h2>
              {rating}
              <br/>
            </div>
            <div>
              <h2><i>Description</i></h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4><i>Serving</i></h4> <h3>{data.place.cuisines}</h3>
            </div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"><i className="fa-solid fa-pen-to-square fa-beat"></i> Edit</a>
            <form method="POST" action={`/places/${data.place.id}/?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
              <i className="fa-solid fa-trash fa-beat"></i> Delete
              </button>
            </form>
            </div>
            <hr/>
            <div className="row" id='comments'>
            <h2><i>Comments</i></h2>
            <br></br>
            <br></br>
            <br></br>

            {comments}
            <hr/>
            <div className="rant-post-box">
              <h1>Got Your Own Rant or Rave?</h1>
              <form className="row g-3" method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="col-12">
                  <label htmlFor="content" className="form-label"><i><h4>Your Comment</h4></i></label>
                  <input className="form-control" type="text" id="content" name="content" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="author" className="form-label"><h4><i>Your Name</i></h4></label>
                  <input className="form-control" id="author" name="author" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="stars" className="form-label"><h4><i>Yum-O-Rater</i></h4></label>
                  <input className="form-range" type="range" id="stars" name="stars" min="1" max="5" step="0.5"/>
                </div>
                <div className="col-md-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="rant" id="rant-checkbox"><h4><i>Rage-Rant?</i></h4>
                    <br></br><i> Click Angry Face Below to Submit Comment as a Rant!!!</i>
</label>
                    <br/>
                    <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                  </div><br></br>
                  <br></br>“My life ends only when my rage has been vented, when my need for vengeance is satisfied. It will be a long life.” <br></br>― Darth Maul
                </div>
                
                <div className="form-group">
                  <input className="btn btn-primary" type="submit" defaultValue="Rant😡/ Rave😍"/>
                </div>
              </form>
            </div>
            </div>
            </div>   
          </main>
        </Def>
    ) 
}

module.exports = show


