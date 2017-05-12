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
		    apiKey: "AIzaSyBmWGOzFhdCJ3b0r11qK9tqgwlBsOY1WOg",
		    authDomain: "react-native-auth-24e9d.firebaseapp.com",
		    databaseURL: "https://react-native-auth-24e9d.firebaseio.com",
		    projectId: "react-native-auth-24e9d",
		    storageBucket: "react-native-auth-24e9d.appspot.com",
		    messagingSenderId: "427876805211"
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