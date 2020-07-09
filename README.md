# ultimate-Japan-guider-webclient
Aim of this project is to build a matching platform for travellers and local guiders.

Right now, It has only one single function, which is get the requests from users and store it in a FireBase database.
In the next step, functions like user sign-up and login authentication, profile page for local guiders, communication channel between travellers and local guiders, experience scoring etc. would be added.
Meanwhile, data storage and process would be shifted to using AWS API GateWay, Lambda and Dynamo DB.

To make it run at your local environment, after `git clone`, you should run `npm install` to get the needed packages.
Use `npm run start` to start the web application.
