import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { Package, PackageStatus } from '../../types/package';

interface AddPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newPackage: Package) => void;
}

const INITIAL_FORM_STATE = {
  name: '',
  destination: '',
  duration: '',
  price: '',
  type: '',
  status: 'draft' as PackageStatus,
};

/**
 * AddPackageModal component.
 * Features a controlled form with basic validation.
 */
export const AddPackageModal: React.FC<AddPackageModalProps> = ({ 
  isOpen, 
  onClose, 
  onAdd 
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Package name is required';
    if (!formData.destination) newErrors.destination = 'Destination is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.price || isNaN(Number(formData.price))) newErrors.price = 'Valid price is required';
    if (!formData.type) newErrors.type = 'Category is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newPackage: Package = {
        id: `pkg-${Date.now()}`,
        name: formData.name,
        destination: formData.destination,
        duration: formData.duration,
        price: Number(formData.price),
        currency: 'USD',
        status: formData.status,
        type: formData.type,
        description: 'New package added via dashboard.', // Placeholder description
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80', // Default placeholder
      };
      
      onAdd(newPackage);
      setFormData(INITIAL_FORM_STATE);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Package"
      description="Fill in the details below to add a new travel package to the system."
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create Package</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Package Name"
          placeholder="e.g., Luxury Maldives Escape"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Destination"
            placeholder="e.g., Male, Maldives"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            error={errors.destination}
          />
          <Input
            label="Category"
            placeholder="e.g., Luxury"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            error={errors.type}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Duration"
            placeholder="e.g., 4 Nights / 5 Days"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            error={errors.duration}
          />
          <Input
            label="Price (USD)"
            placeholder="e.g., 1200"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            error={errors.price}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Initial Status</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="status" 
                checked={formData.status === 'draft'} 
                onChange={() => setFormData({ ...formData, status: 'draft' })}
                className="accent-primary"
              />
              <span className="text-sm">Draft</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="status" 
                checked={formData.status === 'active'} 
                onChange={() => setFormData({ ...formData, status: 'active' })}
                className="accent-primary"
              />
              <span className="text-sm">Active</span>
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
};
