// Zadanie 1
// Utwórz funkcje getMaxNote i getMinNote, które będą przyjmować trzy parametry: studentsArray, studentId oraz cb. studentsArray jest tablicą obiektów reprezentujących studentów, studentId to identyfikator studenta, a cb to funkcja callback.

// - Każdy obiekt studenta w studentsArray zawiera id, pesel, name oraz tablicę notes z ocenami.
// - Funkcja getMaxNote powinna znaleźć studenta o podanym studentId, a następnie obliczyć jego najwyższą ocenę.
// - Funkcja getMinNote powinna znaleźć studenta o podanym studentId, a następnie obliczyć jego najniższą ocenę.
// - Wynik działania obu funkcji (getMaxNote i getMinNote) powinien być przekazany do funkcji displayInfo, która wyświetli informacje o studentach i ich ocenach w konsoli.

const students = [
  {
    id: 1,
    pesel: "123456789",
    name: "Jacek Kowalski",
    notes: [5, 3, 4, 2, 5, 2],
  },
  {
    id: 2,
    pesel: "234567890",
    name: "Ewa Nowak",
    notes: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    pesel: "345678901",
    name: "Zygmunt Lewandowski",
    notes: [2, 2, 4, 4, 3, 3],
  },
  {
    id: 4,
    pesel: "345678902",
    name: "Bartosz Zkulpa",
    notes: [2, 5, 1, 5, 5, 5],
  },
  {
    id: 5,
    pesel: "345678903",
    name: "Mariusz Pudzianowski",
    notes: [5, 2, 3, 4, 5, 3],
  },
];

const getMaxNote = (studentsArray, studnetId, cb) => {
  const result = studentsArray.filter((element) => element.id === studnetId);
  note = ["Max", result[0].name, Math.max.apply(null, result[0].notes)];
  return cb();
};

const getMinNote = (studentsArray, studnetId, cb) => {
  const result = studentsArray.filter((element) => element.id === studnetId);
  note = ["Min", result[0].name, Math.min.apply(null, result[0].notes)];
  return cb();
};

const displayInfo = () => {
  console.log(`${note[0]} note for student ${note[1]} is ${note[2]}`);
};

getMaxNote(students, 4, displayInfo);
getMinNote(students, 5, displayInfo);

console.log("---");

//Zadanie 2

// Utwórz funkcję displayStudents, która przyjmie jako parametr tablicę studentsArray (tablica studentów).

// - Funkcja powinna najpierw dokonać przekształcenia każdego obiektu w tablicy, dodając nowe pole lastname, które będzie zawierać nazwisko studenta.
// - Następnie, funkcja powinna posortować tablicę studentów alfabetycznie według ich nazwisk.
// - Po posortowaniu, funkcja powinna wyświetlić w konsoli informacje o każdym studencie w formacie: "Student [imię i nazwisko], Pesel: [pesel]".
// - Sortowanie powinno być wykonane przez dedykowaną funkcję compareNames.

const displayStudents = (studentsArray) => {
  studentsArray.forEach((element) => {
    const studentsNameAndLastName = element.name.split(" ");
    element.lastname = studentsNameAndLastName[1];
  });

  function compareNames(a, b) {
    if (a.lastname < b.lastname) {
      return -1;
    }
    if (a.last > b.lastname) {
      return 1;
    }
    return 0;
  }

  studentsArray.sort(compareNames);

  studentsArray.forEach((element) => {
    console.log(`Student ${element.name}, Pesel: ${element.pesel}`);
  });
};

displayStudents(students);
