---
title: "Add Custom Google Fonts With Next.js and Tailwind"
sectionId: 3
tagIds: [1, 2, 3, 5, 8, 9]
createdAt: "2020-03-09"
---

Google Fonts make it easy to include custom font styles in a Next Project. Using custom fonts gives you more control over your site's appearance and helps improve brand awareness when implemented correctly. Tailwind, as a css utility library, helps simplify a project's css, however, there are some additional steps to get it working with custom downloaded fonts. Check out the rest of this help doc for more information on implementing custom google fonts in a Next.js application.

### Background

Custom downloaded fonts can be included in a Next.js project by self hosting the font files from your next server. The implementation steps below will show how to get self hosted fonts working in your Next.js project.

### Implementation

**Steps**

1.  Create a new directory `/fonts` in your `/public` folder.

2.  Navigate to the [Google Fonts Helper](https://google-webfonts-helper.herokuapp.com/fonts) website and search for your desired font. Make sure to select only the styles that you need for your application and download the font files.

3.  Extract the woff and woff2 files into the `/fonts/public` folder that you created.

4.  Include the font face for each style in your global stylesheet file.

    &nbsp;

    **/styles/global.css**

        @font-face {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 100;
            src: local(""),
                url("../public/fonts/roboto-v29-latin-100.woff2") format("woff2"),
                url("../public/fonts/roboto-v29-latin-100.woff") format("woff");
        }

    &nbsp;

    **Note**

    A new font face should be included for each selected style that you downloaded. For more information on setting up the font faces, check out the **Copy CSS** section on the Google Fonts Helper download page.

    &nbsp;

5.  Extend the tailwind config to add the new font as an override to your chosen font style.

    &nbsp;

    **tailwind.config.js**

        const defaultTheme = require("tailwindcss/defaultTheme");

        module.exports = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ["Roboto", ...defaultTheme.fontFamily.serif],
                    },
                },
            },
        };

    &nbsp;

**Notes**

* We are using the [Google Fonts Helper](https://github.com/majodev/google-webfonts-helper) to download the fonts instead of [Google's official font website](https://fonts.google.com/). 
* Google's official site downloads uncompressed OTF while the Google Fonts Helper downloads compressed woff and woff2 files which are generally preferred and supported by all modern browsers.
* We are overriding Tailwind's default serif font type. To override the `font-sans` or `font-mono` fonts, their font family will need to be updated in the `tailwind.config.js`

### Use The Fonts

Now that that font is properly imported and integrated with Tailwind, it can be used like any other Tailwind Font for the specified font type.

&nbsp;

**/pages/index.js**

    export default function Home() {
        return <div className="font-serif">Special Fonts</div>;
    }

### Links

- [Google Fonts Helper to download compressed fontes from Google Fonts](https://github.com/majodev/google-webfonts-helper)
- [Official Google Fonts Site](https://fonts.google.com/)
- [MDN Font Face Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
