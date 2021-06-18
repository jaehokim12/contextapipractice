import React, { createContext, useContext } from 'react';

const AppContext = createContext();
const App = () => {
  const user = {
    nickname: 'danuel',
    isAdmin: true,
  };

  return (
    <AppContext.Provider value={user}>
      <div>
        <Posts />
      </div>
    </AppContext.Provider>
  );
};

const Posts = () => {
  const posts = [
    {
      title: 'userContext',
      content: 'react context를',
    },
  ];
  return <Children posts={posts} />;
};

const Children = (props) => {
  const user = useContext(AppContext);
  const posts = props.posts;

  return (
    <div>
      <h1> {user.nickname}</h1>

      <h2>{posts[0].title}</h2>
    </div>
  );
};

export default App;
