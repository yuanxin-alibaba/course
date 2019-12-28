module.exports = function (source) {
    const sourceCode = source
        .replace(/吾有一言\s*曰【([^】]+)】\s*名之曰【([^】]+)】/g, (all, variable, variableName) => {
            return `var ${variableName} = '${variable}';`;
        })
        .replace(/【([^】]+)】书之/g, (allCode, output) => {
            return `console.log(${output});`;
        });
    console.log('sourceCode sourceCode sourceCode ::', sourceCode);
    return sourceCode;
};
