import React from 'react';

const onInputChangeWithOutImage = (event, input) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
 
  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
   
    const imageObject = new window.Image();
   

    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      input.onChange(imageFile);

      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;
   

  }
};

 const renderFileUploadWithOutImages = ({ input, type, className,label, meta,mimeType }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          name={input.name}
          className={className}
          type={type}
          accept={mimeType}
          onChange={event => onInputChangeWithOutImage(event, input)}
        />
        {meta && meta.invalid && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </div>
    );
  };

  export default renderFileUploadWithOutImages;