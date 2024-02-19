async function getAbout() {
    try {
        const response = await fetch('/about.json'); 
        const about = await response.json();
        return about
    } catch (error) {
        console.error('Error fetching about:', error);
    }
}

export { getAbout };