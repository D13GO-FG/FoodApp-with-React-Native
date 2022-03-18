import axios from 'axios';
export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer WF9Z5hixZl8rVbnxOXHy5hZfyEFP4jN62rKkJryNmc5NEcsB7nUNADxnrxt__8EfJ13VYetF7piZhTyN6GYp4bBKpxk0CZ4TCnxA6RmLiaa2mUKvcIrf1xIL1hhxX3Yx',
	},
});
