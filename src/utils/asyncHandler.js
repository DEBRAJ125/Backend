const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
  
// const asyncHandlerWithError = (fn) => async(req, res, next) => {
// try{
//     await fn(req, res, next);
// } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error: error.message });
//     success: false
//     message: error.message
// }
// };

export default asyncHandler;