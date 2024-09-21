
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
    })}  
    

