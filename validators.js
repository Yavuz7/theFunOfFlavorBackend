const { body, param, validationResult } = require("express-validator");

//Validation Setup from: https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    return next();
  }
};

//Solution might be silly I'm unsure yet
const idParamValidation = (ID) => {
  return [
    param(`${ID}`)
      .isInt()
      .withMessage(`${ID} is not an integer`)
      .not()
      .isEmpty(),
  ];
};

module.exports = {
  validate,
  idParamValidation,
};
