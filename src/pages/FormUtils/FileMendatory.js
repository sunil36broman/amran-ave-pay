import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Table,
  BreadcrumbItem,
  Breadcrumb,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// FILE UPLOAD START
const defaultProps = {
  previewLogoUrl: "https://imgplaceholder.com/400x300",
  mimeType: "image/jpeg, image/png",
  mimeType2: "image/jpeg, image/png",
  mimeType3: "pdf",
  maxWeight: 500,
  maxWidth: 500,
  maxHeight: 500,
};
const validateImageWeight = (imageFile) => {
  if (imageFile && imageFile.size) {
    // Get image size in kilobytes
    const imageFileKb = imageFile.size / 1024;
    const { maxWeight } = defaultProps;
    if (imageFileKb > maxWeight) {
      return `Image size must be less or equal to ${maxWeight}kb`;
    }
  }
};
const validateImageWidth = (imageFile) => {
  if (imageFile) {
    const { maxWidth } = defaultProps;
    if (imageFile.width > maxWidth) {
      return `Image width must be less or equal to ${maxWidth}px`;
    }
  }
};
const validateImageHeight = (imageFile) => {
  if (imageFile) {
    const { maxHeight } = defaultProps;
    if (imageFile.height > maxHeight) {
      return `Image height must be less or equal to ${maxHeight}px`;
    }
  }
};
const validateImageFormat = (imageFile) => {
  if (imageFile) {
    const { mimeType } = defaultProps;
    if (!mimeType.includes(imageFile.type)) {
      return `Image mime type must be ${mimeType}`;
    }
  }
};

const fileValueRequired = (imageFile) => {
  if (imageFile) {
    const { mimeType } = defaultProps;
    if (!mimeType.includes(imageFile.type)) {
      return `File value required`;
    }
  }
};

const handlePreview = (imageUrl, uid) => {
  const previewImageDom = document.querySelector("." + uid);
  console.log("imageUrl", imageUrl);
  console.log("imageUrl", uid);
  //previewImageDom.src = imageUrl;
};

const handleChangeUpload = (event, input, uid, value, data) => {
  console.log("data.src");
  // if (data[input.name] != undefined) {
  //   console.log(data[input.name].src);
  // }

  event.preventDefault();
  let imageFile = event.target.files[0];
  console.log("data.src====================", imageFile);

  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
    const imageObject = new window.Image();
    console.log("imageObject.src====================", imageFile);
    console.log("imageObject.src====================", localImageUrl);
    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      imageFile.src = localImageUrl;
      input.onChange(imageFile);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;

    handlePreview(localImageUrl, uid);
  }
};

const handleChangeUploadOther = (event, input, uid, value, data) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
    console.log("other1", localImageUrl);
    console.log("other1", imageFile);
    let newvalue = { value: imageFile, src: localImageUrl, fileType: "pdf" };
    input.onChange(newvalue);
    newvalue = {};
    const imageObject = new window.Image();
    console.log("other2", imageObject);
    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      imageFile.src = localImageUrl;
      input.onChange(localImageUrl);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;

    handlePreview(localImageUrl, uid);
  }
};

// const handleChangeUpload = (event, input, uid) => {
//   event.preventDefault();

//   let imageFile = event.target.files[0];
//   // const formData = new FormData();
//   // formData.append("distributor_photo", imageFile);
//   // console.log("formData", formData);
//   let reader = new FileReader();
//   reader.readAsDataURL(imageFile);
//   //reader.readAsBinaryString(imageFile);

//   reader.onload = (e) => {
//     const basefour = reader.result;
//     console.log("karim", basefour);
//     // const basefour2 = Base64.decode(basefour);
//     // console.log("karim2", basefour2);
//     if (imageFile) {
//       const localImageUrl = URL.createObjectURL(imageFile);
//       const imageObject = new window.Image();
//       imageObject.onload = () => {
//         imageFile.width = imageObject.naturalWidth;
//         imageFile.height = imageObject.naturalHeight;
//         //imageFile.src = reader.result;

//         input.onChange(imageFile);
//         URL.revokeObjectURL(imageFile);
//       };
//       imageObject.src = localImageUrl;
//       handlePreview(localImageUrl, uid);
//     }
//   };
// };

const FileMendatory = ({
  input,
  type,
  className,
  label,
  data,
  meta,
  mimeType,
  value,
  allFromvalues,
  field,
}) => {
  return (
    <React.Fragment>
      <FormGroup row>
        <Label
          htmlFor="example-text-input"
          className="text-right filter-color"
          sm="4"
        >
          {label}<span className="text-danger"> *</span>
        </Label>
        <Col sm="8">
          <input
            name={input.name}
            className={className}
            type={type}
            accept={mimeType}
            // onChange={(event) =>
            //   handleChangeUpload(event, input, input.name, value, data)
            // }
            onChange={(event) => {
              // handleChangeUpload(event, input, input.name, value, data)
              console.log("file type", event.target.files[0].type);
              const { mimeType2, mimeType3 } = defaultProps;
              if (mimeType2.includes(event.target.files[0].type)) {
                console.log(
                  "file type image er vitore",
                  event.target.files[0].type
                );
                handleChangeUpload(event, input, input.name, value, data);
              } else {
                console.log(
                  "file type image er bairee pdf",
                  event.target.files[0].type
                );
                //return input.onChange(event.target.files[0]);
                handleChangeUploadOther(event, input, input.name, value, data);
              }
            }}
          />
          {meta.touched && meta.error && (
            <span className="text-danger">{meta.error}</span>
          )}

          {data != undefined &&
          data[input.name] != undefined &&
          data[input.name].fileType === "pdf" ? (
            <span>{data[input.name].value.name}</span>
          ) : (
            ""
          )}

          {data != undefined &&
          data[input.name] != undefined &&
          !data[input.name].hasOwnProperty("fileType") ? (
            <img
              alt="preview"
              className={input.name}
              style={{ height: "300px", objectFit: "cover" }}
              src={data[input.name].src}
            />
          ) : (
            ""
          )}
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

// FILE UPLOAD END
const handlePreviewnnn = (imageUrl, uid, childrenName) => {
  const previewImageDom = document.querySelector("." + childrenName);
  console.log("imageUrl", imageUrl);
  console.log("imageUrl", uid);
  //previewImageDom.src = imageUrl;
};

const handleChangeUploadOthernnn = (
  event,
  input,
  uid,
  value,
  data,
  childrenName
) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
    console.log("other1", localImageUrl);
    console.log("other1", imageFile);
    let newvalue = { value: imageFile, src: localImageUrl, fileType: "pdf" };
    input.onChange(newvalue);
    newvalue = {};
    const imageObject = new window.Image();
    console.log("other2", imageObject);
    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      imageFile.src = localImageUrl;
      input.onChange(localImageUrl);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;

    handlePreviewnnn(localImageUrl, uid, childrenName);
  }
};

const handleChangeUploadnnn = (
  event,
  input,
  uid,
  value,
  data,
  childrenName
) => {
  console.log("data.src");
  // if (data[input.name] != undefined) {
  //   console.log(data[input.name].src);
  // }

  console.log("data.src");
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    const localImageUrl = URL.createObjectURL(imageFile);
    const imageObject = new window.Image();
    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      imageFile.src = localImageUrl;
      // imageFile.fileType='jpg';
      input.onChange(imageFile);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;

    handlePreviewnnn(localImageUrl, uid, childrenName);
  }
};

const renderFileUploadNominee = ({
  input,
  type,
  className,
  label,
  childrenName,
  parentId,
  parentName,
  parentNameType,
  data,
  meta,
  mimeType,
  value,
  allFromvalues,
  field,
}) => {
  return (
    <React.Fragment>
      <FormGroup row>
        <Label
          htmlFor="example-text-input"
          sm="4"
          className="text-right filter-color"
        >
          {label}
        </Label>
        <Col sm="8">
          <input
            // accept=".png,.jpeg,.pdf"
            name={input.name}
            className={className}
            type={type}
            // accept={mimeType}
            onChange={(event) => {
              // handleChangeUpload(event, input, input.name, value, data)
              console.log("file type", event.target.files[0].type);
              const { mimeType2, mimeType3 } = defaultProps;
              if (mimeType2.includes(event.target.files[0].type)) {
                console.log(
                  "file type image er vitore",
                  event.target.files[0].type
                );
                handleChangeUploadnnn(
                  event,
                  input,
                  input.name,
                  value,
                  data,
                  childrenName
                );
              } else {
                console.log(
                  "file type image er bairee pdf",
                  event.target.files[0].type
                );
                //return input.onChange(event.target.files[0]);
                handleChangeUploadOthernnn(
                  event,
                  input,
                  input.name,
                  value,
                  data,
                  childrenName
                );
              }
            }}
          />
          {/* {meta && meta.invalid && meta.error && (
            <span className="text-danger">{meta.error}</span>
          )} */}

          {meta.touched && meta.error && (
            <span className="text-danger">{meta.error}</span>
          )}

          {data[parentName][parentId][parentNameType] != undefined &&
          data[parentName][parentId][parentNameType] != undefined &&
          data[parentName][parentId][parentNameType].fileType === "pdf" ? (
            <span>{data[parentName][parentId][parentNameType].value.name}</span>
          ) : (
            ""
          )}

          {data[parentName][parentId][parentNameType] != undefined &&
          data[parentName][parentId][parentNameType] != undefined &&
          !data[parentName][parentId][parentNameType].hasOwnProperty(
            "fileType"
          ) ? (
            <img
              alt="preview"
              className={childrenName}
              style={{ height: "300px", objectFit: "cover" }}
              src={data[parentName][parentId][parentNameType].src}
            />
          ) : (
            ""
          )}
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};
// FILE UPLOAD END
// FILE UPLOAD END

export {
  renderFileUploadNominee,
  FileMendatory,
  validateImageWeight,
  validateImageWidth,
  validateImageHeight,
  validateImageFormat,
  fileValueRequired,
};
