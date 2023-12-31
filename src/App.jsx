import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import ProtectedLayout from './layouts/ProtectedLayout';
import RootLayout from './layouts/RootLayout';
import PostsLayout from './layouts/PostsLayout';
// import CommentsLayout from './layouts/CommentsLayout';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import LoginError from './pages/LoginError';
import Posts from './pages/posts/Posts';
import PostsError from './pages/posts/PostsError';
import CreatePost from './pages/posts/CreatePost';
import PostDetails from './pages/posts/PostDetails';
import EditPost from './pages/posts/EditPost';
import DeletePostCheck from './pages/posts/DeletePostCheck';
import PostError from './pages/posts/PostError';
import CommentDetails from './pages/comments/CommentDetails';
import EditComment from './pages/comments/EditComment';
import DeleteCommentCheck from './pages/comments/DeleteCommentCheck';
import CommentError from './pages/comments/CommentError';
import NotFound from './pages/NotFound';

// loaders
import { userLoader } from './loaders/userLoader';
import { postsLoader } from './loaders/postsLoader';
import { postDetailsLoader } from './loaders/postDetailsLoader';
import { commentDetailsLoader } from './loaders/commentDetailsLoader';

// actions
import { loginAction } from './actions/loginAction';
import { postActions } from './actions/postActions';
import { newPostAction } from './actions/newPostAction';
import { togglePublication } from './actions/togglePublishAction';
import { editPostAction } from './actions/editPostAction';
import { deletePostAction } from './actions/deletePostAction';
import { editCommentAction } from './actions/editCommentAction';
import { deleteCommentAction } from './actions/deleteCommentAction';

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
              <Route
                path=':postId'
                element={<PostDetails />}
                loader={postDetailsLoader}
                action={postActions}
                errorElement={<PostError />}
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
              <Route
                path=':postId/comments/:commentId'
                element={<CommentDetails />}
                loader={commentDetailsLoader}
                errorElement={<CommentError />}
              />
              <Route
                path=':postId/comments/:commentId/edit'
                element={<EditComment />}
                loader={commentDetailsLoader}
                action={editCommentAction}
              />
              <Route
                path=':postId/comments/:commentId/delete'
                element={<DeleteCommentCheck />}
                loader={commentDetailsLoader}
                action={deleteCommentAction}
              />
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
