async function fetchPitchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
      const data = await response.json();

      const table = document.getElementById('pitchTable');

      data.forEach(pitch => {
          const row = table.insertRow();

          const pitchLink = document.createElement('a');
          pitchLink.href = `details.html?id=${pitch.PitchNo}`;
          pitchLink.textContent = `Pitch ${pitch.PitchNo}`;

          row.insertCell(0).appendChild(pitchLink);
          row.insertCell(1).textContent = pitch.Date;
          row.insertCell(2).textContent = pitch.Time;
          row.insertCell(3).textContent = pitch.Batter;
          row.insertCell(4).textContent = pitch.Balls;
          row.insertCell(5).textContent = pitch.Strikes;
          row.insertCell(6).textContent = pitch.Outs;
          row.insertCell(7).textContent = pitch.PitchCall;
          row.insertCell(8).textContent = pitch.KorBB || '';
          row.insertCell(9).textContent = pitch.RelSpeed || '';
          row.insertCell(10).textContent = pitch.SpinRate || '';
          row.insertCell(11).textContent = pitch.SpinAxis || '';
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function filterData(event) {
  event.preventDefault();
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  console.log(startdate);
  console.log(enddate);

  const table = document.getElementById('pitchTable');
  const rows = table.getElementsByTagName('tr');

  // Loop through the rows and hide those that don't match the date range
  for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
      const row = rows[i];
      const dateCell = row.cells[1].textContent; // Get the date cell
      const rowDate = new Date(dateCell); // Convert to Date object

      if (rowDate >= startdate && rowDate <= enddate) {
          row.style.display = ''; // Show the row
      } else {
          row.style.display = 'none'; // Hide the row
      }
  }
}

async function fetchPitchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
      const data = await response.json();

      const table = document.getElementById('pitchTable');

      data.forEach(pitch => {
          const row = table.insertRow();

          const pitchLink = document.createElement('a');
          pitchLink.href = `details.html?id=${pitch.PitchNo}`;
          pitchLink.textContent = `Pitch ${pitch.PitchNo}`;

          row.insertCell(0).appendChild(pitchLink);
          row.insertCell(1).textContent = pitch.Date;
          row.insertCell(2).textContent = pitch.Time;
          row.insertCell(3).textContent = pitch.Batter;
          row.insertCell(4).textContent = pitch.Balls;
          row.insertCell(5).textContent = pitch.Strikes;
          row.insertCell(6).textContent = pitch.Outs;
          row.insertCell(7).textContent = pitch.PitchCall;
          row.insertCell(8).textContent = pitch.KorBB || '';
          row.insertCell(9).textContent = pitch.RelSpeed || '';
          row.insertCell(10).textContent = pitch.SpinRate || '';
          row.insertCell(11).textContent = pitch.SpinAxis || '';
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

fetchPitchData();