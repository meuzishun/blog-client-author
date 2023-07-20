# Blog Client-Author

This repository is part of a Blog App project completed for partial fulfillment of the curriculum of [The Odin Project](https://www.theodinproject.com/). The project is made up of a backend [API](https://en.wikipedia.org/wiki/API) and two frontend [SPA](https://en.wikipedia.org/wiki/Single-page_application)s. See below for live links and other repositories:

- Click [here](https://meuzishun.github.io/blog-client-author/) for the live site for this repository
- Click [here](https://github.com/meuzishun/blog-api) for the API repository
- Click [here](https://github.com/meuzishun/blog-client) for the Client repository and [here](https://meuzishun.github.io/blog-client/) for the live site

## Overview

This frontend app was built with React and Vite (as opposed to `create-react-app`). The main features of the code worth documenting are:

1. the use of `createBrowserRouter` and `createRoutesFromElements` from `react-router-dom` v6
2. the `useFetcher` hook
3. a custom style library

These features are outlined below.

## `createBrowserRouter` and `createRoutesFromElements`

### Paths and Elements

With the new version of `react-router-dom`, Route components can be given path and element props. These Route elements can be nested and passed into `createRoutesFromElement` (as opposed to creating an array). The result of `createRoutesFromElements` along with an optional object setting the baseline url are passed into `createBrowserRouter` and set as the router in the `RouterProvider` component.

```js
// App.jsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import layouts and pages for element prop...

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='posts' element={<PostsLayout />}>
              <Route index element={<Posts />} />
              <Route path='new' element={<CreatePost />} />
              <Route path=':postId' element={<PostDetails />} />
              <Route path=':postId/edit' element={<EditPost />} />
              <Route path=':postId/delete' element={<DeletePostCheck />} />
              <Route
                path=':postId/comments/:commentId'
                element={<CommentDetails />}
              />
              <Route
                path=':postId/comments/:commentId/edit'
                element={<EditComment />}
              />
              <Route
                path=':postId/comments/:commentId/delete'
                element={<DeleteCommentCheck />}
              />
            </Route>
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </>
    ),
    { basename: '/blog-client-author' }
  );

  return <RouterProvider router={router} />;
}
```

### Loaders and Actions

Route components can also be given loader and action functions.

```js
// App.jsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import layouts and pages...

// loaders
import { userLoader } from './loaders/userLoader';
import { postsLoader } from './loaders/postsLoader';
// other loaders...

// actions
import { loginAction } from './actions/loginAction';
import { newPostAction } from './actions/newPostAction';
import { togglePublication } from './actions/togglePublishAction';
// other actions...

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedLayout />} loader={userLoader}>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='posts' element={<PostsLayout />}>
              <Route
                index
                element={<Posts />}
                loader={postsLoader}
                action={togglePublication}
                errorElement={<PostsError />}
              />
              <Route
                path='new'
                element={<CreatePost />}
                action={newPostAction}
              />
              // other Routes...
            </Route>
          </Route>
        </Route>
        <Route
          path='login'
          element={<Login />}
          action={loginAction}
          errorElement={<LoginError />}
        />
        <Route path='*' element={<NotFound />} />
      </>
    ),
    { basename: '/blog-client-author' }
  );

  return <RouterProvider router={router} />;
}
```

Loader functions are helpful for API calls needed for content.

```js
import { useLoaderData } from 'react-router-dom';

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <div>
      <h3>Posts</h3>
      <div className='container'>
        {posts.map((post) => {
          // jsx for each post...
        })}
      </div>
    </div>
  );
}
```

Action functions are helpful for form submissions (using the `Form` component from `react-router-dom`).

```js
import { Form } from 'react-router-dom';

export default function CreatePost() {
  return (
    <div className='container'>
      <h3>Create a new post</h3>
      <Form method='post' action='/posts/new'>
        // form components...
      </Form>
    </div>
  );
}
```

## useFetcher Hook

The `useFetcher` hook allows re-rendering a component in the route without re-rendering the entire route. Checking the formData early allows for [optimistic UI](https://reactrouter.com/en/main/start/tutorial#optimistic-ui).

```js
// PostDetails.jsx

import { useLoaderData, useFetcher } from 'react-router-dom';

export default function PostDetails() {
  const { post } = useLoaderData();
  const fetcher = useFetcher();

  let isPublished = post.isPublished;
  if (fetcher.formData && fetcher.formData.get('post-id') === post._id) {
    isPublished = fetcher.formData.get('isPublished') === 'true';
  }

  return (
    <div className='container'>
      <h3>{post.title} </h3>
      <p>{post.content}</p>
      <div>
        // other links...
        <fetcher.Form method='post' action={`/posts/${post._id}`}>
          <input name='form-id' hidden defaultValue='publish' />
          <input name='post-id' hidden defaultValue={post._id} />
          <button name='isPublished' value={isPublished ? 'false' : 'true'}>
            {isPublished ? 'Unpublish' : 'Publish'} Post
          </button>
        </fetcher.Form>
      </div>
      // more component content...
    </div>
  );
}
```

### fetcher.Form actions

If multiple actions are needed on a single route, creating a single action with multiple conditionals can be a solution:

```js
// postActions.js

import { API_URI } from '../api_uri';

export const postActions = async ({ request, params }) => {
  const formData = await request.formData();
  const formId = formData.get('form-id');

  if (formId === 'publish') {
    // publish actions...
  }

  if (formId === 'action2') {
    // action 2
  }

  console.log('Not finding a post action...');
  return null;
};
```

## Style Library

The bulk of this style library comes from a [Net Ninja YouTube tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb). The basic idea is to use [Sass](https://sass-lang.com/) to 'pre-create' a bunch of common styling declarations inside abbreviated class names. These declarations can be quite short (e.g. `margin-left: 10px`) or much longer as with traditional CSS styling. HTML elements can then be styled by adding several class names which feels similar to (but is **not** the same as) inline CSS.

### Imports and Exports

Exporting happens automatically with Sass. The `@import` syntax can import rules into other files. An index file is used to store the other files but the order matters. If file 'B' depends on rules from file 'A', file 'B' needs to be imported _after_ file 'A':

```scss
// lib/index.scss

// variables & functions
@import 'functions';
@import 'variables';

// base & layout
@import 'base';
@import 'breakpoints';
@import 'grid';

// colors
@import 'colors';

// components (button, card, navbar)
@import 'components/card';
@import 'components/button';
@import 'components/navbar';
@import 'components/badge';
@import 'components/form';

// utilities (margin, padding, opacity)
@import 'utilities';
```

### Variables

Store values in variables only requires `$` to prepend the variable name. Adding `!default` to the end of the value allows overriding:

```scss
$primary: #326dee !default;
$secondary: #1ac888 !default;
$error: #d32752 !default;
$info: #f6c31c !default;
```

Maps can be used as well:

```scss
$colors: (
  'primary': $primary,
  'secondary': $secondary,
  'error': $error,
  'info': $info,
  'blue': #1919e6,
  'red': #e61919,
  'yellow': #e6e619,
  'green': #19e635,
  'orange': #ffa600,
  'purple': #9900ff,
  'gray': #808080,
  'black': black,
  'white': white,
);

.test-btn {
  background-color: map-get($colors, 'purple');
}
```

### Grid System

Style libraries usually have some sort of grid system to handle responsive layouts:

```scss
@use 'sass:math';

$grid-columns: 12;
$grid-gaps: (
  '0': 0,
  '1': 10px,
  '2': 20px,
  '3': 30px,
);
$layout-values: flex-start, flex-end, center, space-between, space-around;

// base layout classes
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.row {
  display: flex;
  flex-flow: row wrap;
}

// grid gaps
@each $key, $val in $grid-gaps {
  .gap-#{$key} > * {
    padding: $val;
  }
  .gap-#{$key} {
    margin-left: -$val;
    margin-right: -$val;
  }
}

// justify content classes
@each $val in $layout-values {
  .justify-#{$val} {
    justify-content: $val;
  }
}

// col classes
@include xs {
  @for $i from 1 through $grid-columns {
    .col-#{$i}-xs {
      box-sizing: border-box;
      flex-grow: 0;
      width: math.div($i * 100%, $grid-columns);
    }
  }
}
@include sm {
  @for $i from 1 through $grid-columns {
    .col-#{$i}-sm {
      box-sizing: border-box;
      flex-grow: 0;
      width: math.div($i * 100%, $grid-columns);
    }
  }
}
// etc.
```

### Colors

With looping and conditional features in Sass, a variety of common coloring needs can be generated easily:

```scss
@each $key, $val in $colors {
  .text-#{$key} {
    color: $val;
  }

  .text-hover-#{$key} {
    &:hover {
      color: $val;
    }
  }

  .bg-#{$key} {
    background-color: $val;
  }

  @if ($val != black and $val != white) {
    // light variations
    @for $i from 1 through 9 {
      .text-#{$key}-light-#{$i} {
        color: mix(white, $val, $i * 10%);
      }
      .text-hover-#{$key}-light-#{$i} {
        &:hover {
          color: mix(white, $val, $i * 10%);
        }
      }
      .bg-#{$key}-light-#{$i} {
        background-color: mix(white, $val, $i * 10%);
      }
    }

    // dark variations
    @for $i from 1 through 9 {
      .text-#{$key}-dark-#{$i} {
        color: mix(black, $val, $i * 10%);
      }
      .text-hover-#{$key}-dark-#{$i} {
        &:hover {
          color: mix(black, $val, $i * 10%);
        }
      }
      .bg-#{$key}-dark-#{$i} {
        background-color: mix(black, $val, $i * 10%);
      }
    }
  }
}
```

### Utilities

This utilities file generates many style declarations for padding, margin, etc. These declarations are abbreviated so they can be quickly added via a short class name:

```scss
@use 'sass:math';

$utilities: (
  'padding': (
    'prefix': 'p',
    'values': (
      '0': 0,
      '1': $base-padding,
      '2': $base-padding * 2,
      '3': $base-padding * 4,
      '4': $base-padding * 6,
      '5': $base-padding * 8,
    ),
  ),
  'margin': (
    'prefix': 'm',
    'values': (
      '0': 0,
      '1': $base-margin,
      '2': $base-margin * 2,
      '3': $base-margin * 4,
      '4': $base-margin * 6,
      '5': $base-margin * 8,
    ),
  ),
  'opacity': (
    'prefix': 'o',
    'values': (
      '10': 0.1,
      '20': 0.2,
      '30': 0.3,
      '40': 0.4,
      '50': 0.5,
      '60': 0.6,
      '70': 0.7,
      '80': 0.8,
      '90': 0.9,
      '100': 1,
    ),
  ),
  'display': (
    'prefix': 'display',
    'values': (
      'n': none,
      'b': block,
      'f': flex,
      'i': inline,
      'i-b': inline-block,
    ),
  ),
  'font-size': (
    'prefix': 'font',
    'values': (
      'xs': $font-size-xs,
      'sm': $font-size-sm,
      'md': $base-font-size,
      'lg': $font-size-lg,
      'xl': $font-size-xl,
      'xxl': $font-size-xxl,
    ),
  ),
);

// generate utility classes
@each $property, $map in $utilities {
  $prefix: map-get($map, 'prefix');
  $values: map-get($map, 'values');

  @each $k, $v in $values {
    @if ($k == 'default') {
      .#{$prefix} {
        #{$property}: $v;
      }
    } @else {
      .#{$prefix}-#{$k} {
        #{$property}: $v;
      }
    }
  }
}
```

Using Sass in React is actually quite easy. Install the `sass` package as a dev dependency and include it in the `main.jsx` file:

```bash
npm install --save-dev sass
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
