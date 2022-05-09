const express = require('express');
const app = express()
const port = 3100
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.use('/setReportData', require('./report/report.controller'));
app.post('/getdata', (req, res) => {

    const reader = require('xlsx')
  
    // Reading our test file
    const file = reader.readFile('./excelfile/Cancelations - Products.xlsx');
    
    let data = []
    let data2 = []
    let data3 = []
    
    const sheets = file.SheetNames
    
    // const XLSX = require('xlsx');
    // const workbook = XLSX.readFile('../src/excelfile/Cancelations - Products.xlsx', {
    //   cellStyles: true
    // });
    // const sheet_name = workbook.SheetNames;
    // const sheet = workbook.Sheets[sheet_name[0]];
    
    // const cells = Object.entries(sheet).filter(([cell]) => !cell.startsWith('!'));
    // const coloredCells = cells.filter(([cell, value]) => value.s && value.s.bgColor);
    
    // for (const [cell, value] of coloredCells) {
    //   console.log(cell, value);
    // }


    for(let i = 0; i < sheets.length; i++)
    {
        // data2.push({sheetName: file.SheetNames[i]})
        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]], { header: 1 })
        temp.forEach((res) => {
            data2.push(res);
        })
        data3.push(
            {
                sheetName: file.SheetNames[i],
                sheetData: data2
            }
        );
        data2 = [];
    }
    pageData = {
        sheets: sheets,
        allData: data3
      };
    // Printing data
    console.log(pageData)
    res.send(JSON.stringify(pageData));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
