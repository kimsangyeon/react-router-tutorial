# React Router
## react-router-dom

react-router-dom 모듈 사용 tutorial

~~~
$ yarn add react-router-dom
~~~


index.js
```jsx
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
```

<br />

App.js

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile/:name" element={<Profile />} />
  </Route>
  <Route path="/articles" element={<Articles />}>
    <Route path=":id" element={<Article />} />
  </Route>
  <Route path="/login" element={<Login />} />
  <Route path="/mypage" element={<MyPage />} />
  <Route path="*" element={<Notfound />} />
</Routes>
```

<br /><br />
