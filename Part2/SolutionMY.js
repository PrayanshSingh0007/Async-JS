/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of somecontent from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 * 
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server. 
 */

function downloadfile(url, callback) {
    console.log(`Downloading file from ${url}`);
    setTimeout(() => {
        let file = url.split('/').pop();
        console.log(`File was downloaded as ${file}`);
        (file);
    }, 3000);
};


function writeFile (file, callback) {
    console.log(`Writing file ${file}`);
    setTimeout(() => {
        console.log(`File ${file} was written`);
        callbacks(file);
    }, 3000);
};


function uploadFile(file, url, callback) {
    console.log(`Uploading file ${file}`);
    setTimeout(() => {
        let uploadedFile = url + file
        console.log(`File ${uploadedFile} was uploaded`);
        callbacks(uploadedFile);
    }, 3000);
}

downloadfile('http://www.google.com/logo.png'), (file) => {
    writeFile(file, (file) => {
        uploadFile(file, (uploadedFile) => {
            console.log(`Done with file: ${uploadedFile}`);
         })();

    });

    writeFile(file, (file) => { 
        uploadFile(file, (uploadedFile) => {
            console.log(`Done with file: ${uploadedFile}`);
        });
    })};