// components/CreateDAOForm/CreateDAOForm.tsx
import React, { useState } from "react";
import { FaUpload, FaImage, FaPlus, FaTimes } from "react-icons/fa";

const CreateDAOForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [backdropFile, setBackdropFile] = useState<File | null>(null);
  const [backdropPreview, setBackdropPreview] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "logo" | "backdrop"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "logo") {
        setLogoFile(file);
      } else {
        setBackdropFile(file);
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "logo") {
          setLogoPreview(e.target?.result as string);
        } else {
          setBackdropPreview(e.target?.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Field is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", {
        ...formData,
        logoFile,
        backdropFile,
      });
      // Handle form submission here
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      description: "",
    });
    setErrors({});
    setLogoFile(null);
    setLogoPreview("");
    setBackdropFile(null);
    setBackdropPreview("");
  };

  return (
    <div className="create-dao-form">
      <div className="form-header">
        <h1>Create DAO</h1>
        <button 
          type="button" 
          className="btn-cancel"
          onClick={handleCancel}
        >
          <FaTimes />
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="dao-form">
        {/* Backdrop Image Section */}
        <div className="form-section">
          <div className="backdrop-upload-section">
            <div className="backdrop-preview">
              {backdropPreview ? (
                <img
                  src={backdropPreview}
                  alt="DAO Backdrop"
                  className="backdrop-image"
                />
              ) : (
                <div className="backdrop-placeholder">
                  <FaImage className="backdrop-icon" />
                  <span>Upload Backdrop Image</span>
                </div>
              )}
              <input
                type="file"
                id="backdrop-upload"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "backdrop")}
                style={{ display: "none" }}
              />
              <label htmlFor="backdrop-upload" className="backdrop-upload-btn">
                <FaUpload />
                Upload Image
              </label>
            </div>
          </div>
        </div>

        {/* Logo and Basic Info Section */}
        <div className="form-section">
          <div className="logo-and-info">
            {/* Logo Upload */}
            <div className="logo-upload-section">
              <div className="logo-preview">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="DAO Logo"
                    className="logo-image"
                  />
                ) : (
                  <div className="logo-placeholder">
                    <FaImage />
                  </div>
                )}
              </div>
              <input
                type="file"
                id="logo-upload"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "logo")}
                style={{ display: "none" }}
              />
              <label htmlFor="logo-upload" className="logo-upload-btn">
                <FaUpload className="upload-icon" />
                Change Logo
              </label>
            </div>

            {/* Name Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Give your DAO a name"
                className={`form-input ${errors.name ? "error" : ""}`}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Give your DAO a description..."
              rows={4}
              className={`form-textarea ${errors.description ? "error" : ""}`}
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>
        </div>

        {/* Submit Section */}
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            <FaPlus />
            Create DAO
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDAOForm;