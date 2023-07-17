import React from 'react'
import Navi from './Navi'
import Categories from './Categories'


import { Grid, Image } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import UserDetail from '../pages/UserDetail'
import { ToastContainer } from 'react-toastify'
import test from './test'
import { useHistory } from 'react-router'
import Home from './Home'
import DefaultHome from './DefaultHome'
import UserRegistration from './UserRegistration'
import Statu from './Statu'
import UserAdd from '../pages/UserAdd'
import UserLogin from '../pages/UserLogin'
import UserList from '../pages/UserList'
import ActivitiAdd from '../pages/ActivitiAdd'
import ActivitiesList from '../pages/ActivitiesList'
import ActivitiDetail from '../pages/ActivitiDetail'
import temp from '../pages/temp'

import Loding from './Loding'
import MessageList from '../pages/MessageList'
import { Navigation2 } from '../components/navigation2'

export default function Dashboard() {
  const history = useHistory()


  function aaa() {

    history.push("/test")
  }
  function home() {

    history.push("/")
  }
  function users() {

    history.push("/users")
  }
  function activities() {

    history.push("/activities")
  }
 
 if(localStorage.getItem('userVerified')!=null){
  return (
  
    <div>
            <Navigation2></Navigation2>
            <Route exact path="/" component={DefaultHome} />
    
            <Route exact path="/test" component={test} />
            <Route exact path="/UserRegistration" component={UserRegistration} />
            <Route exact path="/aboog" component={ActivitiAdd} />
            <Route exact path="/user/add" component={UserAdd} />
            <Route exact path="/user/login" component={UserLogin} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/:name" component={UserDetail} />
            <Route exact path="/activities" component={ActivitiesList} />
            <Route exact path="/activities/:name" component={ActivitiDetail} />
            <Route exact path="/activities/add" component={temp} />
            <Route exact path="/activityAdd" component={ActivitiAdd} />

            <Route exact path="/loding" component={Loding} />
            <Route exact path="/admin/messageList" component={MessageList} />
            
       

        


    </div>
  )
 }
 else{
  return (
  
    <div>
      
            <Route exact path="/" component={DefaultHome} />
        
            <Route exact path="/user/add" component={UserAdd} />
            <Route exact path="/user/login" component={UserLogin} />
           
       
       
     

    </div>
  )
 }


}
