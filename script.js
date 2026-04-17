<script>
const elements = document.querySelectorAll('.fade');

function revealOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

// run on scroll
window.addEventListener('scroll', revealOnScroll);

// run once on load 🔥
window.addEventListener('load', revealOnScroll);
</script>