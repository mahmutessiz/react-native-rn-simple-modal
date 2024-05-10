#  react-native-rn-simple-modal

This is a simple and customasible modal for react-native. It's easy to use. All you need is import the component than use props to customise it.


## Installation

    npm i react-native-rn-simple-modal
    // expo users
    npx expo install react-native-rn-simple-modal

## Important!!

Make sure that you put the component at the bottom of your other components.

example:

     <>
         //  Your components  
         <View>some other components</View> 
         
         // The component you wanna use for modal
         <OpenDetails //Your props... />
    </>

## Usage

    // import component from the library
    import { openDetails } from "react-native-rn-simple-modal"
    
      // use the component in your code. 
    <OpenDetails
        isOpen={isDetailsOpen} // boolean flag to control visibility
        onToggle={() => setIsDetailsOpen(!isDetailsOpen)} // function to toggle visibility    
        title="Details Title"
        details="This is the detailed information"
       />

## Available props 

**Props:**

-   `isOpen`: Boolean flag to control the visibility of the details overlay.
-   `onToggle`: Function to toggle the visibility of the details overlay.
-   `title`: String to display as the title of the details.
-   `details`: String to display as the detailed information.

**Optional Styling Props:**

-   `bgColor`: Background color for the details view.
-   `detailsColor`: Text color for details.
-   `titleColor`: Text color for title.
-   `closeBtnColor`: Text color for close button.
-   `closeBtnBgColor`: Background color for close button.

## License

  

MIT

  

---

  

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

