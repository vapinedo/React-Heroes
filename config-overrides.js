const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@data": "src/app/data",
        "@hooks": "src/app/hooks",
        "@pages": "src/app/pages",
        "@models": "src/app/models",
        "@routers": "src/app/routers",
        "@components": "src/app/components"
    })(config);
    return config;
};