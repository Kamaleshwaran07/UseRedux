##  REDUX CONCEPT

Redux is a third party library that helps in maintaining large scale state management.


### Product Slice

 We create the product slice to handle all actions related to products and their data. The intialState of the data is an empty array. In reducers, we create all the actions required for the different conditions. 
 
 In conventional method, we write the necessary functions to perform in the parent component and pass it down to the child. 
 
 In Redux concept, the reducers have all the functions and exported and it is called in any component without passing props.

 In this application, there are three actions for api call Loading, Success and Failure. Another two handles the increment and decrement of quantity.

 These reducers are exported as actions and the create slice gives a reducer which is also exported and stored in **Product Store** Component using `configStore`.

 ## Home 

 Home component is imported inside the Provider where the Product Store is stored using store keyword. The home component contains all the routing part and different pages. 

 Total Quantity and Total Price are calulcated from the products stored in the data using **filter** method

## Products

This component has the products data which are mapped to the Card component  for displaying each product with its details. 

Using **UseSelector** different states are stored in a constant 

For the loading, I have given a loader.

For errors, I have given the error message to be displayed on the page.

If the status is success then only the card component will be rendered  with all the details of the product otherwise the error message will be thrown in the page.

## Card 

This component has  been created for displaying the product card. This component has the add and decrease  functionality of quantity as well as price. 

## Styling

Like I said in my previous task, I will use tailwind css alone for styling and responsive I have done that.


**Thank you!!!**