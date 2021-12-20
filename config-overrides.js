const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@data": "src/app/data",
        "@auth": "src/app/auth",
        "@hooks": "src/app/hooks",
        "@types": "src/app/types",
        "@pages": "src/app/pages",
        "@models": "src/app/models",
        "@routers": "src/app/routers",
        "@components": "src/app/components"
    })(config);
    return config;
};