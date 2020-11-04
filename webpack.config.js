const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	devtool: "eval-source-map",	
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: [
					/node_modules/
				]
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
    }
}; 