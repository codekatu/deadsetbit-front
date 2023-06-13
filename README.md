# Dead Set Bit Homepage

This document provides an overview of the website and instructions on how to install and run it locally.

# Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Website Structure](#website-structure)
- [Webpack Configuration](#webpack-configuration)
- [ How to do changes](#how-to-do-changes)

# Getting Started

Before running the website, please ensure that the following dependencies are installed on your system:

- Git: [Installation Guide](https://git-scm.com/downloads)
- Node.js: [Installation Guide](https://nodejs.dev/en/learn/how-to-install-nodejs//)

# Installation

To install the website locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/codekatu/deadsetbit-front.git
   ```

2. Navigate to Project directory
   ```bash
   cd deadsetbit-front
   ```
3. Install the necessary dependencies
   ```bash
   npm install
   ```
4. build the website

   ```bash
   npm run build
   ```

# Website Structure

Here is the structure of your website:

- `dist/`: directory created by the build process. This contains your (`index.html`) and bundled Javascript/CSS. Don't ever make changes to files inside this folder.

- `src/`: Directory containing the source code files

  - `reset.css`: CSS reset file to normalize styles across browsers
  - `fonts.css`: CSS file containing the necessary fonts for the website
  - `style.css`: Main CSS file containing all the styling for the website
  - `index.js`: JavaScript file containing all the project's JavaScript code. It also imports the CSS files for compilation by webpack.

- `public/`: Directory containing publicly accessible files

  - `assets/`: Directory containing image assets for the website
  - `template.html`: HTML template file serving as the main html which will be built into index.html
  - `favicons`: all different favicon files for different devices and platforms
  - `robots.txt`: Robots.txt file for search engine crawlers
  - `sitemap.xml`: Sitemap file for search engines to crawl and index the website
  - `browserconfig.xml`: Browser configuration file for Microsoft browsers

- # Webpack Configuration

  our webpack configuration does the following

- **Plugins:**

  - `CopyPlugin`: This plugin copies files from the `public` directory to the output directory, ignoring the `template.html` file.
  - `HtmlWebpackPlugin`: This plugin generates an HTML file (`index.html`) based on a template (`template.html`) in the `public` directory.
  - `MiniCssExtractPlugin`: This plugin combines our css files into single file. These CSS files are imported into index.js

- **Entry and Output:**

  - The `entry` property specifies the entry point of the application (`./src/index.js`).
  - The `output` property defines the output directory (`dist`) and the filenames for the generated files. The filenames include a content-based hash to bust caching.
  - The `clean` property is set to true. It cleans the output directory (`dist`) on each build.

- **Development Settings:**

  - The `devtool` property is set to `"eval-cheap-module-source-map"`, enabling source mapping for better debugging during development.
  - The `devServer` property configures the development server, specifying the static directory and the port to listen on.

- **Module Rules:**
  - The `module` property contains an array of rules that define how different file types should be processed.
    - The first rule matches `.css` files and uses `MiniCssExtractPlugin.loader` and `css-loader` to extract and process the CSS.
    - The second rule matches `.js` files, excluding the `node_modules` directory. It uses `babel-loader` with the `@babel/preset-env` preset for transpiling JavaScript using Babel.

# How to do changes

Only do changes to the files contained in (`src`) or (`public`) directory. Don't ever touch any of the files inside (`dist`) directory, since it is where our site will be built.

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to "localhost:3000" to view the website.

3. Make the changes you want to make to the source code.

4. Build the website:

   ```bash
   npm run build
   ```

   Alternatively, you can use the npm

   ```bash
   run build-watch
   ```

   command to automatically rebuild the website each time you save a file. This is especially useful when making bigger changes and allows for a more streamlined development process.

## Created By

This website was created by [Codekatu Oy](https://codekatu.com) by developer Joni Harju.
