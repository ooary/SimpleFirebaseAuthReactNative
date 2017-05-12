 import React,{Component} from 'react'
 import {View} from 'react-native'
 import firebase from 'firebase'
 import { Header,Button,Card,CardSection,Spinner } from './components/common'
 import LoginForm from './components/LoginForm'

 class App extends Component{
 	state = {loggedIn : null}
 	componentWillMount() {
 		 // Initialize Firebase
	
		  firebase.initializeApp({
		    apiKey: "AIzaSyBmWGOzFhdCJ3b0r11qK9tqgwlBsOY1WOg", //CHANGE WITH YOUR OWN APIKEY
		    authDomain: "react-native-auth-24e9d.firebaseapp.com",//CHANGE WITH YOUR OWN APIKEY
		    databaseURL: "https://react-native-auth-24e9d.firebaseio.com",//CHANGE WITH YOUR OWN APIKEY
		    projectId: "react-native-auth-24e9d",//CHANGE WITH YOUR OWN APIKEY
		    storageBucket: "react-native-auth-24e9d.appspot.com",//CHANGE WITH YOUR OWN APIKEY
		    messagingSenderId: "427876805211"//CHANGE WITH YOUR OWN APIKEY
		  });
		  firebase.auth().onAuthStateChanged((user)=>{
		  		if (user) {
		  			this.setState({loggedIn:true})
		  		}else{
		  			this.setState({loggedIn:false})
		  		}
		  })

 	}
 	renderContent(){
 		switch(this.state.loggedIn){
 			
 			case true:
	 			return (
	 					<Card>
	 						<CardSection>
							<Button onPress={()=>firebase.auth().signOut()}>
	 			 			 Logout
	 			 			  </Button>
	 						</CardSection>
	 					</Card>
	 			 			
	 			) 

 			case false:
 				return <LoginForm/>
 			default:
 				return 
 				<Card>
 					<CardSection>
 						<Spinner size="large"/>
 					</CardSection>
 				</Card>
 		}
 		
 	}
 	render(){
 		return(
 				<View>	
 					<Header headerText="Learn Authentication"/>
 					{this.renderContent()}
 				</View>
			   )
 	}
 }


 export default App;
