const data = [
  {
    id: "1",
    question: "What is React?",
    answer:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.",
  },
  {
    id: "2",
    question: "How does React work?",
    answer:
      "React creates a virtual DOM in memory, which represents the DOM. When the state of an object changes, React first changes the object in the virtual DOM. Then, the React Diffing algorithm compares the updated virtual DOM with a pre-update version and only applies the actual changes to the real DOM.",
  },
  {
    id: "3",
    question: "What is a Component in React?",
    answer:
      "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a JavaScript class or function that accepts inputs (props) and returns a React element that describes how a section of the UI should appear.",
  },
  {
    id: "4",
    question: "What are Props in React?",
    answer:
      "Props (short for properties) are a way of passing data from parent to child components in React. They are read-only and help to create dynamic and interactive components by enabling single components to be used with different data.",
  },
  {
    id: "5",
    question: "What is State in React?",
    answer:
      "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.",
  },
  {
    id: "6",
    question: "What is the use of useEffect Hook in React?",
    answer:
      "The useEffect Hook lets you perform side effects in function components. It is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount in class components, allowing you to run some code when your component mounts, updates, or unmounts.",
  },
];

export default data;
