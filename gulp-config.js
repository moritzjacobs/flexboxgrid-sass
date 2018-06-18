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
			"./docs": ["mj-flexboxgrid.scss", "./docs/scss/*.scss"],
		},
		pug: {
			pug: ["docs/index.pug"]
		}
	},

	// All tasks above are available (css, js, images and svg)
	combinedTasks: {
		default: [["dist", "watch", "docs"]],
		dist: [["pug", "css", "clean"]]
	},

	watchTask: {
		css: ["css"],
		pug: ["pug"]
	}
};
