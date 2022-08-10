export default {
  async send(req, res, next) {
    try {
      res.json({
        status: 200,
        message: "success",
        licensePlate: req?.query?.licensePlate || 'not found',
        shouldOpen: (Math.floor(Math.random() * 10) % 2) == 0 ? 1 : 0
      });
    } catch (err) {
      console.error("send: ", err);
      next(err);
    }
  },
};
