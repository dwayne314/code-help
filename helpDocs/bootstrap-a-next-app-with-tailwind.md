---
title: "Bootstrap A Next.js App With Tailwind"
sectionId: 4
tagIds: [1, 2, 3, 8]
createdAt: "2020-03-14"
---

Next.js is a development framework that makes features like server-side rendering and route prefetching easy to implement. Tailwind is a popular set of css utility classes that can improve styling time. Check out the rest of this help doc for steps on how to set up Tailwind in a Next.js application.

### Background

While Tailwind is supported by most major frameworks, some configuration is usually necessary to get it functioning properly. The implementation steps below will provide a step-by-step guide on getting Tailwind working in your Next.js application.

### Implementation

**Steps**

1.  Use your terminal to navigate to the directory you want the project to live in.

2.  Create your next app using either npx or yarn and navigate to your project folder.

    &nbsp;

        // Using npx
        npx create-next-app next-with-tailwind

        // Using yarn
        yarn create next-app next-with-tailwind

    &nbsp;

3.  Navigate to your project folder and install the `tailwindcss`, `postcss` and `autoprefixer` packages.

    &nbsp;

        // Using npm
        npm install -D tailwindcss postcss autoprefixer

        // Using yarn
        yarn add -D tailwindcss postcss autoprefixer

    &nbsp;

4.  Initialize tailwind to create a `tailwind.config.js` and a `postcss.config.js` file.

    &nbsp;

        // using npx
        npx tailwindcss init -p

        // using yarn
        yarn run tailwindcss init -p

    &nbsp;

5.  Update your `tailwind.config.js` to include all your template file paths.

    &nbsp;

    **tailwind.config.js**

        module.exports = {
            content: [
                "./pages/**/*.{js,ts,jsx,tsx}",
                "./components/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }

    &nbsp;

    **Note**

    *Your template paths are any directories that contain tailwind styling. In Next.js these are typically located in your pages and components directories.*

    &nbsp;

6.  Add the tailwind base, components, and utilities directives to your `./styles/globals.css` file.

    &nbsp;

    **./styles/globals.css**

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    &nbsp;

7.  Begin using Tailwind in your application.

    &nbsp;

        export default function Home() {
            return (
                <div className="h-4 w-full bg-red-500">

                </div>
            )
        }

### Links

- [Official Tailwind Next.js Documentation](https://tailwindcss.com/docs/guides/nextjs)
