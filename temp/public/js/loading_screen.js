window.addEventListener('load', () => {
const loading = document.getElementById('loading-screen');
if (loading) {
    setTimeout(() => {
    loading.classList.add('fade-out');
    setTimeout(() => loading.remove(), 700); // remove from DOM after fade
    }, 1000); // show for 1 second
}
});