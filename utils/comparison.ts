export const isPathBlogSection = (path: string) => {
  return (
    path.match(/(^\/blog$|^\/blog\/.*$)/) && !path.match(/\/blog\/preview/)
  );
};

type MongoObjType = {
  _id: string;
  [x: string]: any;
};

export const isSimilarArrObj = (arr1: MongoObjType[], arr2: MongoObjType[]) => {
  return arr1.every((el1) => {
    return arr2.some((el2) => el1._id === el2._id);
  });
};
