Initial Setup and Canvas Creation:

I started by creating a 400x400 canvas using createCanvas(). I chose a light blue background (background(180, 220, 255)) to set a calm, airy atmosphere for the sketch.
Defined the initial position of a dot (startX, startY) at the center of the canvas and set an initial radius for the dot.
Using setInterval() for Repeated Actions:

I used setInterval() to periodically change the position of the dot every 2 seconds. The moveDot() function was designed to generate a random position for the dot, simulating dynamic movement across the canvas.
Each time the dot moves, I also randomize its size by adjusting the radius (radius = random(15, 30)), making it more unpredictable.
Using setTimeout() to Stop the Action:

I used setTimeout() to stop the movement of the dot after 5 seconds. This was done by calling the stopMovingDot() function, which stops the setInterval() from continuing and halts the drawing loop (noLoop()).
The clearInterval() method inside stopMovingDot() was essential in stopping the periodic changes initiated by setInterval().
Drawing Shapes (Dot and Lines):

Inside the draw() function, I used ellipse() to draw the dot with a semi-transparent black stroke, which allowed it to appear soft against the background.
Additionally, a random line was drawn from the center of the canvas to a random point on the canvas. This was done using the line() function, which created a new random line with every frame, adding an extra dynamic element to the sketch.
Experimenting with Random Elements:

Randomization played a significant role in this sketch. By using random() to generate random positions for both the dot and the lines, I was able to create a sense of chaotic, ever-changing movement. This added a playful, spontaneous feel to the design.
I experimented with both the dot’s position and size, and I also randomized the end points of the lines, making the overall sketch more interactive and unpredictable.
Challenges Faced:

At first, I had to ensure that setInterval() and setTimeout() worked together effectively without causing conflicts in the code.
Stopping the drawing loop with noLoop() after the setTimeout() triggered was a critical step to stop unnecessary updates once the animation was intended to pause.
Key Takeaways:

setInterval() and setTimeout() are powerful tools in p5.js for controlling time-based actions. They can be used to create animations, transitions, and interactive elements.
Randomization (random()) can add unpredictability and dynamic qualities to the design, making the sketch feel alive and ever-changing.
clearInterval() and noLoop() are crucial for stopping repeated actions and halting the drawing loop when needed.
