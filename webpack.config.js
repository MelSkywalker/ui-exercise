const path = require('path');

module.exports = {
	mode: 'development',
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'public')
	}
}