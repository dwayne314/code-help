---
title: "Import SVGs As React Components"
sectionId: 1
tagIds: [1, 2, 3, 6, 7, 10]
createdAt: "2022-03-14"
---

Using SVGs as components in React gives more control to the frontend developer and allows greater customization of the image's appearance without requiring separate images for multiple image states. Check out the rest of the help doc below for more information on including this feature in your next React project.

### Background

As SVG components are not supported out of the box in React, an svg loader will have to be included using either Webpack or Babel to correctly parse svg files and use them as React components. The Babel and Webpack sections below will show how to implement this feature using the respective technologies.

### Implementation

#### Webpack

In order for Webpack to load svg components, we will need to install a loader to parse svg files and include the @svgr/webpack loader in your webpack.config.js.

&nbsp;

**Steps**

1.  Install the [SVGR Webpack Loader](https://react-svgr.com/docs/webpack/) as a dev dependency.

    &nbsp;

        # Installing with npm
        npm install -D @svgr/webpack

        # Installing with yarn
        yarn add -D @svgr/webpack

    &nbsp;

    **Note**

    *The SVGR Webpack Loader is an official webpack loader used to import SVGs as React components. Check out the link above for more information on the package.*

    &nbsp;

2.  Add the loader to your Webpack config. Alternatively, if using Next.js add the loader to your next config.

    &nbsp;

    **webpack.config.js**

        module.exports = {
            module: {
                rules: [
                    {
                        test: /\.svg$/i,
                        use: ['@svgr/webpack'],
                    },
                ],
            },
        }

    &nbsp;

    **next.config.js**

        const nextConfig = {
            webpack: (config) => {
                config.module.rules.push({
                    test: /\.svg$/i,
                    use: ["@svgr/webpack"],
                });
                return config;
            },
        };

#### Babel

In order for Babel to enable loading svg components, we will need to install a plugin to parse the svg files and include the plugin in your .babelrc file.

&nbsp;

**Steps**

1.  Install the [Babel Inline React SVG Plugin](https://github.com/airbnb/babel-plugin-inline-react-svg) Babel plugin as a dev dependency.

    &nbsp;

        # Installing with npm
        npm install -D babel-plugin-inline-react-svg

        # Installing with yarn
        yarn add -D babel-plugin-inline-react-svg

    &nbsp;

    **Note**

    *The babel-plugin-inline-react-svg optimizes SVGs with [SVGO](https://github.com/svg/svgo/) and transforms the svgs into React components, check out the links above for more information on the package.*

    &nbsp;


2.  Include the loader to your Babel config. Note, if using Next.js the next/babel preset must be included to properly transpile jsx.

    &nbsp;

    **.babelrc**

        {
            "presets": ["next/babel"], // Only if using Next.js
            "plugins": ["inline-react-svg"]
        }


#### Use The Component

Now that svg files will now be transformed into React components when loaded, they now may be used as simple React components.

&nbsp;

    import LogoSVG from "../path-to-svg"

    export default function Header(props) {
        return <LogoSVG style={{fill: "black"}}>
    }

### Links

- [A blog post detailing different ways to import SVGs into React](https://dev.to/dolearning/importing-svgs-to-next-js-nna)
- [The SVGR Webpack Loader Docs](https://react-svgr.com/docs/getting-started/)
- [The Babel Inline React SVG Plugin Docs](https://github.com/airbnb/babel-plugin-inline-react-svg)
- [Customizing the babel config with Next.js](https://nextjs.org/docs/advanced-features/customizing-babel-config)
