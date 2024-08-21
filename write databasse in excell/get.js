const axios = require("axios")
const ExcelJS = require('exceljs');


async function getUser() {
  try {
    const {
      data
    } = await axios.get('https://reqres.in/api/users?page=1');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('usersData');

    const usersData = data.data

    worksheet.addRow(Object.keys(usersData[0]));


    usersData.forEach(data => {
      worksheet.addRow(Object.values(data));

    });

    await workbook.xlsx.writeFile('file.xlsx')


  } catch (error) {
    console.error(error);
  }
}

getUser()