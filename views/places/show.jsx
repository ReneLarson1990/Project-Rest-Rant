const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment')

function show(data) {
  let comments = <h3 className='inactive'>No comments yet!</h3>
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
    //add ratings
    let sumRatings = data.place.comments.reduce((total, comment) => {
      return total + comment.stars;
    }, 0);

    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "🍔";
    }
    rating = <h3>{stars} Yum Meter</h3>;
      return (
        <div className="col-sm-4 rant-box" key={c.id}>
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
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
            <h3>Located in {data.place.city}, {data.place.state} </h3> 
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              {rating}
              <br/>
            </div>
            <div>
              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines} </h4>
            </div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.place.id}/?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            </div>
            <hr/>
            <div className="row">
            <h2>Comments</h2>
            {comments} 
            <hr/>
            <div className="rant-post-box">
              <h1>Got Your Own Rant or Rave?</h1>
              <form className="row g-3" method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="col-12">
                  <label htmlFor="content" className="form-label">Your Comment</label>
                  <input className="form-control" type="text" id="content" name="content" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="author" className="form-label">Your Name</label>
                  <input className="form-control" id="author" name="author" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="stars" className="form-label">Burger Rating</label>
                  <input className="form-range" type="range" id="stars" name="stars" min="1" max="5" step="0.5"/>
                </div>
                <div className="col-md-2">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="rant" id="rant-checkbox">Rant?</label>
                    <br/>
                    <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                  </div>
                </div>
                <div className="form-group">
                  <input className="btn btn-primary" type="submit" value="Add Comment" />
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



// const React = require("react");
// const Def = require("../default");
// const comments = require('../../models/comment');

// function show(data) {
//   let comments = <h3 className="inactive">No comments yet!</h3>;
//   let rating = <h3 className="inactive">Not yet rated</h3>;
//   if (data.place.comments.length) {
//     comments = data.place.comments.map((c) => {
//       return (
//         <div className="border" key={c._id}>
//           <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😍"}</h2>
//           <h4>{c.content}</h4>
//           <h3>
//             <strong>- {c.author}</strong>
//           </h3>
//           <h4>Rating: {c.stars}</h4>
//         </div>
//       );
//     });
//   }
//   return (
//     <Def>
//       <main>
//         <h1>{data.place.name}</h1>
//       </main>
//       <body>
//         <center>
//           <div className="showPage">
//             <img src={data.place.pic} alt={data.place.name} />
//             <br></br>
//             Located: {data.place.city}, {data.place.state}
//             <h2>description</h2>
//             <h3>{data.place.showEstablished()}</h3>
//             <h4>{data.place.cuisines}</h4>
//             <br></br>
//             <a href={`/places/${data.place._id}/edit`}
//               className="btn btn-warning"
//             >
//               <i className="bi bi-pencil-square"></i> Edit
//             </a>
//             <form
//               method="POST"
//               action={`/places/${data.place.id}?_method=DELETE`}
//             >
//               <button type="submit" className="btn btn-danger">
//                 Delete <i className="bi bi-trash3"></i>
//               </button>
//             </form>
//           </div>
//           <h2>Rating</h2>
//           {rating}
//           <h2>Comments</h2>
//           {comments}
//           <br></br>
//           <div>
//             <form
//               className="row g-3"
//               method="POST"
//               action={`/places/${data.place.id}/comment`}
//             >
//               <div className="form-group">
//                 <label htmlFor="author">Author:</label>
//                 <input
//                   type="text"
//                   id="author"
//                   name="author"
//                   className="form-control"
//                   required
//                 />

//                 <label htmlFor="content">Content:</label>
//                 <textarea
//                   id="content"
//                   name="content"
//                   className="form-control"
//                   required
//                 ></textarea>
//                 <h2>Rating</h2>
//                 <label htmlFor="rating">Star Rating:</label>
//                 <input
//                   type="number"
//                   id="rating"
//                   name="rating"
//                   step="0.5"
//                   className="form-control"
//                   required
//                 />

//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="rant"
//                     name="rant"
//                     className="form-check-input"
//                   />
//                   <label htmlFor="rant" className="form-check-label">
//                     Rant😡:
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   value="Add Comment"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </center>
//       </body>
//     </Def>
//   );
// }

// module.exports = show;
