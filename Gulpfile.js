const gulp = require("gulp");
const webserver = require("gulp-webserver");
const pug = require("pug");
const gulpPug = require("gulp-pug");

require("mj-gulp-workflow")(gulp);

gulp.task("docs", () => {
	gulp.src("./docs").pipe(
		webserver({
			port: 8080,
			livereload: true,
			open: true
		})
	);
});

pug.filters.code = block => {
	return block
		.replace(/\t/g, "  ")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
};

gulp.task("pug", () => {
	gulp
		.src("./docs/*.pug")
		.pipe(
			gulpPug({
				pug: pug,
				pretty: true
			})
		)
		.pipe(gulp.dest("./docs/"));
});
