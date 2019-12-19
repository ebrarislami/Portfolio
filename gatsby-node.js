const Path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === "build-html"
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      modules: ["node_modules"],
      alias: {
        TweenLite: "gsap/src/minified/TweenLite.min.js",
        TweenMax: "gsap/src/minified/TweenMax.min.js",
        TimelineLite: "gsap/src/minified/TimelineLite.min.js",
        TimelineMax: "gsap/src/minified/TimelineMax.min.js",
        ScrollMagic: "scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
        "animation.gsap":
          "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
        "debug.addIndicators":
          "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js",
      },
    },
  })
}
