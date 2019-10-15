# @lib-core/colors
A simple wrapper to manage color mutation, transforms and info. Fully written in typescript. (including types)

## Installation
### npm
```bash
npm install --save @lib-core/colors
```
### yarn
```bash
yarn add @lib-core/colors
```

## Api
```javascript
import * as libColors from '@lib-core/colors';
// Or
const libColors = require('@lib-core/colors');
```

### Parse a color

#### Parse a hex color
```javascript
// Parse a hex color
const color = libColors.hex.parse('#ffffff'); // { red: 255, green: 255, blue: 255, alpha: 1 }
const color = libColors.hex.parse('#ccc'); // { red: 204, green: 204, blue: 204, alpha: 1 }

// without the #
const color = libColors.hex.parse('121212'); // { red: 18, green: 18, blue: 18, alpha: 1 }
const color = libColors.hex.parse('333'); // { red: 51, green: 51, blue: 51, alpha: 1 }

// or even with an alpha part
const color = libColors.hex.parse('#73d6f8f3'); // { red: 115, green: 214, blue: 248, alpha: 0.9529411764705882 }
const color = libColors.hex.parse('00ff7669'); // { red: 0, green: 255, blue: 118, alpha: 0.4117647058823529 }
```

#### Parse a rgb color
```javascript
// Parse a rgb color
const color = libColors.rgb.parse('rgb(255, 255, 255)'); // { red: 255, green: 255, blue: 255, alpha: 1 }
const color = libColors.rgb.parse('rgb(204, 204, 204)'); // { red: 204, green: 204, blue: 204, alpha: 1 }

// or even with an alpha part
const color = libColors.rgb.parse('rgba(115, 214, 248, 0.95)'); // { red: 115, green: 214, blue: 248, alpha: 0.95 }
const color = libColors.rgb.parse('rgba(0, 255, 118, .41)'); // { red: 0, green: 255, blue: 118, alpha: 0.41 }
```


#### Parse a hsl color
```javascript
// Parse a hsl color
const color = libColors.hsl.parse('hsl(0, 0%, 100%)'); // { red: 255, green: 255, blue: 255, alpha: 1 }
const color = libColors.hsl.parse('hsl(0, 0%, 80%)'); // { red: 204, green: 204, blue: 204, alpha: 1 }

// or even with an alpha part
const color = libColors.hsl.parse('hsla(195, 90%, 71%, 0.95)'); // { red: 115, green: 214, blue: 248, alpha: 0.95 }
const color = libColors.hsl.parse('hsla(147, 100%, 50%, .41)'); // { red: 0, green: 255, blue: 118, alpha: 0.41 }
```

### Stringify an color

#### Stringify to a hex color
```javascript
// Stringify to a hex color
const color = libColors.hex.stringify({ red: 255, green: 255, blue: 255, alpha: 1 }); // '#ffffff'
const color = libColors.hex.stringify({ red: 204, green: 204, blue: 204, alpha: 1 }); // '#cccccc'

// or even with an alpha part
const color = libColors.hex.stringify({ red: 115, green: 214, blue: 248, alpha: 0.95 }); // '#73d6f8f2'
const color = libColors.hex.stringify({ red: 0, green: 255, blue: 118, alpha: 0.40 }); // '#00ff7666'
```

#### Stringify to a rgb color
```javascript
// Stringify to a rgb color
const color = libColors.rgb.stringify({ red: 255, green: 255, blue: 255, alpha: 1 }); // 'rgb(255,255,255)'
const color = libColors.rgb.stringify({ red: 204, green: 204, blue: 204, alpha: 1 }); // 'rgb(204,204,204)'

// or even with an alpha partgi
const color = libColors.rgb.stringify({ red: 115, green: 214, blue: 248, alpha: 0.95 }); // 'rgba(115,214,248,0.95)'
const color = libColors.rgb.stringify({ red: 0, green: 255, blue: 118, alpha: 0.41 }); // 'rgba(0,255,118,0.41)'
```


#### Stringify to a hsl color
```javascript
// Stringify to a hsl color
const color = libColors.hsl.stringify({ red: 255, green: 255, blue: 255, alpha: 1 }); // 'hsl(0,0%,100%)'
const color = libColors.hsl.stringify({ red: 204, green: 204, blue: 204, alpha: 1 }); // 'hsl(0,0%,80%)'

// or even with an alpha part
const color = libColors.hsl.stringify({ red: 115, green: 214, blue: 248, alpha: 0.95 }); // 'hsla(195,90%,71%,0.95)'
const color = libColors.hsl.stringify({ red: 0, green: 255, blue: 118, alpha: 0.41 }); // 'hsla(147,100%,50%,0.41)'
```
