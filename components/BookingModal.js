"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const BookingModal = ({
    isOpen,
    onClose,
    selectedServices,
    locationOptions,
    initialDate,
    initialTime,
    address,
    salonName
}) => {
    // 5% Urgent Charge Rate
    const URGENT_CHARGE_RATE = 0.05;

    // State for booking details
    const [bookingType, setBookingType] = useState('pre'); // 'pre' or 'urgent'
    const [date, setDate] = useState(initialDate);
    const [time, setTime] = useState(initialTime);
    const [currentAddress, setCurrentAddress] = useState(address);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset states when modal opens/changes
    useEffect(() => {
        if (isOpen) {
            setDate(initialDate);
            setTime(initialTime);
            setCurrentAddress(address);
            setBookingType('pre'); // Default to Pre-Booking
        }
    }, [isOpen, initialDate, initialTime, address]);

    // Calculate totals, including urgent charges
    const { totalServicesPrice, urgentCharge, totalAmount, hasAtHome, hasAtSalon } = useMemo(() => {
        let servicesTotal = 0;
        let urgentExtra = 0;
        let atHomeExists = false;
        let atSalonExists = false;

        selectedServices.forEach(service => {
            servicesTotal += service.price * service.quantity;
            if (service.type === 'At Home') {
                atHomeExists = true;
            } else if (service.type === 'At Salon') {
                atSalonExists = true;
            }
        });

        // Apply urgent charge only to relevant services
        if (bookingType === 'urgent') {
            selectedServices.forEach(service => {
                const serviceTotal = service.price * service.quantity;
                
                // At Salon Urgent Charge Logic
                if (service.type === 'At Salon') {
                    urgentExtra += serviceTotal * URGENT_CHARGE_RATE;
                } 
                // At Home Urgent Charge Logic
                else if (service.type === 'At Home') {
                    urgentExtra += serviceTotal * URGENT_CHARGE_RATE;
                }
            });
        }

        const tax = servicesTotal * 0.05;
        const finalTotal = servicesTotal + tax + urgentExtra;

        return {
            totalServicesPrice: servicesTotal,
            urgentCharge: urgentExtra,
            totalAmount: finalTotal,
            hasAtHome: atHomeExists,
            hasAtSalon: atSalonExists,
        };
    }, [selectedServices, bookingType]);

    // Determine the primary action button text based on service types and booking type
    const getButtonText = () => {
        if (hasAtHome) {
            // At Home bookings require prior approval
            return "Request Approval & Book";
        }
        // At Salon bookings can be confirmed directly
        return "Pay & Confirm Booking";
    };

    // Handle form submission
    const handleBooking = useCallback(() => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        // --- Booking Logic Here ---

        const bookingDetails = {
            services: selectedServices,
            date,
            time,
            address: currentAddress,
            bookingType, // 'pre' or 'urgent'
            totalAmount: totalAmount.toFixed(2),
            isAtHome: hasAtHome, // If true, it means it's an Approval Request
            isAtSalon: hasAtSalon,
            urgentCharge: urgentCharge.toFixed(2)
        };

        console.log("Submitting Booking Details:", bookingDetails);

        // Simulate API call delay
        setTimeout(() => {
            setIsSubmitting(false);
            
            if (hasAtHome) {
                 alert(`Booking Request for At Home services submitted successfully! \nStatus: Awaiting Approval.`);
            } else {
                 alert(`At Salon Booking confirmed! \nTotal: ₹${totalAmount.toFixed(2)}`);
            }
           
            onClose(); 
        }, 1500);

    }, [selectedServices, date, time, currentAddress, bookingType, totalAmount, hasAtHome, hasAtSalon, urgentCharge, onClose, isSubmitting]);
    
    // UI: The actual Modal JSX
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={onClose} // Close modal when clicking backdrop
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Header */}
                <div className="p-6 border-b flex justify-between items-center bg-[#F6EFE4]">
                    <h2 className="text-2xl font-semibold text-[#617772]">Book Appointment</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        &times;
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Services Confirmation Section */}
                    <h3 className="text-lg font-medium mb-3 text-[#617772]">Confirm Your Services</h3>
                    <div className="space-y-2 mb-4 p-3 bg-gray-50 border rounded-lg">
                        {selectedServices.map((service, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                                <span className="text-gray-700">
                                    {service.name} ({service.type}) x {service.quantity}
                                </span>
                                <span className="font-semibold text-gray-800">
                                    ₹{service.price * service.quantity}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Booking Type Selection */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2 text-[#617772]">Choose Booking Type</h3>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="bookingType"
                                    value="pre"
                                    checked={bookingType === 'pre'}
                                    onChange={() => setBookingType('pre')}
                                    className="form-radio text-[#617772] h-4 w-4"
                                />
                                <span className="text-gray-700">Pre-Booking (Normal Price)</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="bookingType"
                                    value="urgent"
                                    checked={bookingType === 'urgent'}
                                    onChange={() => setBookingType('urgent')}
                                    className="form-radio text-[#617772] h-4 w-4"
                                />
                                <span className="font-bold text-red-600">Urgent Booking (+5%)</span>
                            </label>
                        </div>
                        {bookingType === 'urgent' && (
                            <p className="text-sm text-red-500 mt-1">
                                An extra 5% urgent charge (₹{urgentCharge.toFixed(2)}) is applied to {hasAtHome && hasAtSalon ? 'all' : hasAtHome ? 'At Home' : 'At Salon'} services.
                            </p>
                        )}
                    </div>
                    
                    {/* Date, Time, and Address */}
                    <div className="mb-4 text-sm text-gray-600 space-y-2">
                         <h3 className="text-lg font-medium mb-2 text-[#617772]">Booking Details</h3>
                        <p>
                            <span className="font-semibold">Date & Time:</span> {date} @ {time}
                            <button className="ml-2 text-blue-600 hover:underline" onClick={() => alert("Edit date/time logic goes here")}>
                                (Edit)
                            </button>
                        </p>
                        <p>
                            <span className="font-semibold">Address:</span> {currentAddress}
                            <button className="ml-2 text-blue-600 hover:underline" onClick={() => alert("Edit address logic goes here")}>
                                (Edit)
                            </button>
                        </p>
                    </div>

                    {/* Price Summary */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-medium mb-3 text-[#617772]">Price Summary</h3>
                        <div className="space-y-1 text-gray-700">
                            <div className="flex justify-between">
                                <span>Services Total:</span>
                                <span className="font-semibold">₹{totalServicesPrice}</span>
                            </div>
                            {urgentCharge > 0 && (
                                <div className="flex justify-between text-red-600">
                                    <span>Urgent Charge (5%):</span>
                                    <span className="font-semibold">+ ₹{urgentCharge.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span>Tax (5%):</span>
                                <span className="font-semibold">₹{(totalServicesPrice * 0.05).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-2 border-t mt-2 text-[#617772]">
                                <span>Total Amount:</span>
                                <span>₹{totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer/Action Button */}
                <div className="p-6 border-t bg-gray-50 flex justify-end">
                    <button
                        onClick={handleBooking}
                        disabled={isSubmitting || selectedServices.length === 0}
                        className={`px-8 py-3 rounded-xl text-white font-semibold transition-colors ${
                            isSubmitting || selectedServices.length === 0
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#617772] hover:bg-[#526660]'
                        }`}
                    >
                        {isSubmitting ? 'Processing...' : getButtonText()}
                    </button>
                </div>
                
                {/* Important Note */}
                 {hasAtHome && (
                    <div className="p-4 bg-yellow-100 text-yellow-800 text-sm border-t">
                        <p className="font-medium">Important:</p>
                        <p>
                            Since At Home services are included, this will be submitted as an **Approval Request**. The final booking will be confirmed only after the salon approves.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;

// Mock Data for Demo (Can be used as a placeholder in the parent component)
export const mockServices = [
    { name: 'Girls SPA', type: 'At Home', quantity: 1, price: 800 },
    { name: 'Men\'s hair color', type: 'At Salon', quantity: 1, price: 500 },
];