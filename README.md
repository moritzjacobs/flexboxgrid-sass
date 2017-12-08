# mj-flexboxgrid-sass

A simplified, one file, edit happy adaptation of [hugeinc/flexboxgrid-sass](https://github.com/hugeinc/flexboxgrid-sass), which in turn is an adaption of the original [Flexbox Grid](http://flexboxgrid.com/) created by @kristoferjoseph.

## Changes in this fork
- `container-fluid` is now `container`, if you want a fullsized container, use `container-full`
- removed the `sass-flex-mixin` dependency in favour of using autoprefixer for as much backwards compatibility as you need.
- `mj-gulp-workflow` is used for sass compilation
- improved file structure
- added backstopjs based regression testing

## Development

`npm run dev` during development, then `npm run dist` for distribution.

## [Docs](https://moritzjacobs.github.io/mj-flexboxgrid-sass/)

or `npm run docs`

## Tests

`npm test`

## This fork is not published on npm

<small>Hugs and _KISS_es!</small>
