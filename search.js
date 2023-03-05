const result = document.getElementById('result')
const filter = document.getElementById('filter')
const lisItems = []
getEnvironmentData()
filter.addEventListener('input', (e) => 
filterData(e.target.value))