# `<NoSir />` <sub>_for [Preact]_</sub>

[![NPM](https://img.shields.io/npm/v/preact-no-ssr.svg)](https://www.npmjs.com/package/preact-no-ssr)
[![Travis](https://travis-ci.org/ezekielchentnik/preact-no-ssr.svg?branch=master)](https://travis-ci.org/ezekielchentnik/preact-no-ssr)

A Preact component for skipping server side rendering (SSR) of components. This component helps render components on the server that make sense to be rendered above the fold or that only makes sense to render on client.

#### [Demo](https://github.com/ezekielchentnik/preact-pwa)


---


## Usage Example

Install
```bash
npm i preact-no-ssr --save
```


Wrap the components you do not want to render on server when using 'preact-render-to-string'

```js
import NoSsr from 'preact-no-ssr';

<NoSsr
  placeholder={<MySpinnerOrPlaceholder />} // placeholder to render on server, defaults to null
  skip={false} // toggle on/off server render, defaults to true
>
  <div>Stuff to not render on server</div>
</NoSsr>
```

## Props

| Prop                | Type       | Description         |
|---------------------|------------|---------------------|
| **`placeholder`**   | _Function_ | Component to render on server
| **`skip`**          | _Boolean_  | If `false`, renders on server


### License

[MIT]


[Preact]: https://github.com/developit/preact
[MIT]: http://choosealicense.com/licenses/mit/
