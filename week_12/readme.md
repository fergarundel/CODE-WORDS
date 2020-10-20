# Final Presentations - Week 12

## Continuing Troubleshooting
As I said last week, with the changes I made in order to make every transition the same time I inadvertently made it so the inital click doesn't immediately begin the cycle of text but makes the cells go to random target first. This creates an awkward looking beginning so I decided to begin the sketch with the cells congregated in the centre of the screen in the form of a square. This creates a more appealing aestehtic when the user first opens the page. This formation can also be viewed as symbolic of the physical space of the Free International University which adds another layer to the outcome.

Old starting position:

```Javascript
  for (var i = 0;i < 500;i++){
    var vehicle = new Vehicle(random(width),random(height));
    vehicles.push(vehicle);    
  } 
```
New starting position:

```Javascript
  for (var i = 0;i < 500;i++){
    var vehicle = new Vehicle(random(width/2 +30,width/2 -30),random(height/2 +30,height/2 -30));
    vehicles.push(vehicle);    
  } 
```
![](start.gif)

## Styling 

![](red_black.jpg)

So far I have been using a red background in order to symbolise the urgency of Beuys' message, however I think the black background can be used to create a more effective and immersive atmosphere, especially when (hopefully) paired with sound. So a more stripped back black and white colour scheme with be what I will present my final outcome in.


