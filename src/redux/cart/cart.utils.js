export const addItemToCart = (currentItems, newItem) => {
  const itemExists = currentItems.find(
    (currentItem) => currentItem.id === newItem.id
  );
  if (itemExists) {
    return currentItems.map((currentItem) =>
      currentItem.id === newItem.id
        ? { ...currentItem, quantity: currentItem.quantity + 1 }
        : currentItem
    );
  } else {
    return [...currentItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromCart = (currentItems, itemId) => {
  return currentItems.filter((item) => item.id !== itemId);
};

export const decreaseCartItemQuantity = (currentItems, item) => {
  const cartItem = currentItems.find(
    (currentItem) => currentItem.id === item.id
  );
  if (cartItem) {
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    return updatedItem.quantity === 0
      ? removeItemFromCart(currentItems, item.id)
      : currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: currentItem.quantity - 1 }
            : currentItem
        );
    //: [...currentItems, updatedItem];
  }
};
