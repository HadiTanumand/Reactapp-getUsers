import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = { 
    users : []
   } 

   async componentDidMount(){
    const response =await axios.get('https://reqres.in/api/users');
    this.setState({users:response.data.data})
   }

  render() { 
    return (
    <>
    <button onClick={this.handleCreate} className='btn btn-lg btn-primary'>Create</button>
      <div className='row' >
        {
          this.state.users.map((user)=>{
            return(
              <div className='col-4 text-center p-5'>
                <img src={user.avatar} style={{borderRadius:'50%' , width: '100px'}} />
                <h4>{user.first_name}{user.last_name}</h4>
                <h5>{user.email}</h5>
                <div className='row'>
                  <div className="col-6">
                  <button onClick={this.handleDelete} className='btn btn-sm btn-danger'>delete</button>
                  </div>
                  <div className="col-6">
                  <button onClick={this.handleUpdate} className='btn btn-sm btn-primary'>update</button>
                  </div>

                </div>
              </div>
            )  
         

          })
        }
       
      </div>
    </>);
  }

  // we use the arrow func because we want to have access to 'this' in this method
  handleCreate = ()=>{

  }

  handleDelete = (user)=>{

  }

  handleUpdate = (user)=>{

  }
}
 
export default Users;