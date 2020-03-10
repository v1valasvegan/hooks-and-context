const buildFetchUrl = (entity) => {
  const url = new URL(`https://jsonplaceholder.typicode.com/${entity}/`);
  return url.href;
};

const buildPostUrl = (id = null) => {
  const url = id
    ? new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
    : new URL('https://jsonplaceholder.typicode.com/posts');
  return url.href;
};

const makeHash = () => Date.now();

export { makeHash, buildFetchUrl, buildPostUrl };
