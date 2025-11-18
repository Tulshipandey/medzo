'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MapPin, Home, Building, Navigation, Trash2, Edit, Check } from "lucide-react";
import Link from "next/link";
import { useAddress } from "../../context/AddressContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddressPage() {
  const { addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress } = useAddress();
  const router = useRouter();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "home" as "home" | "office" | "other",
    address: "",
    city: "",
    pincode: "",
    phone: "",
    isDefault: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      updateAddress(editingId, formData);
      setEditingId(null);
    } else {
      addAddress(formData);
    }
    
    // Reset form
    setFormData({
      name: "",
      type: "home",
      address: "",
      city: "",
      pincode: "",
      phone: "",
      isDefault: addresses.length === 0, // First address is default
    });
    setShowAddForm(false);
  };

  const handleEdit = (address: any) => {
    setFormData({
      name: address.name,
      type: address.type,
      address: address.address,
      city: address.city,
      pincode: address.pincode,
      phone: address.phone,
      isDefault: address.isDefault,
    });
    setEditingId(address.id);
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this address?")) {
      deleteAddress(id);
    }
  };

  const handleSelectAddress = (id: string) => {
    // Store selected address for checkout
    localStorage.setItem('medswift_selected_address_id', id);
    router.push('/checkout');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "home":
        return <Home className="w-5 h-5 text-blue-600" />;
      case "office":
        return <Building className="w-5 h-5 text-green-600" />;
      default:
        return <MapPin className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Select Delivery Address</h1>

        {/* Saved Addresses */}
        {addresses.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`bg-white rounded-xl shadow-sm p-6 border-2 ${
                  addr.isDefault ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(addr.type)}
                    <span className="font-semibold text-gray-900 capitalize">{addr.name}</span>
                    {addr.isDefault && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Default</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(addr)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(addr.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-1">{addr.address}</p>
                <p className="text-gray-700 mb-1">
                  {addr.city} - {addr.pincode}
                </p>
                <p className="text-gray-600 text-sm mb-4">Phone: {addr.phone}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSelectAddress(addr.id)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Deliver Here
                  </button>
                  {!addr.isDefault && (
                    <button
                      onClick={() => setDefaultAddress(addr.id)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg font-medium hover:border-blue-500 transition-colors"
                    >
                      Set Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add New Address Form */}
        {showAddForm ? (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="e.g., Home, Office"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value="home"
                      checked={formData.type === "home"}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as "home" })}
                      className="w-4 h-4"
                    />
                    <span>Home</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value="office"
                      checked={formData.type === "office"}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as "office" })}
                      className="w-4 h-4"
                    />
                    <span>Office</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value="other"
                      checked={formData.type === "other"}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as "other" })}
                      className="w-4 h-4"
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  rows={3}
                  placeholder="Enter your complete address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Mumbai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="400001"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="default"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="default" className="text-sm text-gray-700">
                  Set as default address
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {editingId ? "Update Address" : "Save Address"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingId(null);
                    setFormData({
                      name: "",
                      type: "home",
                      address: "",
                      city: "",
                      pincode: "",
                      phone: "",
                      isDefault: false,
                    });
                  }}
                  className="px-6 py-3 border-2 border-gray-200 rounded-lg font-semibold hover:border-blue-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full mb-6 px-6 py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition-colors text-gray-700 font-medium"
          >
            + Add New Address
          </button>
        )}

        {/* Use Current Location */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-100">
          <div className="flex items-center space-x-3 mb-4">
            <Navigation className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-gray-900">Use Current Location</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            Allow location access to automatically fill your address
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Detect Location
          </button>
        </div>

        {addresses.length === 0 && !showAddForm && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No addresses saved</h2>
            <p className="text-gray-600 mb-6">Add an address to continue with your order</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add Address
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
