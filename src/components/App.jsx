import React from "react";
import axios from "axios";
import SearchBox from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 09875c3e35ed12591197df0dfe75dac6d9d9bee5332fdb22a4f1891ac79c7772"
        }
      })
      .then(res => this.setState({ images: res.data.results }));
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "15px" }}>
        <SearchBox onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
