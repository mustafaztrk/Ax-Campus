import React, { useState, useEffect } from "react";
import {Segment } from "semantic-ui-react";
import { Navigation } from "../components/navigation";
import { Navigation2 } from "../components/navigation2";
import { Header } from "../components/header";
import { headerGalery } from "../components/headerGalery";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact2";
import JsonData from "../data/data.json";
import ActivitiList from "../pages/ActivitiesList.jsx";
import ActivitiAdd from "../pages/ActivitiAdd";
import Ads from "../pages/Ads";
import Search from "../pages/Search.jsx";
import Login from '../pages/UserLogin'


import { Route } from 'react-router-dom'
import UserDetail from '../pages/UserDetail'
import { ToastContainer } from 'react-toastify'
import test from './test'
import { useHistory } from 'react-router'
import Home from './Home'
import UserRegistration from './UserRegistration'
import Statu from './Statu'
import UserAdd from '../pages/UserAdd'
import UserLogin from '../pages/UserLogin'
import UserList from '../pages/UserList'
import ActivitiesList from '../pages/ActivitiesList'
import Loding from './Loding'
import MessageList from '../pages/MessageList'


import "../AppDefault.css";
import KkuBanner from "../pages/KkuBanner";


const DefaultHome = () => {
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
 




  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  if(localStorage.getItem('userVerified')!=null){
    return (
      
        <div> 
           <Route exact path="/user/login" component={UserLogin} />
          <Navigation2 />
          <span style={{margin:"100px",padding:"10px"}}></span>
          <Segment> <KkuBanner /></Segment>
          <Ads></Ads>
          <ActivitiList />
          <Contact data={landingPageData.Contact} />
         
        </div>
      );
  }
  else{
    return (
        <div>
          <Navigation />
       
          <Header data={landingPageData.Header} />
          <Features data={landingPageData.Features} />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Gallery data={landingPageData.Gallery} />
          <Testimonials data={landingPageData.Testimonials} />
          <Team data={landingPageData.Team} />
          <Contact data={landingPageData.Contact} />
        </div>
      );
  }
  
};

export default DefaultHome;
