import React,{Component} from 'react'
	/* Text input no default height and width */
import {Text} from 'react-native'
import firebase from 'firebase'
import {Button,Card,CardSection,Input,Spinner} from './common'

class LoginForm extends Component{
	state = { email:'',password:'',error:'', loading: false};
	onButtonPress(){
		//get const variabel from state onPressButton
		const { email,password } = this.state;
		//for clear error statement
		this.setState({error:'',loading:true})
		//make toggling spinner component

		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(this.onLoginSuccess.bind(this))
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this))
			})

	}
	onLoginFail(){
		this.setState({
			error:'Authentication Failed',
			loading:false,

		})
	}
	onLoginSuccess(){
		this.setState({error:'',loading:false,email:'',password:''})


	}
	renderButton(){
		if (this.state.loading) {
			return <Spinner size="small"/>
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
							Login
						</Button>
			)
	}
	render() {
		return (
				<Card>
					<CardSection>
						<Input 
							label={'Email'}
							value={this.state.email}
							placeholder={'user@gmail.com'}
							onChangeText={email => this.setState({email})}

						/>
					</CardSection>
					<CardSection>
						<Input
							placeholder={"Password"}
							label={'Password'}
							value={this.state.password}
							onChangeText={password => this.setState({password})}
							secureTextEntry
						/>
					</CardSection>
					<Text style={Styles.errorTextStyle}>
							{this.state.error}
					 </Text>
					<CardSection>	
							
							{this.renderButton()}
						
					</CardSection>


				</Card>
			)
	}	
}

const Styles = {
	errorTextStyle:{
		fontSize:20,
		alignSelf:'center',
		color:'red'
	}
}

export default LoginForm;