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
import CreateComment from './pages/comments/CreateComment';
import CommentDetails from './pages/comments/CommentDetails';
import EditComment from './pages/comments/EditComment';
import DeleteCommentCheck from './pages/comments/DeleteCommentCheck';

// loaders
import { userLoader } from './loaders/userLoader';
import { postsLoader } from './loaders/postsLoader';
import { postDetailsLoader } from './loaders/postDetailsLoader';
import { commentsLoader } from './loaders/commentsLoader';
import { commentDetailsLoader } from './loaders/commentDetailsLoader';

// actions
import { loginAction } from './actions/loginAction';
import { newPostAction } from './actions/newPostAction';
import { editPostAction } from './actions/editPostAction';
import { deletePostAction } from './actions/deletePostAction';
import { newCommentAction } from './actions/newCommentAction';
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
              <Route index element={<Posts />} loader={postsLoader} />
              <Route
                path='new'
                element={<CreatePost />}
                action={newPostAction}
              />
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
                  path='new'
                  element={<CreateComment />}
                  action={newCommentAction}
                />
                <Route
                  path=':commentId'
                  element={<CommentDetails />}
                  loader={commentDetailsLoader}
                />
                <Route
                  path=':commentId/edit'
                  element={<EditComment />}
                  loader={commentDetailsLoader}
                  action={editCommentAction}
                />
                <Route
                  path=':commentId/delete'
                  element={<DeleteCommentCheck />}
                  loader={commentDetailsLoader}
                  action={deleteCommentAction}
                />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='login' element={<Login />} action={loginAction} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
