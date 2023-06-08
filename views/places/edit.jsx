const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main><center>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
              <div className='row'>
          <div className="form-group col-sm-6">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" value={data.place.name} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" value={data.place.pic} />
          </div>
          </div>
          <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" value={data.place.city}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="state">State</label>
            {/* <input className="form-control" id="state" name="state" /> */}
            <select name="state" size="1" className="form-control" value={data.place.state}>
  <option value="AK">AK</option>
  <option value="AL">AL</option>
  <option value="AR">AR</option>
  <option value="AZ">AZ</option>
  <option value="CA">CA</option>
  <option value="CO">CO</option>
  <option value="CT">CT</option>
  <option value="DC">DC</option>
  <option value="DE">DE</option>
  <option value="FL">FL</option>
  <option value="GA">GA</option>
  <option value="HI">HI</option>
  <option value="IA">IA</option>
  <option value="ID">ID</option>
  <option value="IL">IL</option>
  <option value="IN">IN</option>
  <option value="KS">KS</option>
  <option value="KY">KY</option>
  <option value="LA">LA</option>
  <option value="MA">MA</option>
  <option value="MD">MD</option>
  <option value="ME">ME</option>
  <option value="MI">MI</option>
  <option value="MN">MN</option>
  <option value="MO">MO</option>
  <option value="MS">MS</option>
  <option value="MT">MT</option>
  <option value="NC">NC</option>
  <option value="ND">ND</option>
  <option value="NE">NE</option>
  <option value="NH">NH</option>
  <option value="NJ">NJ</option>
  <option value="NM">NM</option>
  <option value="NV">NV</option>
  <option value="NY">NY</option>
  <option value="OH">OH</option>
  <option value="OK">OK</option>
  <option value="OR">OR</option>
  <option value="PA">PA</option>
  <option value="RI">RI</option>
  <option value="SC">SC</option>
  <option value="SD">SD</option>
  <option value="TN">TN</option>
  <option value="TX">TX</option>
  <option value="UT">UT</option>
  <option value="VA">VA</option>
  <option value="VT">VT</option>
  <option value="WA">WA</option>
  <option value="WI">WI</option>
  <option value="WV">WV</option>
  <option value="WY">WY</option>
</select>
          </div>
          </div>
          <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="founded">Year Established</label>
            <input className="form-control" id="founded" name="founded" minLength="4" maxlength="4" pattern="[0-9]+" value={data.place.founded}/>
          </div>
          </div>
          <br></br>
          <input className="btn btn-primary" type="submit" value="Edit place"/>
        </form>
        
          </center></main>
        </Def>
    )
}

module.exports = edit_form
