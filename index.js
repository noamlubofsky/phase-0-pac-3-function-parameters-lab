
function introduction(name = "Josh") {
    return (`Hi, my name is ${name}.`)
}  

introcuction(Josh);

function introductionWithLanguage(name,language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
const name = "Gracie"
function introductionWithLanguageOptional(name,language="JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}