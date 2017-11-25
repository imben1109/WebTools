const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loaders: ['babel-loader', 'ts-loader'],
				exclude: [
					/node_modules/
				]
			}
		]
	},
	resolve: {
		descriptionFiles: ['bower.json', 'package.json']
    }
}; 