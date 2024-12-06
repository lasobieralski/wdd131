const form = document.getElementById('trackingForm');
    const entriesBody = document.getElementById('entriesBody');
    const metricSelect = document.getElementById('metricSelect');
    const ctx = document.getElementById('progressChart').getContext('2d');

    let entries = JSON.parse(localStorage.getItem('healthEntries')) || [];

    // Render Entries to Table
    function renderEntries() {
      entriesBody.innerHTML = '';
      if (entries.length === 0) {
        const noEntriesRow = document.createElement('tr');
        noEntriesRow.classList.add('no-entries');
        noEntriesRow.innerHTML = '<td colspan="7">No entries found. Add your daily intake above.</td>';
        entriesBody.appendChild(noEntriesRow);
        return;
      }

      entries.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.date}</td>
          <td>${entry.sugarIntake ?? '—'}</td>
          <td>${entry.weight ?? '—'}</td>
          <td>${entry.bloodSugar ?? '—'}</td>
          <td>${entry.ketones ?? '—'}</td>
          <td>${entry.notes}</td>
          <td><button data-index="${index}" class="delete-btn">Delete</button></td>
        `;
        entriesBody.appendChild(row);
      });
    }

    function saveEntries() {
      localStorage.setItem('healthEntries', JSON.stringify(entries));
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = document.getElementById('trackDate').value;
      const sugarIntake = document.getElementById('sugarIntake').value.trim() || null;
      const weight = document.getElementById('weight').value.trim() || null;
      const bloodSugar = document.getElementById('bloodSugar').value.trim() || null;
      const ketones = document.getElementById('ketones').value.trim() || null;
      const notes = document.getElementById('notes').value.trim() || '—';

      const newEntry = {
        date,
        sugarIntake: sugarIntake ? parseFloat(sugarIntake) : null,
        weight: weight ? parseFloat(weight) : null,
        bloodSugar: bloodSugar ? parseFloat(bloodSugar) : null,
        ketones: ketones ? parseFloat(ketones) : null,
        notes
      };

      entries.push(newEntry);
      saveEntries();
      renderEntries();
      updateChart();
      form.reset();
    });

    entriesBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        entries.splice(index, 1);
        saveEntries();
        renderEntries();
        updateChart();
      }
    });

    // Chart Setup
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Sugar Intake (g)',
          data: [],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            title: { display: true, text: 'Date' }
          },
          y: {
            title: { display: true, text: 'Value' },
            beginAtZero: true
          }
        }
      }
    });

    function updateChart() {
      const selectedMetric = metricSelect.value;
      chart.data.labels = entries.map(e => e.date);
      chart.data.datasets[0].data = entries.map(e => e[selectedMetric] ?? null);

      // Update chart label
      let labelText = '';
      switch (selectedMetric) {
        case 'sugarIntake': labelText = 'Sugar Intake (g)'; break;
        case 'weight': labelText = 'Weight'; break;
        case 'bloodSugar': labelText = 'Blood Sugar (mg/dL)'; break;
        case 'ketones': labelText = 'Ketones (mmol/L)'; break;
        default: labelText = 'Value'; break;
      }
      chart.data.datasets[0].label = labelText;
      chart.update();
    }

    metricSelect.addEventListener('change', updateChart);

    // Initial Render
    renderEntries();
    updateChart();