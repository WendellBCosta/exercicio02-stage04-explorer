const students = [
    {
      name: "Carlos",
      firstTest: 7,
      secondTest: 8,
    },
    {
      name: "Fernanda",
      firstTest: 10,
      secondTest: 9.5,
    },
    {
      name: "Rodrigo",
      firstTest: 4.3,
      secondTest: 7,
    },
    {
      name: "Manuela",
      firstTest: 3,
      secondTest: 8,
    },
  ]
  
  function average(firstTest, secondTest) {
    let average = ((firstTest + secondTest) / 2).toFixed(1)
    return average
  }
  
  function getStudentAverage(student) {
    const studentAverage = average(student.firstTest, student.secondTest)
    return studentAverage
  }
  
  for (let student of students) {
    const studentAverage = getStudentAverage(student)
  
    if (studentAverage >= 7) {
      alert(
        `
        A média do(a) aluno(a) ${student.name} é: ${studentAverage}!
        Parabéns ${student.name}! Você foi aprovado no 14ª concurso.
        `
      )
    } else {
      alert(
        `
        A média do(a) aluno(a) ${student.name} é: ${studentAverage}.
        Não foi dessa vez ${student.name}. Boa sorte na próxima tentativa.
        `
      )
    }
  }