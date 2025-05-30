"use client";

import Image from "next/image";

const ShoppingCart = ({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
  cartTotal,
}) => {
  if (!isOpen) return null;

  return (
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
      </div>

      {/* Section droite avec le panier */}
      <div className="w-full md:w-1/2 bg-white p-6 overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Votre panier</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-6xl font-light transition-colors hover:scale-110 duration-300 hover:rotate-360 hover:text-red-500"
          >
            ×
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-500">Votre panier est vide</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h3 className="font-medium">{book.title}</h3>
                    <p className="text-gray-600">{book.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(book.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total</span>
                <span className="font-bold">{cartTotal.toFixed(2)} €</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Passer la commande
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
