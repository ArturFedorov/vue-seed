const StylelintPlugin = require('stylelint-webpack-plugin');
const CodeframeFormatter = require('stylelint-codeframe-formatter');

/*
* VUE_APP_BASE_URL is environment variable, it's provides without '/'. So if it presents we need to add
* slash, is not (it is 'undefined') we should use empty string ''
* */
const BASE_PATH = process.env.VUE_APP_BASE_URL ?  `/${process.env.VUE_APP_BASE_URL}` : '';

module.exports = {
  devServer: {

  },
  publicPath: BASE_PATH,
  chainWebpack: config => {
    config.plugin('stylelint')
      .use(StylelintPlugin, [{
        failOnError: false,
        files: ['**/*.vue', '**/*.scss'],
        formatter: CodeframeFormatter,
        fix: false
      }])
      .end();

    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(() => {
        return { plugins: [
          {removeTitle: true},
          {convertColors: {shorthex: false}},
          {removeUselessStrokeAndFill:true},
          {removeAttrs:{ preserveCurrentColor: true,  attrs: ['fill', 'stroke'] } }
        ]}
      });
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/JetBrains/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'icons/icons.svg'
      },
      /*
       * @see https://github.com/JetBrains/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/base/variables.scss";@import "@/styles/base/mixins.scss";$font_path: '${BASE_PATH}/fonts/';`
      }
    }
  }
};
