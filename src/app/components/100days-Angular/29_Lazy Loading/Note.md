# Transform folder 27_28 to lazy loading.
Target: Reduce bundle-size when refresh page (load application)

# Note important! Using commands below to check bundle size and analyze webpack-bundle
    ng build --stats-json
    npx webpack-bundle-analyzer dist/your-project-name/stats.json  

Don't forget re execute ng build --stats-json when some module was changed