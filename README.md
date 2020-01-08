# GrapesJS Chart Donut

Simple donut chart component for GrapesJS editor, powered by [ZingChart](https://www.zingchart.com/).

# [Demo](http://grapesjs.com/demo.html)

## Summary

-   Plugin name: `gjs-chart-donut`
-   Components: `zing-chart-donut`
-   Blocks: `chart-donut'`

## Options

-   `Chart Values` A list of comma separated chart values.

## Download

-   `npm i grapesjs-chart-donut`

## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet" />
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-chart-donut.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
    var editor = grapesjs.init({
        container: '#gjs',
        plugins: ['gjs-chart-donut'],
        pluginsOpts: {
            'gjs-chart-donut': {
                /* ...options */
            },
        },
    })
</script>
```

## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-navbar.git
$ cd grapesjs-navbar
```

Install it

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```

## License

BSD 3-Clause
