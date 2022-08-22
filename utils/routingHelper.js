export const isPathBlogSection = (path) => {
  return (
    path.match(/(^\/blog$|^\/blog\/.*$)/) && !path.match(/\/blog\/preview/)
  );
};
