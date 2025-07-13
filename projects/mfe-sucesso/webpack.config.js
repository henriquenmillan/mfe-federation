const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfeSucesso",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        name: "mfeSucesso",
        library: { type: "var", name: "mfeSucesso" },
        filename: "remoteEntry.js",
        exposes: {
            './SucessoModule': './projects/mfe-sucesso/src/app/sucesso/sucesso.module.ts',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
