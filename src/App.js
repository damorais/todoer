import React from 'react';
// import logo from './logo.svg';
import './App.css';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      items: []
    }
  }

  addItemHandler(e){
    e.preventDefault();
    
    if(!this.state.text.length)
      return;

    const items = [...this.state.items, {
      text: this.state.text,
      id: Date.now()
    }];

    this.setState({
      items: items,
      text: ''
    });
  }

  renderNewItem(){
    return (
      <div className="form-inline mb-2">
        <div className="form-group mx-sm-3">
          <input type="text" 
                 className="form-control" 
                 onChange={ (event) => this.setState({ text: event.target.value }) } value={this.state.text}></input>  
        </div>
        <button type="button" 
                className="btn btn-primary" 
                onClick={(event) => this.addItemHandler(event)}>Add</button>
      </div>
    );
  }

  renderItem(item){
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {item.text}
        <i className="far fa-trash-alt"></i>
      </li> 
    );
  }

  render(){
    return (
      <div>
        {this.renderNewItem()}
        
        <ul className="list-group">
          { this.state.items.map(this.renderItem) }
        </ul>

      </div>
    );
  }
}



function App() {
  return (
    <div className="App row">
      <p>Todoer!</p>

      <div className="col-4">
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
