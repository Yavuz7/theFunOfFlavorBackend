const { body, query, param, validationResult } = require("express-validator");

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
//So to have more generic validators I generate arrays,
//and then need to seperate them when using them for middleware
//It's kind of messy actually so I may change it
//But I think it will help a bit for some of the more
//Tedious or repetitive validations
//May split up validators to different files for routes if theres too many
const paramIntValidation = (ID) => {
  return [
    param(`${ID}`).notEmpty().isInt().withMessage(`${ID} is not an integer`),
  ];
};

//For offset variable in search
const queryIntValidation = (key) => {
  return [
    query(`${key}`).notEmpty().isInt().withMessage(`${key} is not an integer`),
  ];
};

//  const { StepID, UserID, SuggestionText } = req.body;
//Query for suggestions
const bodyIntValidation = (key) => {
  return [
    body(`${key}`).notEmpty().isInt().withMessage(`${key} is not an integer`),
  ];
};

const bodyTextValidation = (key) => {
  return [
    body(`${key}`)
      .notEmpty()
      .isAlphanumeric("en-US", { ignore: " " })
      .withMessage("Only letters and numbers are allowed."),
  ];
};

module.exports = {
  validate,
  paramIntValidation,
  queryIntValidation,
  bodyIntValidation,
  bodyTextValidation,
};
