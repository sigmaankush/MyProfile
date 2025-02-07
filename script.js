window.addEventListener('scroll', function () {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(function (item) {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
      } else {
          item.classList.remove('visible');
      }
  });
});

