// To configure Webpack to bundle your application into a single bundle file
// import path from "path";
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export const entry = './ES6/ES6_files/1.variables.js';
const path = require('path');
const { webpack } = require('webpack');
module.exports = {
    entry : './ES6/ES6_files/1.variables.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : "bundle.js",
        publicPath : "/dist", // since output path is split, this property helps dev server to take the full output path
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'                    
                ]
            }
        ]
    },
    // plugins : [
    //     new webpack.optimize.UglifyJsPlugin({
    //         // ...
    //     })
    // ]
};
// export const output = {
//     filename : 'bundle.js'
// };