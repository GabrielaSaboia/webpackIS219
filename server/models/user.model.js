'user strict';

const dbConn = require('../config/db2.config');
// city object create
const user = () => {
    this.fName = user.fName;
    this.lName = user.lName;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;

};
user.create = (newUser, result) => {
    dbConn.query('INSERT INTO tblUsersImport set ?', newUser, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
user.findById = (id, result) => {
    dbConn.query('Select * from tblUsersImport where id = ? ', id, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
user.findAll = (result) => {
    dbConn.query('Select * from tblUsersImport', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('citys : ', res);
            result(null, res);
        }
    });
};
user.update = (id, result) => {
    dbConn.query('UPDATE tblUsersImport SET fName=?,lName=?,username=?,password=?,email=? WHERE id = ?', [user.fName, user.lName, user.username, user.password, user.email, id], (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
user.delete = (id, result) => {
    dbConn.query('DELETE FROM tblUsersImport WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = user;