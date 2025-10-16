"use client";

import Image from "next/image";
import { X, Trash2, ShoppingBag, CreditCard } from "lucide-react";

const ShoppingCart = ({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
  cartTotal,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex">
        {/* Section gauche avec Jovanocat */}
        <div className="hidden md:block w-1/2 h-screen relative bg-gradient-to-br from-blue-50 to-gray-100">
          <Image
            src="/miki.jpg"
            alt="Jovanocat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
        </div>

        {/* Section droite avec le panier */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white via-blue-50/10 to-white overflow-y-auto shadow-2xl">
          <div className="p-8">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-2xl shadow-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Votre panier</h2>
                  <p className="text-sm text-gray-600">
                    {cart.length} {cart.length > 1 ? 'articles' : 'article'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-2xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">Votre panier est vide</p>
                <p className="text-gray-600">Ajoutez des livres pour commencer vos achats</p>
              </div>
            ) : (
              <>
                {/* Liste des articles */}
                <div className="space-y-4 mb-8">
                  {cart.map((book) => (
                    <div
                      key={book.id}
                      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600">
                            {book.price}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(book.id)}
                          className="p-2.5 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 group"
                        >
                          <Trash2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total et commande */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 shadow-2xl border border-blue-500/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <div className="relative">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-blue-100">Total</span>
                      <span className="text-3xl font-black text-white">
                        {cartTotal.toFixed(2)} €
                      </span>
                    </div>

                    <button className="w-full bg-white text-blue-700 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 group">
                      <CreditCard className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      Passer la commande
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
