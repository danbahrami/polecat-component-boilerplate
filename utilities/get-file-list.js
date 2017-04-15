module.exports = function (fileName, connected, styled) {
	var files = ['index.js', fileName + '-component.js', fileName + '-component-test.js'];

	if (connected) {
		files.push(fileName + '-connector.js');
		files.push(fileName + '-connector-test.js');
	}

	if (styled) {
		files.push(fileName + '-style.scss');
	}

	return files;
}
