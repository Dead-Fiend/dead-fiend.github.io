#Start Application
You need Node.js(with npm). PostgreSQL located on hosting, therefore, there is no need to download it or configure it.
## Available Scripts
### `npm i`
######In root directory(`back`)
**Be sure to run first in the npm console**
### `npm run build`
######In directory with frontend(`back/src`)
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
### `npm start`
######In root directory(`back`)
Place the backend on rest(deploy on localhost)
###**Now you have to open the second npm console and enter the following scripts there**
### `serve -s build`
######In root directory(`back`)
Place the frontend on rest(deploy on localhost)
#Done
##You can visit the website by following the link:
##`http://localhost:3000`
## Or use links in your npm console
