**TypeScript Design Patterns**

This repository is focused on learning Design Patterns using TypeScript

**- Decorator :**

The _Decorator_ design pattern is a structural pattern used to dynamically add behaviors or responsibilities to an object without modifying its code. Instead of creating subclasses to extend the features, it uses composition to wrap the original object with one or more decorator objects.

In the following example, I will explain how it works:

Suppose we have a class "Car" with many available models. Normally, each model has common features and some that are different. To avoid implementing those features (which may take a lot of time) in each model separately, it's a good idea to use the _Decorator_ design pattern. 

First, we create an abstract class (this is the component), e.g., `Car`, and declare within it all the properties and methods that are shared across all models. After that, we implement the concrete component (i.e., a class that extends the component). Once that is done, we need to create our decorator class (which also needs to extend the component). What makes it different from the other concrete components is that it is ***abstract*** and holds a reference to a **component object**. Finally, we create the **concrete decorator**, which extends the **decorator** class and implements all abstract methods defined in its parent class. In this class, we add or create new features that make the car different.

As you can see, it's not very complex😊.

> "Innovation is the ability to see change as an opportunity, not a
> threat." — Steve Jobs

*Created  by:* Rohan29-AN 
*Date:* Tue 3 Sept 2024
