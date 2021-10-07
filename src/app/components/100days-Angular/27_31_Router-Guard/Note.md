## Target-Day27-28: Angular router
## Target-Day29 :Reduce bundle-size when refresh page (load application) by way below:
 - Transform folder 27_28 to lazy loading.
 * Note important! Using commands below to check bundle size and analyze webpack-bundle
    - ng build --stats-json
    - npx webpack-bundle-analyzer dist/your-project-name/stats.json  
    - Don't forget re-execute ng build --stats-json when some module was changed

## Target - Day30-31: Angular Guard:
 - canActivate
 - canActivateChil: using apply for all children of parent component, refer: article-routing.module.ts
 - canLoad: In lazy module, canActivate guard cancle user route but lazy module still load. We should using canLoad instead
 - canDeactivate: using for artical-edit.components.ts: Prevent user navigate others page when something errors, data edited not save, ...

 # Refer
 - https://www.youtube.com/watch?v=VsUjev5-pTU&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=31
 - https://github.com/angular-vietnam/100-days-of-angular/
 
