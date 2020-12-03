# RI Forage Calendar
####  [Introduction](#introduction)  
####  [Expected List of Features](#expected-list-of-features)
####  [UX and Navigation](#ux-and-navigation)
####  [Market Survey](#market-survey)
####  [References](#references)
####  [Code References](#code)

[Figma Link](https://www.figma.com/file/BFYyoJnBJlD7sh3y5kPFSC/Mushroom-Forage-Calendar?node-id=0%3A1)

### todos el To Dos
- [ ] work on favicon
- [ ] re-work file tree for css, js & double check links in pages
- [ ] fix menu sticky top
- [ ] merge branches, carefully. devTemp is most update.

### 1. Introduction

The Website will offer a simple calendar & guide for seasonal foraging in RI.

Beginning with Mushrooms, but eventually branching out to Herbs, Edible Plants, & Wild Fruits & Berries, the site will aid people in plant literacy and ecological assessment. This resource will complement hiking and outdoor exploration, being geared towards mobile interaction it will provide a portable information source. The goal of this is to act as a tool to aid in foraging by providing identification assisatance, notes on habitat, and a calendar of when particular plants ae likely to be found.

### 2. Expected List of Features
#### Phase 1
* Calendar which lists out when Mushrooms are likely to be found.
* Start with small selection of mushrooms, provide several photos, info on characteristics, and warnings about look alikes, recipe notes.
* Section on Safe & Best Practices.
* Identification Guide - Perhaps a form based interface that helps with indentification.
* Weather API, weather is critical for forgaging mushrooms.   
  * [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  * [National Weather Service API](https://www.weather.gov/documentation/services-web-api)
  * [Openweather API](https://openweathermap.org/api)
* Links to local resources, state DEM, State parks.

#### Phase 2
Future Features once we begin working on backend Database
Ability for users to log in and keep a Personal Log where they can
* upload photos
* notes
* location

#### UX and Navigation
* Style-wise I am Utilizing some titles on the side which could function as bread crumbs
* Trying to utilize circular motifs where possible to make visual link to the seasons.
* Need to figure out ways to connect back and forth more intuitively between the Calendar and the info on each mushroom in the mushroom guide as well as link back and forth between indiviudal mushrooms and the guide.
   * potentially in the heading of each mushroom description there is a note/glyph on their season and that links back to the calendar


### 3. Market Survey(#survey)
[Local Guides](https://mushroomhunting.org/)
* RI field guides who present tours. 

[Trefle](https://trefle.io/)
* Self Described `We are an open, freely accessible botanical data source and REST API.` Could be a potential database to intergrate.

[Wild Edible](https://www.wildedible.com/foraging)
* I like the depth of description about collecting each plant including tools, instructions for harvesting, notes on storing, and recipes.

[The Mushroom Forager](http://themushroomforager.com/category/foragecast/)
* The site is notable for the way the writing is grounded by the subhjective 1st person voice of the author(s).

[Woodland Trust](https://www.woodlandtrust.org.uk/visiting-woods/things-to-do/foraging/)
* I appreciate their Responsible Forgaing Guide and their blog posts for each month.

[Meadows + More](https://www.meadowsandmore.com/in-the-field/foraging-calendar/)
* This website has a single page spring calendar, also general info about workshops this organization provides.

[Mushroom World](http://www.mushroom.world/mushrooms/list)
* Very photo-centric

[blog post from a food website](https://food52.com/blog/20860-an-illustrated-guide-to-mushroom-foraging-10-earthy-savory-recipes)
* Hand drawn images.

[Endless Print Calendars...](https://www.google.com/search?q=foraging+calendar&safe=off&client=firefox-b-1-d&sxsrf=ALeKk01x5v9r2wR-6wFK-EaaFXV7Xa1eLg:1605312541598&tbm=isch&source=iu&ictx=1&fir=PxhMrXrqCPgApM%252C-QPq0tdN_tA7TM%252C_&vet=1&usg=AI4_-kQmHAGGU0INLKy3W1i4Fni1fWCMkA&sa=X&ved=2ahUKEwi3962e34DtAhWqFlkFHSrZAwoQ9QF6BAgLEEs#imgrc=PxhMrXrqCPgApM)
* There is no end of printed calendars, cookbooks as well as other web resources... These provide a lot of strategies for organizing visual content.
* A useful pdf is the [Forestry Services Field Guide](https://www.fs.fed.us/nrs/pubs/gtr/gtr_nrs79.pdf)


##### 4. References(#references)
##### image inspiration
[flora specimen page](https://www.loc.gov/resource/ppmsca.24849/)
[Haeckel Illustration of Stinkhorns](https://www.loc.gov/item/2015648945/)
[Vegetable Poisons](https://www.loc.gov/resource/ds.06482/)

##### Project Specific Resources 
* [New England Mushroom Hunting -- potential partner?](https://www.facebook.com/Southern-New-England-Mushroom-Hunting-657591177628706/)  
* [North American Mycological Society](https://namyco.org/)
##### General Resources  
* [Mycology.net -- Mushroom Science](https://www.mycology.net/)  
* [Cornell Mycology](http://mycology.cornell.edu/fmush.html)
* [a blog post with general lists](https://www.thebalanceeveryday.com/foraging-for-food-a-monthly-guide-1388185)
* [Journal of Mycology Society of China](https://www.tandfonline.com/toc/tmyc/current)
* [American Mushrooms -- image links seem broken?](https://americanmushrooms.com)
* [Nytimes article on getting started mushroom foraging](https://www.nytimes.com/wirecutter/blog/how-to-hunt-mushrooms/)

##### Resources To Be explored 
* [USDA plant portal](https://plants.sc.egov.usda.gov/java/)
* [USDA plant API in R](https://data.nal.usda.gov/dataset/usda-plants-database-api-r)
* [Library of Congress](https://www.loc.gov/photos/?q=mushrooms)
* [Department of Interior](https://www.doi.gov/library/internet/plants)
* [A Dataset for ML](https://www.kaggle.com/uciml/mushroom-classification)
* [A automated photo fed mushroom id assistant](https://www.fungusid.com/)
 * [Champignouf -- another photo fed id tool/app](https://champignouf.com/)
* [pay per use plant identification API](https://web.plant.id/plant-identification-api/)
  * Ordered for Priority of further exploration

##### 5. Code References(#code)

* [Dan shiffman brief intro usage of fetch and API's](https://www.youtube.com/watch?v=uxf0--uiX0I)
* [Fetch & OpenWeatherMapAPI](https://bithacker.dev/fetch-weather-openweathermap-api-javascript)
 * [An additional Weather API](https://medium.com/swlh/a-simple-javascript-weather-application-and-json-parsing-abd21ff0ea9a)
* [OpenWeatherAPI](https://openweathermap.org/appid)
* [National Weather Service API](https://www.weather.gov/documentation/services-web-api)
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
