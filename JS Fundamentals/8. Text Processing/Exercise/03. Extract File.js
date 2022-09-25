function solve(filePath) {
    filePath = filePath.split('\\');
    let file = filePath[filePath.length - 1];

    let fileComponents = file.split('.');

    let fileExtension = fileComponents.pop();
    let fileName = fileComponents.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\template.bak.ppt');