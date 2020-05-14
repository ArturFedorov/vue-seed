const path = require('path');

module.exports = {
  title: '🌶 🥒 Marketplace',
  sections: [
    {
      name: 'Common Components',
      components: 'src/components/common/**/*.vue',
      ignore: 'src/components/common/UIkit/UIkit.vue'
    },
    {
      name: 'HTML Components',
      components: 'src/components/common/UIkit/UIkit.vue'
    },
    {
      name: 'Pages Docs',
      components: 'src/views/**/*.vue'
    }
  ],
  require: [
    './src/styles/styles.scss',
    './styleguideConfig/styleguide.scss'
  ],
  theme: {
    color: {
      linkHover: '#E20074'
    }
  },
  renderRootJsx: path.join(__dirname, 'styleguideConfig/styleguide.root.ts'),
  skipComponentsWithoutExample: true
};
