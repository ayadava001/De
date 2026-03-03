import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { ShoppingBag, Clock, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';
import { menuData } from '../data/menuData';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../components/ui/CartItem';
import { GoldButton } from '../components/ui/GoldButton';
import { ConveyorBelt } from '../components/three/ConveyorBelt';
import { CartBowl } from '../components/three/CartBowl';

export const OrderPage = () => {
  const { cart, addToCart, updateQuantity, removeFromCart, subtotal, tax, deliveryFee, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderType, setOrderType] = useState('delivery');

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 5000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <div className="w-32 h-32 mx-auto mb-8 text-gold">
            <CheckCircle2 size={128} strokeWidth={1} />
          </div>
          <h1 className="text-4xl font-serif mb-4">Order <span className="text-gold italic">Confirmed</span></h1>
          <p className="text-cream/60 mb-8">
            Your culinary journey has begun. Our chefs are preparing your masterpiece. Estimated arrival in 45 minutes.
          </p>
          <GoldButton onClick={() => setIsOrdered(false)} className="w-full">
            Back to Home
          </GoldButton>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* 3D Visualizer */}
      <div className="h-[300px] relative mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />
            <Suspense fallback={null}>
              <group position={[0, -0.5, 0]}>
                <ConveyorBelt />
                <group position={[3, 1, 0]}>
                  <CartBowl itemCount={cart.length} />
                </group>
              </group>
              <Environment preset="warehouse" />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Menu Selection */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif">Select <span className="text-gold italic">Items</span></h2>
              <div className="flex bg-white/5 rounded-full p-1">
                <button 
                  onClick={() => setOrderType('delivery')}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${orderType === 'delivery' ? 'bg-gold text-dark font-bold' : 'text-cream/60'}`}
                >
                  Delivery
                </button>
                <button 
                  onClick={() => setOrderType('pickup')}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${orderType === 'pickup' ? 'bg-gold text-dark font-bold' : 'text-cream/60'}`}
                >
                  Pickup
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.map((item) => (
                <div key={item.id} className="glass p-4 flex gap-4 items-center group">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-grow">
                    <h3 className="text-gold font-serif text-lg">{item.name}</h3>
                    <p className="text-xs text-cream/60 mb-2">${item.price}</p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="text-[10px] uppercase tracking-widest font-bold text-gold hover:text-cream transition-colors"
                    >
                      + Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass p-8 rounded-3xl border-gold/20">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <ShoppingBag className="text-gold" />
                <h2 className="text-xl font-serif">Order Summary</h2>
              </div>

              <div className="max-h-[400px] overflow-y-auto mb-8 no-scrollbar">
                <AnimatePresence mode="popLayout">
                  {cart.length === 0 ? (
                    <p className="text-center text-cream/40 py-10 italic">Your cart is empty</p>
                  ) : (
                    cart.map((item) => (
                      <CartItem 
                        key={item.id} 
                        item={item} 
                        onUpdate={updateQuantity} 
                        onRemove={removeFromCart} 
                      />
                    ))
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-cream/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-cream/60">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-cream/60">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gold pt-4 border-t border-white/10">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs text-cream/60">
                  <Clock size={14} className="text-gold" />
                  <span>Est. Time: 35-45 mins</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-cream/60">
                  <MapPin size={14} className="text-gold" />
                  <span>123 Culinary Avenue, NY</span>
                </div>
              </div>

              <GoldButton 
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
                className="w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
