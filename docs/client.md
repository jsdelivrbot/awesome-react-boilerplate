## Client Documentation
### Based Libraries
We recommended to be knowledge with the following libraries :
* <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>
* <a href="https://github.com/reactjs/react-redux" target="_blank">react-redux</a>
* <a href="https://github.com/acdlite/redux-promise" target="_blank">redux-promise</a>
* <a href="http://redux-form.com/6.6.3/" target="_blank">redux-form</a>
* <a href="https://www.npmjs.com/package/redux-form-field" target="_blank">redux-form-field</a>
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
* [requests](#requests)
* [Actions](#actions)
* [Reducers](#reducers)
* [Api](#api)
* [Utiles](#utiles)

<br/>

## <a name="component"></a>`Components`

Components, not much to say, here your components `( components/ )` or in other words `dump components`,
it means that the component is not connect to `redux` and relay only on `props`.

We recommended to use arrow function for better performance,
But you can also use React Component.

<br/>

> **Component Name** - cli automatically inject `Dmb_` prefix to your component.
this best practice to use prefix name to components to recognize them inside containers.

### Create Core Component by cli
```
$ gulp createComponent --name MyComponent
```
### create your component manualy
```markdown
1) Go to `component/` folder and add your own component. add `Dmb_` prefix to the component name.
```

<br/>

## <a name="coreComponent"></a>`Core Components`

Core Components under `( components/core/ )`,
include your custom basic components that serve your application.

For example: myInput,  myTextarea, myH1 etc..
Those components created by you and most the time wrap the basic html5 elements with your design and additional elements.

Any core component is wrapp with `createField`.<br/>
`createField` convert your component to Filed from `redux-form`, this useful when you use your components inside `Form Container`.<br/>

If you use `createField` your component be able to get the follwoing data:<br/>
`meta: { touched, error, warning }, input` <br/>
this data provide you the information that send from `Form Container` and can serve you for validations and more...

<br/>

> **Core Component Name** - cli automatically inject `Cor_` prefix to your core component.
this best practice to use prefix name to core components to recognize them inside containers.

### Create Core Component by cli
```
$ gulp createCoreComponent --name MyCoreComponent
```
### create your component manualy
```markdown
1) Add new folder with the component name to `( components/core/ )`.
2) Create `index.js` file. this is the place to write your component code.
3) Export your component path inside `( Components/core/index.js )`. add `Cor_` prefix to the component name.
4) Now you can import the component from core: `import { Input } from '../../components/core';`
```

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
<br/>

## <a name="styledComponent"></a>`Styled Components`

Soon

<br/>

## <a name="containers"></a>`Containers`

Soon

<br/>

## <a name="formContainers"></a>`Form Containers`

Soon

<br/>

## <a name="requests"></a>`requests`

Use Requests `( utiles/requests.js )` to call apis in action right before you send it to reducers.
Requests is async, Although , you can use it **like it is sync function** right before return type and action.

We prefer encapsulate all the requests via one file `( requests.js )`.
That's give the control to decied what happen to any request.

For example, if you want to show loading spinner on any request, or show general server error if occured on the server.

### request parameters
```markdown
1) config - The standart config from axios.
2) successHandler [OPTIONAL] - Callback function that get `response`. 
3) errorHandler [OPTIONAL] - Same as successHandler but for errors
```

See more example how to redirect after submit with `successHandler` in [Form Containers](#formContainers).

#### Example Code
```JSX
export function createPost(props, sucessHandler, errorHandler) {
    const response = request({
        method: 'post',
        url: POSTS_URL,
        data: props,
        params: {key: API_KEY}
    }, sucessHandler, errorHandler);

    return {
        type: CREATE_POST,
        payload: response
    }
}
```

<br/>

## <a name="actions"></a>`Actions`

Actions are the place to create the calls to api or just change some state.
In the follwoing files you declare about teh actions types and export them.

Create Actions files for each container is the best practice.

Declare `actions types` under `( /actions_types.js )`.
```JSX
export const UPDATE_MYSTATE = 'UPDATE_MYSTATE';
```

Declare `actions types` under `( /actions_myActions.js )`.
```JSX
export function updateSomeState (state) {
    return {
        type: UPDATE_MYSTATE,
        payload: state
    };
}
```

<br/>

> **actions file names** - cli automaticly add your actions files to `/actions/myActionsName/`.
It added 2 files `actions_types` and `actions_myActionsName`. 
`actions_` prefix added automatically

### Create actions files by cli
```
$ gulp createActionFiles --name myActionsName
```
### create your actions files manualy
```markdown
1) Go to `actions/` folder and add your own folder with given name (lowercase first).
2) Add 2 files: 

* actions_types.js
* actions_myActionsName.js
```

<br/>

## <a name="reducers"></a>`Reducers`

Reducer is the place to manipulate your states `( reducers/ )`.
We use `immutableJS` to do that. This library have a crazy performance for change objects.
I recommended you to learn how it work even if you are not going to use it.

`index.js` - Here we combine our reducer to redux.

### Create Core Component by cli
```
$ gulp createReducer --name myReducer --store storeName
```
### create your component manualy
```markdown
1) Add new folder with the name of the reducer inside `/reducers/` folder.
2) Add new .js file with prefix reducer_ and then the name of the reducer ( same to the folder name )
3) Export your reducer from the file in stage 2.
4) Combine your reducer with the rest inside `reducers/index.js`
```

> **Reducers Name** - cli automatically inject `reducer__` prefix to your reducer.
We also recommended to use same name to the actions.
For example reducer_myName, actions_myName. (cli do it automatically when you create container with cli)

#### `index.js` Example Code
```JSX
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './posts/reducer_posts';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostReducer
});

export default rootReducer;
```

#### `reducer_myReducer` Example Code
```JSX
import { fromJS } from 'immutable';
import { FETCH_POSTS } from '../../actions/posts/actions_types';

const INITIAL_STATE = fromJS({
    all: [], 
    post: null
});

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
            
        case FETCH_POSTS:
            return state.set('all', action.payload.data );

        default:
            return state;
            
    }
}
```

<br/>

## <a name="api"></a>`Api`

Inside `api/index.js` you can define all the roots to your apis.
This is not mandatory to use this file, you can add this where ever you want,
but with my experince i prefer all the roots apis to be in one place.


### Add api decleratio manualy
```markdown
1) Go to `api/index.js` and add your new declaration.
```

#### Example Code
```JSX
export const REDUXBLOG_ROOT_URL = 'https://www.google.co.il';
```

<br/>

## <a name="utiles"></a>`Utiles`

Simple to understand. just add here all your general functions that can serv you entire the application.



