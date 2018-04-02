const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), //we require absolute path here,dirname refers to current directory
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/ //regex to see,that file ends with .js extension
			},
			{
				loader: ExtractTextPlugin.extract({ loader: 'css-loader' }),
				//loaders and use are both identical to eaach other, we are using loader here instead of use because he package is old.
				//use: ['style-loader', 'css-loader'], no use of this after extract-text
				test: /\.css$/ //anything ending with .css shall be sent to style and css loader.
			},
			{
				test: /\.(jpe?g|jpg|png|gif|svg)$/, //which filetype it shall look into
				use: [
					{
						loader: 'url-loader',
						options: { limit: 4000 }
					}, //the decision is being made here to save in bundle.js or seperate,
					'image-webpack-loader'
				]
			}
		]
	},

	plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
