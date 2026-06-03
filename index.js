const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Daftar Link Website Sumber
const availableNumbers = [
    { country: '🇬🇧 UK', number: '+44 7418 341147', url: 'https://receive-sms-free.cc/Free-UK-Phone-Number/447418341147.html' },
    { country: '🇺🇸 USA', number: '+1 213 510 0432', url: 'https://receive-sms-free.cc/Free-USA-Phone-Number/12135100432.html' },
    { country: '🇩🇪 Germany', number: '+49 15510 67234', url: 'https://receive-sms-free.cc/Free-Germany-Phone-Number/491551067234.html' }
];

app.get('/', (req, res) => {
    const selectedUrl = req.query.url || availableNumbers[0].url;
    const selectedNum = req.query.number || availableNumbers[0].number;
    
    res.render('index', { 
        numbers: availableNumbers, 
        currentUrl: selectedUrl,
        currentNum: selectedNum
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 BOY HUB ONLINE: http://localhost:${PORT}`);
});module.exports = app;