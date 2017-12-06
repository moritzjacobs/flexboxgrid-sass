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
				browsers: ["> 1%"]
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
		paths: ["docs/**/*.css.map"]
	},

	paths: {
		css: {
			"./docs/dist": ["mj-flexboxgrid.scss", "./docs/scss/docs.scss"],
		},
		jade: {
			jade: ["docs/index.jade"]
		}
	},

	// All tasks above are available (css, js, images and svg)
	combinedTasks: {
		default: [["dist", "watch", "docs"]],
		dist: [["jade", "css", "clean"]]
	},

	watchTask: {
		css: ["css"],
		jade: ["jade"]
	}
};
