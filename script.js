document.addEventListener("DOMContentLoaded", () => {
  // Menambahkan efek hover halus pada kartu proyek
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-5px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });
});
