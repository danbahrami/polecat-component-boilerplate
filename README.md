# React Custom Properties

A command line tool for creating React component boilerplates in Polecat.

## Install

To get started install globally via npm

```
npm install -g danbahrami/polecat-component-boilerplate
```

You now have two new global global commands `rfc` and `rcc`.

## Usage

The usage for each command has the syntax `cmd [options] <path> <name>`.

`<path>` is where you would like to create your component boilerplate.
`<name>` is what you want to call your component (e.g. `NavBar`).

### rfc
"rfc" stands for "React Functional Component" and it creates the boilerplate for a stateless functional component.

Example:
Create a `NavBar` component boilerplate in the current directory...
```
$ rfc . NavBar

Boilerplate created for NavBar:
.
├── ...
├── index.js
├── nav-bar-component-test.js
└── nav-bar-component.js
```

Output:
<details>
  <summary>index.js</summary>

  ```
  import NavBar from './nav-bar-component';

  export default NavBar;

  ```
</details>

<details>
  <summary>nav-bar-component-test.js</summary>

  ```
  import { describeComponent } from 'test';
  import NavBar from './nav-bar-component';

  describeComponent(NavBar, subject => {
    beforeEach(() => {

    });

    it('', () => {

    });

    describe('', () => {

    });
  });

  ```
</details>

<details>
  <summary>nav-bar-component.js</summary>

  ```
  import React, { PropTypes } from 'react';

  const NavBarComponent = (props) => {
    return (
      <div/>
    );
  };

  NavBarComponent.propTypes = {};

  export default NavBarComponent;

  ```
</details>

### rcc
"rcc" stands for "React Class Component" and it creates the boilerplate for a stateful ES6 class component.

Example:
Create a `NavBar` component boilerplate in the current directory...
```
$ rcc . NavBar

Boilerplate created for NavBar:
.
├── ...
├── index.js
├── nav-bar-component-test.js
└── nav-bar-component.js
```

Output:
The output is the same as `rfc` except for the main component file.

<details>
  <summary>index.js</summary>

  ```
  import NavBar from './nav-bar-component';

  export default NavBar;

  ```
</details>

<details>
  <summary>nav-bar-component-test.js</summary>

  ```
  import { describeComponent } from 'test';
  import NavBar from './nav-bar-component';

  describeComponent(NavBar, subject => {
    beforeEach(() => {

    });

    it('', () => {

    });

    describe('', () => {

    });
  });

  ```
</details>

<details>
  <summary>nav-bar-component.js</summary>

  ```
  import React, { Component, PropTypes } from 'react';

  class NavBarComponent extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div/>
      );
    }
  }

  NavBarComponent.propTypes = {};

  export default NavBarComponent;

  ```
</details>

### options

- `-s --styled` - includes a `...-style.scss` file and imports it from the main component
- `-c --connected` - includes a Redux connector and exports it as the default export in `index.js`

## Full example
```
$ rfc -cs . NavBar

Boilerplate created for NavBar:
.
├── ...
├── index.js
├── nav-bar-component-test.js
├── nav-bar-component.js
├── nav-bar-connector-test.js
├── nav-bar-connector.js
└── nav-bar-style.scss
```

Output:

<details>
  <summary>index.js</summary>

  ```
  import NavBar from './nav-bar-connector';

  export default NavBar;

  ```
</details>

<details>
  <summary>nav-bar-component-test.js</summary>

  ```
  import { describeComponent } from 'test';
  import NavBar from './nav-bar-component';

  describeComponent(NavBar, subject => {
    beforeEach(() => {

    });

    it('', () => {

    });

    describe('', () => {

    });
  });

  ```
</details>

<details>
  <summary>nav-bar-component.js</summary>

  ```
  import React, { Component, PropTypes } from 'react';
  import styles from './nav-bar-style.scss';

  class NavBarComponent extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div/>
      );
    }
  }

  NavBarComponent.propTypes = {};

  export default NavBarComponent;

  ```
</details>

<details>
  <summary>nav-bar-connector-test.js</summary>

  ```
  import { describeComponent, createMockStore } from 'test';
  import NavBarConnector from './nav-bar-connector';
  import NavBar from './nav-bar-component';

  describeComponent(NavBarConnector, subject => {
    let store;

    beforeEach(() => {
      store = createMockStore();
    });

    it('', () => {

    });

    describe('', () => {

    });
  });

  ```
</details>

<details>
  <summary>nav-bar-connector.js</summary>

  ```
  import React from 'react';
  import { connect } from 'react-redux';
  import NavBar from './nav-bar-component';

  const mapStateToProps = (stateProps, ownProps) => {};

  const mapDispatchToProps = (dispatchProps, ownProps) => {};

  const mergeProps = (stateProps, dispatchProps, ownProps) => {};

  const NavBarConnector = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  )(NavBar);

  export default NavBarConnector;

  ```
</details>

<details>
  <summary>nav-bar-style.scss</summary>

  ```
  :local() {
    
  }

  ```
</details>

## License

MIT