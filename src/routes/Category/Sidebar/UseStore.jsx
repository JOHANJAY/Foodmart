import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addProduct: (product) => {
    const { cart } = get();

    // Check if product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Update quantity if the product already exists
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      set({ cart: updatedCart });
      console.log("Updated cart:", updatedCart);
    } else {
      // Add new product with its quantity
      const newCart = [...cart, { ...product, quantity: product.quantity }];
      set({ cart: newCart });
      console.log("New cart:", newCart);
    }
  },

  removeProduct: (productId) => {
    const { cart } = get();
    const updatedCart = cart.filter((item) => item.id !== productId);
    set({ cart: updatedCart });
    console.log("Product removed, new cart:", updatedCart);
  },

  clearCart: () => set({ cart: [] }),

  totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));

export default useCartStore;
