document.addEventListener("DOMContentLoaded", () => {
  // ========== ACT I: friend.html ==========
  if (document.body.classList.contains("act-one")) {
    // Open curtains after delay
    setTimeout(() => {
      document.body.classList.add("curtain-open");

      // Show opening content
      setTimeout(() => {
        document.querySelector(".opening").classList.remove("hidden");

        // Countdown logic
        let countdown = 3;
        const countdownEl = document.getElementById("countdown");
        const interval = setInterval(() => {
          countdown--;
          countdownEl.textContent = countdown;
          if (countdown === 0) {
            clearInterval(interval);
            setTimeout(() => {
              window.location.href = "friend2.html";
            }, 800);
          }
        }, 1000);
      }, 2000);
    }, 1000);
  }

  // ========== ACT II: friend2.html ==========
  if (document.body.classList.contains("act-two")) {
    const cards = document.querySelectorAll(".memory-card");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");

        // Ripple flip effect
        const rippleRange = 1; // number of neighbors
        for (let i = 1; i <= rippleRange; i++) {
          if (cards[index + i]) flipRipple(cards[index + i], i * 100);
          if (cards[index - i]) flipRipple(cards[index - i], i * 100);
        }
      });
    });

    function flipRipple(card, delay) {
      setTimeout(() => {
        card.classList.add("flipped");
        setTimeout(() => {
          card.classList.remove("flipped");
        }, 600);
      }, delay);
    }
  }

  // ========== ACT III: friend3.html ==========
  if (document.body.classList.contains("act-three")) {
    const lines = document.querySelectorAll(".type-line");
    lines.forEach((line, i) => {
      line.style.animationDelay = `calc(${i * 1.5}s)`;
    });
  }
});
