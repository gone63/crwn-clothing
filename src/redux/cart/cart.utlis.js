export const AddItemToCart = (cartItems, currentItem) => {
  const existingItem = cartItems.find((item) => item.id === currentItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === currentItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...currentItem, quantity: 1 }];
};

export const RemoveItemFromCart = (cartItems, currentItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== currentItem.id);
};

export const DecreaseQuantityForItem = (cartItems, currentItem) => {
  return cartItems.reduce((accumilator, cartItem) => {
    if (cartItem.id === currentItem.id) {
      if (cartItem.quantity !== 1) {
        return accumilator.concat({
          ...cartItem,
          quantity: cartItem.quantity - 1,
        });
      } else return accumilator;
    }
    return accumilator.concat({ ...cartItem });
  }, []);
};
