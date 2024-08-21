const ExcelJS = require('exceljs');

async function readExcel() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('file.xlsx');
  const worksheet = workbook.worksheets[0]; // انتخاب اولین شیت

  worksheet.eachRow((row, rowNumber) => {
    console.log(`Row ${rowNumber} = ${JSON.stringify(row.values)}`);
  });
}

readExcel();