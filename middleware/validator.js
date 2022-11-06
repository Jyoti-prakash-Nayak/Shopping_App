const {check,validationResult}=require('express-validator');

exports.signupValidator=[
    check('username').not().isEmpty().trim().withMessage('All fields require'),
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('password').isLength({min:6}).withMessage('Password must be 6 char length')
];

exports.signinValidator=[
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('password').isLength({min:6}).withMessage('Password must be 6 char length')
];

exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors) {
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        });

        // console.log('hasErrors: ', hasErrors);
        // console.log('result: ', result);
    }
    next();
}