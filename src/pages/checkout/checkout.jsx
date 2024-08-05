import React from 'react';

const Checkout = () => {
    return (
        <div className="w-[80%] m-auto items-center flex flex-col md:flex-row justify-between p-8">
            {/* Billing Details Section */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                <form className="w-[90%] space-y-4 bg-white rounded-lg shadow-md p-[35px]">
                    <div>
                        <label className="block mb-1" htmlFor="first-name">First name</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="first-name" name="first-name" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="last-name">Last name</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="last-name" name="last-name" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="street-address">Street address</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="street-address" name="street-address" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="apartment">Apartment, floor, etc. (optional)</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="apartment" name="apartment" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="city">Town/City</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="city" name="city" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="phone">Phone number</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="email">Email address</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="save-info" className="mr-2" />
                        <label htmlFor="save-info">Save this information for faster check-out next time</label>
                    </div>
                </form>
            </div>

            {/* Order Summary Section */}
            <div className=" w-full  md:w-1/3 md:mt-0">
                <div className="border p-4 rounded">
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <span>LCD Monitor</span>
                            <span>$650</span>
                        </div>
                        <div className="flex justify-between">
                            <span>H1 Gamepad</span>
                            <span>$1100</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>$1750</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>$1750</span>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex items-center mb-2">
                        <input type="radio" id="bank" name="payment-method" className="mr-2" />
                        <label htmlFor="bank">Bank</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="cod" name="payment-method" className="mr-2" defaultChecked />
                        <label htmlFor="cod">Cash on delivery</label>
                    </div>
                </div>

                <div className="mt-4">
                    <input type="text" placeholder="Coupon Code" className="w-full p-2 border border-gray-300 rounded mb-2" />
                    <button className="w-full bg-red-500 text-white p-2 rounded">Apply</button>
                </div>

                <button className="w-full bg-red-500 text-white p-4 rounded mt-4">Place Order</button>
            </div>
        </div>
    );
}

export default Checkout;
