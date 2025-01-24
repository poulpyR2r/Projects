import React, { useEffect, useRef } from "react";

const planetImages = [
  "https://i.imgur.com/PL3D406.png",
  "https://i.imgur.com/bluPDMH.png",
  "https://i.imgur.com/hTUWxFS.png",
  "https://i.imgur.com/YZAsSjR.png",
  "https://i.imgur.com/cVw9xRu.png",
  "https://i.imgur.com/VDos01u.png",
  "https://i.imgur.com/4fFEQts.png",
  "https://i.imgur.com/qDcnsCN.png",
  "https://i.imgur.com/B7Q8Jqk.png",
];

const StarField = () => {
  const canvasRef = useRef(null);
  const planets = useRef([]);
  const comets = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const layerCount = 3;
    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;

    // Resize the canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
      createPlanets();
    };

    // Create stars
    const createStars = () => {
      stars = [];
      const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;
      for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            twinkleSpeed: Math.random() * 0.1 + 0.05, // Twinkling speed
          });
        }
      }
    };

    // Create planets
    const createPlanets = () => {
      const usedImages = new Set();
      planets.current = Array.from({ length: 5 }, () => {
        let imageIndex;
        do {
          imageIndex = Math.floor(Math.random() * planetImages.length);
        } while (usedImages.has(imageIndex));
        usedImages.add(imageIndex);

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 70 + 20,
          image: new Image(),
          drift: Math.random() * 0.5 + 0.1,
        };
      });

      planets.current.forEach((planet, index) => {
        planet.image.src = planetImages[index];
      });
    };

    // Create comets
    const createComet = () => {
      const comet = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 300 + 100,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 - 2,
        opacity: Math.random() * 0.5 + 0.5,
      };
      comets.current.push(comet);

      setTimeout(createComet, Math.random() * 20000 + 15000); // New comet every 15–35 seconds
    };

    // Update stars
    const updateStars = () => {
      stars.forEach((star) => {
        star.y -= star.speed;
        star.opacity =
          star.baseOpacity + Math.sin(Date.now() * star.twinkleSpeed) * 0.3;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    // Update planets
    const updatePlanets = () => {
      planets.current.forEach((planet) => {
        planet.x += Math.sin(Date.now() * 0.0001) * planet.drift;
        planet.y += Math.cos(Date.now() * 0.0001) * planet.drift;
      });
    };

    // Update comets
    const updateComets = () => {
      comets.current = comets.current.filter((comet) => {
        comet.x += comet.speedX;
        comet.y += comet.speedY;
        comet.opacity -= 0.01;
        return comet.opacity > 0;
      });
    };

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 8,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(1, "rgba(10, 20, 40, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
    };

    // Draw planets
    const drawPlanets = () => {
      planets.current.forEach((planet) => {
        ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.drawImage(
          planet.image,
          planet.x - planet.size / 2,
          planet.y - planet.size / 2,
          planet.size,
          planet.size
        );
      });

      ctx.shadowColor = "transparent";
    };

    // Draw comets
    const drawComets = () => {
      comets.current.forEach((comet) => {
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.speedX * comet.length,
          comet.y - comet.speedY * comet.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - comet.speedX * comet.length,
          comet.y - comet.speedY * comet.length
        );
        ctx.stroke();
      });
    };

    // Animation loop
    const animate = () => {
      updateStars();
      updatePlanets();
      updateComets();
      drawStars();
      drawPlanets();
      drawComets();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createStars();
    createPlanets();
    createComet();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
  );
};

export default StarField;
