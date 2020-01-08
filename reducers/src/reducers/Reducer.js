export const initialState = [
    {
    todo: "clean",
    completed: false,
    id: 1
},
{
    todo: "cleana",
    completed: false,
    id: 2
}
];



export const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            const actionVar = [...state,
                {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                } ]

            console.log({actionVar}, "action")

            return actionVar;
        case "COMPLETED":
            return { ...state, completed: true };
        default:
            return state;
    };

}