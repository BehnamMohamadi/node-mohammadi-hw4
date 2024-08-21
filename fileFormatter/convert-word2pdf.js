const {
  promisify
} = require('util');
const docxConverter = require('docx-pdf');

const convertDocxToPdf = promisify(docxConverter);

const convertFile = async (inputPath, outputPath) => {
  try {
    await convertDocxToPdf(inputPath, outputPath);
    console.log('File converted successfully:', outputPath);
  } catch (error) {
    console.error('Error converting file:', error);
  }
};

const inputFilePath = './word doc.docx';
const outputFilePath = './output.pdf';

convertFile(inputFilePath, outputFilePath);