module.exports = {
  parseColons: (string) => {
    let regex = /:/g;
  
    return string.replace(regex, ' ');
  }
};
