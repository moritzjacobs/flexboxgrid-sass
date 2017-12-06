const gulp = require("gulp");
const webserver = require("gulp-webserver");
const jade = require("jade");
const gulpJade = require("gulp-jade");

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

jade.filters.code = block => {
	return block
		.replace(/\t/g, "  ")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
};

gulp.task("jade", () => {
	gulp
		.src("./docs/*.jade")
		.pipe(
			gulpJade({
				jade: jade,
				pretty: true
			})
		)
		.pipe(gulp.dest("./docs/"));
});
