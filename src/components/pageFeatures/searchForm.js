import React from "react";


class SearchForm extends React.Component {
  state = {
    query: ""
  };

  onFromSubmit = e => {
    e.preventDefault();

    if (this.state.query !== "") {
      this.props.onSubmit(this.state.query);
      this.setState(() => ({ query: "" }));
    }
  };
  onSearchChange = e => {
    const q = e.target.value;

    this.setState(() => ({ query: q }));
  };
  render() {
    return (
      <div className="search-bar">
        <form className="search-bar--form" onSubmit={this.onFromSubmit}>
          <input
            className="search-bar--input"
            onChange={this.onSearchChange}
            value={this.state.query}
            type="text"
            placeholder="search for videos"
          />
          <button className="search-bar--submit">search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
