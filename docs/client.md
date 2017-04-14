## Client Documentation
### Based Libraries
We recommended to be knowledge with the following libraries :
* <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>
* <a href="https://github.com/reactjs/react-redux" target="_blank">react-redux</a>
* <a href="https://github.com/acdlite/redux-promise" target="_blank">redux-promise</a>
* <a href="http://redux-form.com/6.6.3/" target="_blank">redux-form</a>
* <a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a>
* <a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a>
* <a href="https://facebook.github.io/immutable-js/" target="_blank">immutableJS</a>

### Workflow

The example application is a simple service which give you options to view create and delete posts.
This documentation guide you how to develop with the basic tools for client side, like how to add new component, container etc...
* [Components](#component)
* [Core Components](#coreComponent)
* [Styled Components](#styledComponent)
* [Containers](#containers)
* [Form Containers](#formContainers)
* [Actions](#actions)
* [Reducers](#reducers)
* [Api](#api)
* [Utiles](#utiles)

#### <a name="component"></a>`Components`
Components, not much to say, here your components `( components/ )` or in other words `dump components`,
it means that the component is not connect to `redux` and relay only on `props`.
We recommended to use arrow function for better performance,
But youc an also use React Component.
<br/>
> **Component Name** - cli automaticly inject `cor.` prefix to your component.
this best practice to use prefix name to components to recognize them inside containers.

##### Create Core Component by cli
```
$ gulp createComponent --name MyComponent
```
##### create your component manualy
1. Go to `component/` folder and add your own component.


#### <a name="coreComponent"></a>`Core Components`
Core Components under `( components/core/ )`,
include your custom basic components that serve your application.
for example: myInput,  myTextarea, myH1 etc..
Those components created by you and most the time wrap the basic html5 elements with your design and additional elements.
Any core component is wrapp with `createField`.
`createField` convert your component to Filed from `redux-form`, this useful when you use your components inside `Form Container`.
If you use `createField` your component be able to get the follwoing data:
`meta: { touched, error, warning }, input`
this data provide you the information that send from `Form Container` and can serve you for validations and more...
<br/> 
> **Core Component Name** - cli automaticly inject `cor.` prefix to your core component.
this best practice to use prefix name to core components to recognize them inside containers.

##### Create Core Component by cli
```
$ gulp createCoreComponent --name MyCoreComponent
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
import { createField } from 'redux-form-field';

const component = ({ meta: { touched, error, warning }, input, type, label }) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && error}
            </div>
        </div>
    );

};

export default createField(component, {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
});
```

#### <a name="styledComponent"></a>`Styled Components`
Soon

#### <a name="containers"></a>`Containers`
Soon

#### <a name="formContainers"></a>`Form Containers`
Soon

#### <a name="actions"></a>`Actions`
Soon

#### <a name="reducers"></a>`Reducers`
Soon

#### <a name="api"></a>`Api`
Inside `api/index.js` you can define all the roots to your apis.
This is not mandatory to use this file, you can add this where ever you want,
but with my experince i prefer all the roots apis to be in one place.

##### Add api decleratio manualy
1. Go to `api/index.js` and add your new declaration.

#### Example Code
```JSX
export const REDUXBLOG_ROOT_URL = 'https://www.google.co.il';
```

#### <a name="utiles"></a>`Utiles`
Soon


