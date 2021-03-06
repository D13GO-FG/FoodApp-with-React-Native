import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Start, {result.review_count} Reviews
			</Text>
		</View>
	);
};

export default ResultsDetail;

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	image: {
		width: 350,
		height: 150,
		borderRadius: 4,
		marginBottom: 5,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});
