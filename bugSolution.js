```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    // Correct: Check if ref.current exists before accessing
    if (this.inputRef.current) {
      console.log(this.inputRef.current.value);
    } else {
      console.log('Input element not yet rendered');
    }
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