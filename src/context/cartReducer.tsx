export const totalItem = (cart: any) => {
  return cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
};

export const totalPrice = (cart: any) => {
  return cart.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0,
  );
};

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.item];

    case "remove":
      return state.filter((p: any) => p.id !== action.id);

    case "increase":
      return state.map((p: any) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p,
      );

    case "decrease":
      return state.map((p: any) =>
        p.id === action.id ? { ...p, quantity: p.quantity - 1 } : p,
      );

    default:
      return state;
  }
};

export default cartReducer;
