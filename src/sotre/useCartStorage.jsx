import { create } from 'zustand'

const useCartStore = create(set => ({
  cart: [],
  addToCart: item =>
    set(state => {
      const exists = state.cart.find(i => i.name === item.name)
      if (exists) {
        return {
          cart: state.cart.map(i =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          )
        }
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] }
    }),
  removeFromCart: name =>
    set(state => ({
      cart: state.cart.filter(item => item.name !== name)
    })),
  increaseQuantity: name =>
    set(state => ({
      cart: state.cart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    })),
  decreaseQuantity: name =>
    set(state => ({
      cart: state.cart.map(item =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    })),
  clearCart: () => set({ cart: [] })
}))

export default useCartStore
