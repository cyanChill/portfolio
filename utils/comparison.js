export const isPathBlogSection = (path) => {
  return (
    path.match(/(^\/blog$|^\/blog\/.*$)/) && !path.match(/\/blog\/preview/)
  );
};

export const isSimilarArrObj = (arr1, arr2) => {
  return arr1.every((el1) => {
    return arr2.some((el2) => el1._id === el2._id);
  });
};
