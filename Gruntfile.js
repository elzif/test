module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				options:{
					style: 'compact'
				},
				files: {
					'assets/css/style.css' : 'assets/sass/style.scss'
				}
			}
		},
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

 
};