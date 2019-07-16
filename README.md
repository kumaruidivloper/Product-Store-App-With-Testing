## App Setup
Step1: ng new [AppName] --style=scss --routing --prefix myprefix

## Install Bootstrap
Step3: npm install bootstrap --save
Step4: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],  ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code:
URL: https://www.techiediaries.com/angular-bootstrap-ui/
@import "~bootstrap/dist/css/bootstrap.css";

## Icon & Jquery CDN Link
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>
	<app-root></app-root>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

## Fake Server

Step1: npm install json-server
Step2: create db.json
Step3: Create some initial Data in db.json file
Step4: Edit package.json start property ["start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",]
Step5: npm install concurrently
Step6: npm run start [For run the app]


## Application_Folder_Structure_Image
![IMG_4789](https://user-images.githubusercontent.com/30646609/60645546-9246cb80-9e56-11e9-9d96-68d57a7e20b7.JPG)