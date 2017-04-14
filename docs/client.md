## Client Documentation
#### Based Libraries
We recommended to be knowledge with the following libraries :
* axios
* react-redux
* redux-promise
* redux-form
* react-router
* styled-components
* immutable-js

### Workflow

The example application is a simple service which give you options to view create and delete posts.
This documentation guide you how to develop with the basic tools for client side, like how to add new component, container etc...
* [link](#component)
* [link](#coreComponent)
* [link](#coreComponent)
* [link](#coreComponent)
* [link](#coreComponent)
* [link](#coreComponent)

#### `Components`<a name="component"></a>
Soon

#### `Core Components`<a name="coreComponent"></a>
Core Components under `( components/core/ )`,
include your custom basic components that serve your application.
for example: myInput,  myTextarea, myH1 etc..
Those components created by you and most the time wrap the basic html5 elements with your design and additional elements.
Any core component is wrapp with `createField`.
`createField` convert your component to Filed from `redux-form`, this useful when you use your components inside `Form Container`.
If you use `createField` your component be able to get the follwoing data:
`meta: { touched, error, warning }, input`
this data provide you the information that send from `Form Container` and can serve you for validations and more...

##### Create Core Component by cli
```
$ gulp createCoreComponent MyCoreComponent
```
##### create your component manualy
1. Add new folder with the component name to `( components/core/ )`.
2. Create `index.js` file. this is the place to write your component code.
3. Export your component path inside `( Components/core/index.js )`
4. Now you can import the component from core: `import { Input } from '../../components/core';`

#### Example Code
```JSX
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField } from '../../../utiles'

const component = ({ meta: { touched, error, warning }, input, type, label }) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {error}
            </div>
        </div>
    );

};

export default createField(component, {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
});
```

#### `Containers`
Soon

#### `Form Containers`
Soon

#### `Actions`
Soon

#### `Reducers`
Soon

#### `Api`
Soon
