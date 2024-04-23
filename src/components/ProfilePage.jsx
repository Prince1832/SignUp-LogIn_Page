import React, { useState } from 'react';
import './ProfilePage.css';
import { TbCameraPlus } from "react-icons/tb";


const ProfilePage = ({ user }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setImageFile(e.target.result);
  };

  const defaultProfileImageUrl = './src/grey.png';
  const grayBackgroundImageUrl = 'https://via.placeholder.com/150';

  return (
    <div className="container">

      <div className="profile-page">
        <span>Account settings</span>
        <hr />
        <h5>{user?.username}</h5>
        <p>{user?.email}</p>
        <div className="image-container">
          <img
            src={imageFile || user?.profileImage || defaultProfileImageUrl || grayBackgroundImageUrl}
            alt=""
            className={imageFile || user?.profileImage ? 'circular-image' : 'gray-background-image'}
          />
        </div>

        <button className="image-input" onClick={() => document.getElementById('imageInput').click()}>
          <TbCameraPlus />
        </button>
        <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
        <div className="metter">
          PopX is constantly evolving to meet your needs, and we're excited to share the latest updates with you. Stay tuned for exciting announcements, special offers, and exclusive content curated just for you.

          As always, if you have any questions or feedback, don't hesitate to reach out to our support team. We're here to ensure your experience is nothing short of exceptional.
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

