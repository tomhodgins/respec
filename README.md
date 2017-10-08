![](https://i.imgur.com/adVcNNR.png)

# respec

Respec allows CSS authors to assign a specificity level to the rules they write separate from the specificity of the selector

> Inspired by [https://github.com/w3c/csswg-drafts/issues/1170](https://github.com/w3c/csswg-drafts/issues/1170)

### Syntax

```javascript
respec(selector, specificity, rule)
```

- `selector` is a CSS selector
- `specificity` is a number 0 or greater
- `rule` is one or more CSS declarations separated by semicolons

### Example

```javascript
respec('div', 3, 'background: lime;')
```

### Website

- https://github.com/tomhodgins/respec/