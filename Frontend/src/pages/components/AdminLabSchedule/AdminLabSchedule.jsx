// import React, { useState } from "react";
// import ht from "../../assets/hitman.jpeg";

// function ImageUpload() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <main className="h-screen bg-gray-100 flex items-center justify-center">
     
//       <img src={ht}></img>
//     </main>
//   );
// }

// export default ImageUpload;
import React, { useState } from "react";
// import finaltt from "../../assets/semlabtt.jpeg";
import Header from "../ComplainAdmin/ComplainAdmin";
import Footer from "../Footer/Footer";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
    <Header />
      {/* Header */}

      {/* <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">Lab Schedule</h1>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Display Image */}
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="rounded-lg shadow-lg max-w-full max-h-[500px] object-contain"
            />
          ) : (
            <img
              //src={semlabtt}
              alt="Default Image"
              className="rounded-lg shadow-lg max-w-full max-h-[500px] object-contain"
            />
          )}

          {/* File Input */}
          <div className="mt-4">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md shadow-lg font-semibold transition duration-300"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-blue-600 text-white py-2 text-center shadow-md">
        <p className="text-sm">@ I am your personal computer lab assistant</p>
      </footer> */}
      <Footer/>
    </div>
  );
}

export default ImageUpload;
