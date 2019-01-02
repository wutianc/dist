const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const pool = mysql.createPool({
    host: 'wutianci.cn',
    part: 3306,
    database: 'blog',
    user: 'root',
    password: '123',
});

app.get('/login', (req, res) => {
    pool.getConnection((err, connection) => {
        if (connection) {
            console.log('mysql数据库连接成功！');
            connection.query('select * from user', (error, resData) => {
                if (resData) {
                    res.send(resData);
                }
                if (err) {
                    console.log(err);
                }
            })
        } else {
            console.log('mysql连接失败！');
        }
    })
});



app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});