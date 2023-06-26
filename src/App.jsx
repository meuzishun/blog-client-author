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
import Posts from './pages/posts/Posts';
import CreatePost from './pages/posts/CreatePost';
import PostDetails from './pages/posts/PostDetails';
import PostEdit from './pages/posts/PostEdit';
import Comments from './pages/comments/Comments';
import CommentDetails from './pages/comments/CommentDetails';
import CommentEdit from './pages/comments/CommentEdit';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<PostsLayout />}>
          <Route index element={<Posts />} />
          <Route path='new' element={<CreatePost />} />
          <Route path=':postId' element={<PostDetails />} />
          <Route path=':postId/edit' element={<PostEdit />} />
          <Route path=':postId/comments' element={<CommentsLayout />}>
            <Route index element={<Comments />} />
            <Route path=':commentId' element={<CommentDetails />} />
            <Route path=':commentId/edit' element={<CommentEdit />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
