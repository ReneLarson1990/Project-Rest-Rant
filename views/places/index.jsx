const React = require('react')
const Def = require('../default')


function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={places.id}>
        <h2>
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          Available cuisines: {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located: {place.city}, {place.state}
        </p>
        <p className="text-center">
          Established: {place.founded}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}


module.exports = index
