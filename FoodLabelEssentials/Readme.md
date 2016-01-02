About FoodLabelEssentials App
===================

FoodLabelEssentials is a Hybrid Mobile App developed using Visual Studio Tools for Apache Cordova + Kendo UI Mobile. It uses API from Food Essentials (http://developer.foodessentials.com).

This app allows you to search for a product and find out ingredients contained in that product. Following are the screenshots from the app:

Main Screen:

<img src="http://content.screencast.com/users/Kashyapa/folders/FoodLabelEssentials/media/60d2d570-0cb1-4550-bebe-06f1ad540514/FoodLabelEssentials-Main.jpg" height="250" />

Search Results:

<img src="http://content.screencast.com/users/Kashyapa/folders/FoodLabelEssentials/media/838f3c4e-1eee-4ef8-b27f-a93f35312a29/FoodLabelEssentials-SearchResults.jpg" height="250" />

Ingredients:

<img src="http://content.screencast.com/users/Kashyapa/folders/FoodLabelEssentials/media/cff743be-aa82-42c6-b1e3-4d6ef1faa624/FoodLabelEssentials-Ingredients.jpg" height="250" />




Setup
-------------

- Clone the repo
- Navigate to FoodLabelEssentials folder
- Open FoodLabelEssentials.sln in Visual Studio 2015
- Make sure the dependencies are installed. Right click on Dependencies folder and select Restore Packages.
- Open www/scripts/settings.js file and replace Food Essentials API Key. Find property named "apiKey" and replace its value with your key. 
- Do a build first. There is a gulp task associated with the build. It will download Kendo UI Mobile bower package and copy it to www/lib/kendo folder. Make sure this task is run
- Run using Ripple or Device
