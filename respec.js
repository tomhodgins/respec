/*

# respec
## version 0.0.1

Respec allows CSS authors to assign a specificity level to the rules they write separate from the specificity of the selector

### Syntax

    respec(selector, specificity, rule)

- `selector` is a CSS selector
- `specificity` is a number 0 or greater
- `rule` is one or more CSS declarations separated by semicolons

### Example

    respec('div', 3, 'background: lime;')

## Info

- website: https://github.com/tomhodgins/respec
- author: Tommy Hodgins
- license: MIT

*/

function respec(selector, specificity, rule) {

  var tag = document.querySelectorAll(selector)
  var style = ''
  var count = 0

  for (var i=0; i<tag.length; i++) {

    var attr = (selector+specificity).replace(/\W+/g, '')
    var specificSelector = ''

    tag[i].setAttribute('data-respec-' + attr, count)

    for (var j=0; j<=specificity; j++) {

      specificSelector += '[data-respec-' + attr + '="' + count + '"]'

    }

    style += '\n' + specificSelector + ' {\n'
             + '  ' + rule + '\n'
             + '}\n'

    count++

  }

  return style

}