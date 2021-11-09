import React,{Component} from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import {Routes,Route} from 'react-router-dom'


class App extends Component{
  // After adding state
  state = {
   // After adding lifecycle event
   contacts:[]
  
  }

  componentDidMount(){
    ContactsAPI.getAll()
      .then((contacts)=>{
        this.setState(()=>({
          contacts
        }))
      })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) =>{
        return c.id !== contact.id
      })
    })) 
    ContactsAPI.remove(contact)
  }
  render(){
    return(
      <div>
        <Routes>
         <Route exact path='/' render={()=>(
            <ListContacts 
              contacts = {this.state.contacts}
              onDeleteContact = {this.removeContact}
              onNavigate={()=>{
                this.setState(()=>({
                  screen:'create'
                }))
              }}
            />
          )}/>   
          <Route path='/create' component={CreateContact}/>
        </Routes>
      </div>
     
    )
  }
}
export default App

