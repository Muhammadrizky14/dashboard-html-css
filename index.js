const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Function to open the sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Function to close the sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Theme toggler functionality
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Function to handle responsive behavior
const handleResize = () => {
  if (window.innerWidth > 1024) {
    sideMenu.style.display = "block"; // Keep sidebar open on larger screens
  } else {
    sideMenu.style.display = "none"; // Hide sidebar on smaller screens
  }
};

// Event listener for window resize
window.addEventListener("resize", handleResize);

// Initial check for sidebar display on page load
handleResize();

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line', // Change the chart type to line
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'Expenses',
            data: [1200, 1900, 3000, 2500, 3200, 2000, 1500, 2200, 2800],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4 // Makes the line smooth
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
