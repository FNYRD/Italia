const itinerary = [
  { day: "Día 1", city: "Milan", date: "Lunes 24/06" },
  { day: "Día 2", city: "", date: "" },
  { day: "Día 3", city: "", date: "" },
  { day: "Día 4", city: "", date: "" },
  { day: "Día 5", city: "", date: "" },
  { day: "Día 6", city: "", date: "" },
  { day: "Día 7", city: "", date: "" },
];

const container = document.getElementById('itinerary');

itinerary.forEach(({ day, city, date }, index) => {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'itinerary-day';
  dayDiv.innerHTML = `<h3>${day} - ${city}</h3><p class="date">${date}</p>`;
  dayDiv.addEventListener('click', () => {
    const diaArchivo = `dia${index + 1}.html`;
    window.location.href = diaArchivo;
  });
  console.log(`${day} - ${city}`, date);
  container.appendChild(dayDiv);
});