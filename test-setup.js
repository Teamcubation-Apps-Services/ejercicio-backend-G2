jest.mock('./src/controllers/authController', () => ({
  protect: (_, __, next) => next(),
}));
