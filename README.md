#hipstyl

A collection of hipster-ish mixins for Stylus preprocessor.

##The Collection

Check out our current hipstyls.

###Color

 - Pastelify

###Buttons

- Pressable (w/ animation)

###Shadow

- Long Shade
- Raised

###Loading

- Website Bar (w/ animation)


##Getting Started

Grab it from npm:

```
$ npm install hisptyl
```

###Command-line

```
stylus --use ./node_modules/hipstyl/hipstyl.js --out ./
```

###Gulp

```javascript
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  ;

gulp.task('one', function () {
    gulp.src('./css/one.styl')
        .pipe(stylus({
            use: [require('hipstyl').css]
            compress: false
        }))
        .pipe(gulp.dest('./css'));
});
```

###Connect/Express

```javascript
var stylus = require('stylus')
  , hipstyl = require('hipstyl')
  ;

app.configure(function(){
    app.use(stylus.middleware({ src: __dirname + '/public', compile: hipstyl.middleware }));
});
```

###Other enviroments

```javascript
var stylus = require('stylus')
  , hipstyl = require('hipstyl')
  ;

stylus(str)
    .use(hipstyl.css())
    // call render & add more stylus config
```

##Got a hipstyl? Really?

It'd be awesome to have your effect/mixin into hipstyl collection. So, make a Pull Request following these steps:

1. Find a category your hipstyl fits (if there's no one, create one).
2. Add your hipstyl in a mixin/selector inheritance form.
3. Pull request it.
4. ????
5. PROFIT!!!1

To be accepted, your hipstyl must follow these requirements:

1. It should be written in Stylus.
2. It should use none or the minimal markup possible (try `:before` and `:after`)
3. It should be hipster :D
4. It should provide a demo - [codepen.io][] is recommended.

##License

MIT


<!-- links -->
[codepen.io]: http://codepen.io/
