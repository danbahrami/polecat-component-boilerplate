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
├── nav-bar
│   ├── index.js
│   ├── nav-bar-component-test.js
│   └── nav-bar-component.js
└── ...
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
├── nav-bar
│   ├── index.js
│   ├── nav-bar-component-test.js
│   └── nav-bar-component.js
└── ...
```

Output:
The output is the same as `rfc` except for the main component file, which will look like this...

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

## License

MIT