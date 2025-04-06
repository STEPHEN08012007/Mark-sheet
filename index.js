document.getElementById("gradeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const sub1 = parseFloat(document.getElementById("subject1").value);
    const sub2 = parseFloat(document.getElementById("subject2").value);
    const sub3 = parseFloat(document.getElementById("subject3").value);
  
    const total = sub1 + sub2 + sub3;
    const avg = total / 3;
    const grade = calculateGrade(avg);
  
    addToTable(name, total, avg, grade);
  
    // Optional: Clear the form
    this.reset();
  });
  
  function calculateGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else return "F";
  }
  
  function addToTable(name, total, avg, grade) {
    const tableBody = document.getElementById("resultsBody");
  
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${name}</td>
      <td>${total}</td>
      <td>${avg.toFixed(2)}</td>
      <td>${grade}</td>
    `;
  
    tableBody.appendChild(row);
  }
  