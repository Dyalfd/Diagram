document.addEventListener("DOMContentLoaded", function () {
    // Sample data (replace with your actual data)
    var data = {
      labels: ["Male", "Female"],
      datasets: [{
        data: [70, 30], // Replace these values with the actual percentages
        backgroundColor: ["#3498db", "#e74c3c"],
      }],
    };
  
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("genderChart").getContext("2d");
  
    // Create the pie chart
    var genderChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  });
  