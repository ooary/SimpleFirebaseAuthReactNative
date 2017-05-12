import React from 'react'
import {TextInput , View,Text} from 'react-native'
/**
 *
 * SecureTextEntry == untuk Decrypt dari plainText ke CipherText
 * Defaultnya itu false jika true maka dia akan convert plainText ke CipherText
 *
 */


const Input= ({ label,value,onChangeText,placeholder,secureTextEntry })=>{
	const {inputStyle,labelStyle,containerStyle} = Styles
	return (
				<View style={containerStyle}>	
						<Text style={labelStyle}>{label} </Text>
						<TextInput 
							placeholder={placeholder}
							value={value}
							onChangeText={onChangeText}
							style={inputStyle}
							autoCorrect={false}
							secureTextEntry={secureTextEntry}
						/>
				</View>

		)

}
const Styles = {
	inputStyle :{
		color:'#000',
		paddingRight:2,
		paddingLeft:5,
		fontSize:18,
		lineHeight:23,
		flex:2
	},
	labelStyle:{
		fontSize:18,
		paddingLeft:20,
		flex:1
	},
	containerStyle:{
		height:40,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	}
}

export {Input};