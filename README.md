*** STEPS TO DEPLOY TO GITHUB PAGES ****
1. After making all the changes in 'master' branch, then first run the command 'git push origin -d gh-pages' to delete the github pages branch on Github.
2. You don't need to pull or have the gh-pages branch locally.
3. Run the command 'npm run build' locally.
4. Run the command 'npm run export' locally.
5. Run the command 'npm run deploy' locally which will deploy onto github pages.
6. Ensure that you have the empty '.nojekyll' file in gh-pages git branch.