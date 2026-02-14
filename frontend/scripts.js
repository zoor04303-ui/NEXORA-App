fetch('http://127.0.0.1:5000/dashboard')
    .then(response => response.json())
    .then(data => {
        document.getElementById('sales').innerHTML = `<h2>Sales This Month: $${data.sales.this_month}</h2>`;
        document.getElementById('marketing').innerHTML = `<h2>Marketing Campaigns</h2>${data.marketing.map(c => `<p>${c.campaign}: $${c.budget}</p>`).join('')}`;
        document.getElementById('seo').innerHTML = `<h2>SEO Score: ${data.seo.score}</h2><p>Opportunities: ${data.seo.opportunities.join(', ')}</p>`;
    });
