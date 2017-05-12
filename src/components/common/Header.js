import React from 'react'
import {Text,View} from 'react-native'



const Header = (props)=>{
	return (
				<View style={style.viewStyle}>
					<Text style={style.textStyle}>{props.headerText}</Text>
				</View>
		)

}

const style = {
	textStyle:{
		fontSize:20,
		color:'white',

	},
	viewStyle:{
		backgroundColor:'#536DFE',
		justifyContent:'center',
		alignItems:'center',
		height:40,
		paddingTop:10,
		shadowColor:'#000',
		shadowOffset:{
			width:0,
			height:2,
		},
		shadowOpacity:0.2,
		elevation:2,
		position:'relative',
		padding:5
	}
}

export {Header};