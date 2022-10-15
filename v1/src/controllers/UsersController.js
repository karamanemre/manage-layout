const { insert, list, loginUser } = require("../services/UsersService");
const httpStatus = require("http-status");
const {
  passwordToHash,
  generatAccessToken,
  generatRefreshToken,
} = require("../scripts/utils/helper");

const create = (req, res) => {
  const cryptedPassword = passwordToHash(req.body.password);
  req.body.password = cryptedPassword;
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
      if (!user) {
        res.status(httpStatus.NOT_FOUND).send({ message: "NOT_FOUND" });
        return;
      }

      user = {
        ...user.toObject(),
        tokens: {
          access_token: generatAccessToken(user),
          refresh_token: generatRefreshToken(user),
        },
      };

      delete user.password;
      res.status(httpStatus.OK).send(user);
    })
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const getList = (req, res) => {
  list()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((err) => {
      res.status(httpStatus.NOT_FOUND).send(res);
    });
};

module.exports = {
  getList,
  create,
  login,
};
