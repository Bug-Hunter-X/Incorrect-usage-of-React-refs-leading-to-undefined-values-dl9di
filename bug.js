```javascript
// Wrong usage of refs. The ref is attached to the component, not the input element.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    // Wrong: this.inputRef.current.value will be undefined
    console.log(this.inputRef.current.value); 
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Log Value</button>
      </div>
    );
  }
}
```