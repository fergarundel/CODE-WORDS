# Email Threads - Week 11
## Trouble with closing loop

Continuing on from last week's sketch I tried to incorporate a function that would send the cells to random locations after they had completed the sentence or once a button is pressed. Unfortunately for Karen, I wasn't 100% sure accomplish this. Begining with the code;

```Javascript 

    if (index > words.length - 1){
    for (let i = 0; i < vehicle.length; i++){
     vehicles[i].target.x = random(width);
     vehicles[i].target.y = random(height);
      }
    }
```

In order to set the cells target x and y at a random width and height. I found this didn't work due to, as Karen put it, an error of logic. As there is no more words in the array, there is no need for cells so they cannot then be moved to random places. After a few more attempts and alot of help from Karen, I tried to implement a settimeout() function which would allow me to only call upon the loopingText function in my code when needed (when cells need to be changed).

### Inital setTimeout is called in mousePressed:

```Javascript 
 if (on==false){
   setTimeout (loopingText,0);
   }
   ```
   
### Then another setTimeout is placed in the loopingText function which calls upon the function every 3000 milliseconds:

   ```Javascript
     setTimeout (loopingText,3000);
```
     
As the setTimeout function uses milliseconds to trigger the event I didn't need to rely upon frameCount to change the cells from one word to another. This allowed the cells to be randomised when i triggered the event through mousePressed, I think this works alot better than at the end of the phrase as this allows the user to go through the text at their own pace.

## Troubleshooting

