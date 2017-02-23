const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    output: path.join(__dirname, './target/classes/static')
};

var common = {
        entry: "./src/main/React/index.jsx",
        output: {
            path: PATHS.output,
            publicPath: '',
            filename: 'bundle.js'
        },
        resolve: {
            modulesDirectories: ['node_modules', './src/main/React'],
            extensions: ['', '.js', '.jsx']
        },

        module: {
            loaders: [{
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel",
                include: __dirname,
                query: {
                    presets: ["es2015", "react"]
                }
            }]
        }
    }
    

if (TARGET === 'start') {
    console.log('Compiling front end code for dev ')

    // Add Hot reload for dev env
    common.module.loaders[0].query.presets.push("react-hmre")

    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });

}

if (!TARGET) {
    console.log('Compiling front end code for production ')

    module.exports = merge(common, {});
}

