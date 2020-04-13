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
