async function getData() {
    try {
        const response = await fetch('/data.json'); 
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export { getData };