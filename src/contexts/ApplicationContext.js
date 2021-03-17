import { createContext, useContext, useReducer } from 'react'

// My own little redux
// It's a snapshot/blueprint of what our state is gonna look like. We're defining our state here
const INITIAL_STATE = {
    items: [
        {
            "id": 4,
            "price": 12.00,
            "name": "MidSummer's Night",
            "ingredients": [
                "musk",
                "patchoull",
                "sage",
                "mahogany cologne"
            ],
            "category": "woody"
        },
        {
            "id": 5,
            "price": 12.00,
            "name": "Pink Sands",
            "ingredients": [
                "vanilla",
                "musk"
            ],
            "category": "floral"
        }
    ],
    counter: 0,
    total: 0
}

// This is where we're managing our state
// State is the object that holds our application's state. 
// The action has two things: {type: "TEMP", payload: anything (could be an object, an id, a string, etc)}
// Payload is always something you're trying to put in the state to change it
const reducer = (state, action) => {
    console.log("From reducer: ", state);
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.payload }
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] }
        case "REMOVE_ITEM":
            const itemID = action.payload;
            const removeItem = () => {
                for (let i = 0; i < state.items.length; i++) {
                    if (+state.items[i].id === +itemID) {
                        state.total = state.total - state.items[i].price
                        state.items.splice(i, i);
                        return i;
                    }
                }
            }
            removeItem();
            // console.log(removeItem);
            return { ...state };
        case "TOTAL":
            return { ...state, total: action.payload };
        default:
            throw new Error("state doesnt exist")
    }
}

// A way for us to manage what is available in our context and to share with AppContext's descendants

const toggleTheme = () => console.log("Toggling theme");

const useAppState = () => {
    if (typeof window !== "undefined") {
        console.log("This is from useAppState", sessionStorage, Object.keys(sessionStorage))
    }
    // useReducer returns an array of two things: [state, dispatch]
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return { state, dispatch, toggleTheme };
}

const AppContext = createContext();

const AppContextProvider = props => {
    return (
        // Provider is what gives access to the context
        <AppContext.Provider value={{ ...useAppState() }}>
            {/* Any direct child and descendant below get access to what is passed in the value attribute. 
            props.children will get access to the useAppState */}
            {props.children}
        </AppContext.Provider>
    )
}

// A nice clean alias. It allows us to access context in class components. We're probably not gonna use it because we're using
// functional components but you never know
const AppContextConsumer = AppContext.Consumer;

// Making our context available through functional components using a custom hook
const useAppContext = () => useContext(AppContext);

// Then we just export everything
export {
    AppContext,
    AppContextProvider,
    AppContextConsumer,
    useAppContext
}