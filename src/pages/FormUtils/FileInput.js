import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    let { label, required, options, input, meta } = this.props;
    console.log("input.value");
    console.log(input.value);
    console.log("input.value");
    return (
      <input
        name={input.name}
        type="file"
        value={input.value}
        onChange={this.onChange}
      />
    );
  }
}

export default FileInput;
