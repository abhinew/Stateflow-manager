
let stateList =  [{
    name: "Design",
    position: 1
},
{
    name: "Assembled",
    position: 2
},
{
    name: "Painted",
    position: 3
},
{
    name: "Tested",
    position: 4
}];

let initialState = {
    stateList: stateList,
    products: [
        {
            id: 1,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[0]
        },
        {
            id: 2,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[2]
        },
        {
            id: 3,
            image_url: "https://picsum.photos/200/300",
            currentState: stateList[2]
        }
    ]
}
export default initialState;