
let stateList =  [{
    name: "ASSEMBLED",
    position: 1
},
{
    name: "TESTED",
    position: 2
},
{
    name: "PAINTED",
    position: 3
}];

let initialState = {
    stateList: stateList,
    products: [
        {
            id: 1,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[0].name
        },
        {
            id: 2,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[1].name
        },
        {
            id: 3,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[2].name
        }
    ]
}
export default initialState;