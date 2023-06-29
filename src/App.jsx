const apiRoot = import.meta.env.VITE_API_ROOT;
import { createContext, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';
import PostsLayout from './layouts/PostsLayout';
import CommentsLayout from './layouts/CommentsLayout';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/posts/Posts';
import CreatePost from './pages/posts/CreatePost';
import PostDetails from './pages/posts/PostDetails';
import EditPost from './pages/posts/EditPost';
import DeletePostCheck from './pages/posts/DeletePostCheck';
import Comments from './pages/comments/Comments';
import CommentDetails from './pages/comments/CommentDetails';
import CommentEdit from './pages/comments/CommentEdit';

// loaders
import { postsLoader } from './loaders/postsLoader';
import { postDetailsLoader } from './loaders/postDetailsLoader';
import { commentsLoader } from './loaders/commentsLoader';
import { commentDetailsLoader } from './loaders/commentDetailsLoader';

// actions
import { loginAction } from './actions/loginAction';
import { newPostAction } from './actions/newPostAction';
import { editPostAction } from './actions/editPostAction';
import { deletePostAction } from './actions/deletePostAction';

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setUser(null);
        localStorage.clear();
        return;
      }

      const response = await fetch(apiRoot + '/profile', {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });

      const data = await response.json();

      if (!data.user) {
        setUser(null);
        localStorage.clear();
        return;
      }

      const userString = JSON.stringify(data.user);
      localStorage.setItem('user', userString);
      setUser(data.user);
    };

    getUser();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<PostsLayout />}>
          <Route index element={<Posts />} loader={postsLoader} />
          <Route path='new' element={<CreatePost />} action={newPostAction} />
          <Route
            path=':postId'
            element={<PostDetails />}
            loader={postDetailsLoader}
          />
          <Route
            path=':postId/edit'
            element={<EditPost />}
            loader={postDetailsLoader}
            action={editPostAction}
          />
          <Route
            path=':postId/delete'
            element={<DeletePostCheck />}
            loader={postDetailsLoader}
            action={deletePostAction}
          />
          <Route path=':postId/comments' element={<CommentsLayout />}>
            <Route index element={<Comments />} loader={commentsLoader} />
            <Route
              path=':commentId'
              element={<CommentDetails />}
              loader={commentDetailsLoader}
            />
            <Route
              path=':commentId/edit'
              element={<CommentEdit />}
              loader={commentDetailsLoader}
            />
          </Route>
        </Route>
        <Route path='login' element={<Login />} action={loginAction} />
      </Route>
    )
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
