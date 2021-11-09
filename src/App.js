import React,{Component} from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

/* Before adding state
const contacts = [
  {
  "id": "karen",
  "name": "Karen Isgrigg",
  "handle": "karen_isgrigg",
  "avatarURL": "http://localhost:5001/karen.jpg"
},
{
  "id": "richard",
  "name": "Richard Kalehoff",
  "handle": "richardkalehoff",
  "avatarURL": "http://localhost:5001/richard.jpg"
},
{
  "id": "tyler",
  "name": "Tyler McGinnis",
  "handle": "tylermcginnis",
  "avatarURL": "http://localhost:5001/tyler.jpg"
}
]
*/

class App extends Component{
  // After adding state
  state = {
    /*Before adding lifecycle event 
    contacts:[
      {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
    ]
    */
   // After adding lifecycle event
   contacts:[],
   screen:'list',
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
        {/*Before adding state
        <ListContacts contacts = {contacts}/>
        */}
        {this.state.screen === 'list' && (<ListContacts 
          contacts = {this.state.contacts}
          onDeleteContact = {this.removeContact}
          onNavigate={()=>{
            this.setState(()=>({
              screen:'create'
            }))
          }}
        />
        )}
        {this.state.screen === 'create' && (<CreateContact/> )}
      </div>
    )
  }
}
export default App

