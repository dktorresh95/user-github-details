const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "userGithubDetails",
    publicPath: "auto",
    module: true, // Habilita la salida de módulos ES
  },
  experiments: {
    outputModule: true, // Habilita la generación de módulos ES
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "userGithubDetails",
      filename: "remoteEntry.js",
      remotes: {
        followersGithub: 'http://localhost:4200/remoteEntry.js',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: "16.2.12" },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: "16.2.12" },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: "16.2.12" },
      },
    }),
  ],
};