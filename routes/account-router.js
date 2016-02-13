var mock_account_1 = require("./mock-account");
function account(req, res) {
    res.status(200).send(mock_account_1.ACCOUNT);
}
exports.account = account;
;

//# sourceMappingURL=account-router.js.map
