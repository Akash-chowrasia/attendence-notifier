const httpHandler = (asyncFn) => {
  return (req, res, next) => asyncFn(req, res, next).catch(next);
};
export default httpHandler;
