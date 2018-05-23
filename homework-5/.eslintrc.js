module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
    "extends": [
    "plugin:flowtype/recommended"
  ],
    "plugins": [
    "flowtype"
],
	'parserOptions': {
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-console':0
	}
};
