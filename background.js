import { ref, onMounted } from 'alpinejs'

// background.js

export function gridData() {
    return {
      dots: Array.from({ length: 625 }, (_, i) => ({
        id: i,
        color: 'rgba(255, 255, 255, 0)'
      })),
      interval: setInterval(() => {
        const index = Math.floor(Math.random() * 625);
        this.dots[index].color = 'rgba(255, 255, 255, 0.5)';
        setTimeout(() => {
          this.dots[index].color = 'rgba(255, 255, 255, 0)';
        }, 500);
      }, 100)
    };
  }