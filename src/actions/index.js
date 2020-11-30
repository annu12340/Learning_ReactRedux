export const increment = (param) => {
    return {
        type:'INCREMENT',
        payload:param
    };
};

export const decrement = () => {
    return {
        type:'DECREMENT'
    };
};