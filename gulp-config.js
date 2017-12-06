const imagemin = require("gulp-imagemin");
const browserlist = ["> 0.1%"];

module.exports = {
	css: {
		scss: {
			config: {
				outputStyle: "compressed" // nested, compact, expanded and compressed are available options
			}
		},

		sourcemaps: {
			enabled: "dev"
		},

		autoprefixer: {
			enabled: true,
			config: {
				browsers: browserlist
			}
		},

		cleanCss: {
			enabled: true,
			config: {
				compatibility: "ie8"
			}
		}
	},

	clean: {
		paths: ["demo/**/*.css.map"]
	},

	paths: {
		// "DESTINATION" : ['SOURCE']
		css: {
			"demo/dist": ["mj-flexboxgrid.scss"],
			demo: ["demo/sass/demo.scss"]
		},
		jade: {
			jade: ["demo/index.jade"]
		}
	},

	// All tasks above are available (css, js, images and svg)
	combinedTasks: {
		default: [["dist", "watch", "demo"]],
		dist: [["jade", "css", "clean"]]
	},

	watchTask: {
		css: ["css"],
		jade: ["jade"]
	}
};
