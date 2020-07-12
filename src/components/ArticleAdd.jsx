import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';                      

class ArticleAdd extends React.Component {
  state = { status: ''};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle(this.state);                                
  };

  render() {
    return (
      <div>
        <h4>Add Article</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="text" name="status" required value={this.state.status} onChange={this.handleChange} 
              className="form-control" placeholder="Status" />
          </div>
          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addArticle };                     

export default connect(null, mapDispatchToProps)(ArticleAdd);