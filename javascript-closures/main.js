function graduate(credential) {
  return function(fullname) {
    return fullname + ', ' + credential
  }
}

 const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')
