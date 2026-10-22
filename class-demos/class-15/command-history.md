Way we opened terminal:

Navigate to finder: right click -> open in terminal
pwd
npm init -y(generates package.json file)
npm install express nunjucks
Ways in which we ran our server.js file

node.js -> this requires a restart everytime we make changes to the file
node --watch server.js -> this watches our server.js file for changes and will automatically restart the server
node --watch --watch-path=views server.js -> this watches both our server.js file and all of our .njk files in our view folder.