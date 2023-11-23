# Tailwind CSS Load & Intersection Plugin
FORK OF [tailwindcss-intersect](https://github.com/heidkaemper/tailwindcss-intersect)

Imagine you could write an Intersection Observer like a Tailwind CSS variant:
```html
<div class="opacity-0 intersect:opacity-100 transition-opacity"></div>
```



## Installation
This package has two parts. A Tailwind CSS plugin and a tiny JavaScript snippet.<br>
Download and install it with NPM:
```sh
npm install tailwindcss-load-intersect
```

### Add the plugin to your tailwind.config.js file
```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require('tailwindcss-load-intersect')
    ],
}
```

### Add the necessary JavaScript snippet to your site

#### Via NPM
Alternatively, you can add the plugin to your JavaScript bundle:
```js
import Observer from 'tailwindcss-load-intersect';

Observer.start();
```

---

## Usage
Use the `intersect:` variant in your classes like you would with every other Tailwind CSS Variant:
```html
<div class="bg-cyan-500 intersect:bg-indigo-600 transition-colors"></div>
```

### The once utility
You can use `intersect-once` if you want to trigger the event only on the first appearance of an element.
```html
<div class="intersect:animate-spin intersect-once"></div>
```

### Custom classes
If you want to define the intersection behavior in a custom class (e.g. with the @apply directive), add a `intersect` class to your HTML element.
```html
<div class="intersect custom-class"></div>
```
