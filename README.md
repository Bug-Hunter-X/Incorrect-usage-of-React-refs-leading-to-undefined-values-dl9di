# Incorrect React Ref Usage
This example demonstrates a common error when using refs in React. The ref is incorrectly accessed before the input element has been rendered and attached to the DOM.

## Bug
The `handleClick` function attempts to access `this.inputRef.current.value` immediately upon clicking the button. However, at that moment, the ref's `current` property is still `null` because the input element hasn't had a chance to mount yet.  This leads to an error when trying to access `.value`.

## Solution
The corrected code ensures that the ref is accessed only after the component has fully rendered and the ref has been populated with the DOM element.