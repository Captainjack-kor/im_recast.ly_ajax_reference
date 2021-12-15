import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      queryString: '개발자'
    }

    this.setQueryString = this.setQueryString.bind(this)
  }

  setQueryString(e) {
    this.setState({
      queryString: e.target.value
    })
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.queryString} onChange={this.setQueryString} />
        <button className="btn hidden-sm-down" onClick={() => this.props.handleButtonClick()}>
          검색
        </button>
      </div>
    )
  }

}

export default Search;
