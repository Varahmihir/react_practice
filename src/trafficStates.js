// src/constants/trafficStates.js
const trafficStates = {
    red: {
        duration: 2000, 
        backgroundColor: "red",
        boxShadow: "0px 0px 20px 4px red",
        next: "green"
    },
    yellow: {
        duration: 500,
        backgroundColor: "yellow",
        boxShadow: "0px 0px 20px 4px yellow",
        next: "red"
    },
    green: {
        duration: 2000,
        backgroundColor: "#01ff01",
        boxShadow: "0px 0px 20px 4px #01ff01",
        next: "yellow"
    }
};
export default trafficStates;
