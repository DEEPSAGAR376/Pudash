'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Plus, Minus, Trash } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

export function Cart() {
  const { cart, removeFromCart, clearCart, getCartTotal, updateQuantity } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find(item => item.id === id)
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change)
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative bg-transparent hover:bg-transparent">
          <ShoppingCart className="h-5 w-5 text-white" />
          {cart.length > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[540px]">
        <SheetHeader className="space-y-2 pb-4 border-b border-gray-200 dark:border-gray-700">
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your items before checkout
          </SheetDescription>
        </SheetHeader>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-xl font-semibold text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-2">Add some awesome items to your cart!</p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">₹{item.price.toFixed(2)} each</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-100">
                <p>Subtotal</p>
                <p>₹{getCartTotal().toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
            </div>
            <div className="flex flex-col space-y-4 mt-6">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Remove All Items
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

