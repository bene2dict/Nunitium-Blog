// ImageUpload.jsx
import  { useEffect, useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

// eslint-disable-next-line react/prop-types
const ImageUpload = ({ cloudName, uploadPreset, publicId, setPublicId, setImageUrl }) => {
  // Use a ref to ensure the widget is created only once
  const widgetRef = useRef(null);

  // Widget configuration
  const uwConfig = {
    cloudName,
    uploadPreset,
    multiple: false,
    sources: ["local", "url", "camera"],
  };

  useEffect(() => {
    // Only create the widget once
    if (!widgetRef.current) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            setPublicId(result.info.public_id);
            setImageUrl(result.info.secure_url);
          }
        }
      );
    }
  }, [cloudName, uploadPreset, setPublicId, setImageUrl, uwConfig]);

  // Open the widget when the user clicks the button
  const openWidget = () => {
    widgetRef.current.open();
  };

  // Create a Cloudinary instance for image transformation and preview
  const cld = new Cloudinary({ cloud: { cloudName } });

  return (
    <div>
      {publicId && (
        <div
          className="image-preview"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "20px auto",
          }}
        >
          <AdvancedImage
            style={{ maxWidth: "100%" }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
      <button onClick={openWidget} className="cloudinary-button">Upload Image</button>
    </div>
  );
};

export default ImageUpload;
