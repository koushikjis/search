import React from "react";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui blue segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <p>
            <label>Image Search</label>
          </p>
          <div className="ui action input">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="ui icon blue button" onClick={this.onFormSubmit}>
              <i className="search icon" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
