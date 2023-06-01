const React = require('react');
const Def = require('./default');

function New() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Def>
      <main>
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </Def>
  );
}

module.exports = New;