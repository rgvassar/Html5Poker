var mock_tables_1 = require("./mock-tables");
function tables(req, res) {
    res.status(200).send(mock_tables_1.TABLES);
}
exports.tables = tables;
;

//# sourceMappingURL=table-router.js.map
