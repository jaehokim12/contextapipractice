import React, { createContext } from 'react';

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
const PostsContext = createContext();

const Posts = () => {
  const posts = [
    {
      title: 'useContext 알아보기',
      content: '이번 편에서는 React Context를 ...',
    },
  ];

  return (
    <PostsContext.Provider value={posts}>
      <Children />
    </PostsContext.Provider>
  );
};

const Children = () => (
  <AppContext.Consumer>
    {(user) => (
      <PostsContext.Consumer>
        {(posts) => {
          let label = 'user';
          if (user.isAdmin) {
            label = 'admin';
          }

          return (
            <div>
              <div>{label}</div>
              <div>{user.nickname}</div>
              <div>
                {posts.map((post, index) => (
                  <div key={index}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </PostsContext.Consumer>
    )}
  </AppContext.Consumer>
);
