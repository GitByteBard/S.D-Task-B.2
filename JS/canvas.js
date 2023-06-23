const canvas = document.getElementById("sunCanvas");
const context = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const sunRadius = 100;

let rotationAngle = 0;
let rayLength = 70;
let increasing = true;

function drawSun() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(centerX, centerY, sunRadius, 0, 2 * Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  context.closePath();

  context.save();
  context.translate(centerX, centerY);
  context.rotate(rotationAngle);

  // Первый ряд лучей
  for (let i = 0; i < 12; i++) {
    const angle = (2 * Math.PI * i) / 12;
    const startX = sunRadius * Math.cos(angle);
    const startY = sunRadius * Math.sin(angle);
    const endX = (sunRadius + rayLength) * Math.cos(angle);
    const endY = (sunRadius + rayLength) * Math.sin(angle);

    const cp1X = (sunRadius + rayLength / 2) * Math.cos(angle + 0.1);
    const cp1Y = (sunRadius + rayLength / 2) * Math.sin(angle + 0.1);
    const cp2X = (sunRadius + rayLength / 2) * Math.cos(angle - 0.1);
    const cp2Y = (sunRadius + rayLength / 2) * Math.sin(angle - 0.1);

    const baseWidth = 10;

    context.beginPath();
    context.moveTo(startX - baseWidth / 2, startY);
    context.bezierCurveTo(
      cp1X - baseWidth / 2,
      cp1Y - baseWidth / 4,
      cp2X - baseWidth / 2,
      cp2Y - baseWidth / 4,
      endX - baseWidth / 2,
      endY
    );
    context.lineTo(endX + baseWidth / 2, endY);
    context.bezierCurveTo(
      cp2X + baseWidth / 2,
      cp2Y - baseWidth / 4,
      cp1X + baseWidth / 2,
      cp1Y - baseWidth / 4,
      startX + baseWidth / 2,
      startY
    );
    context.closePath();

    const gradient = context.createRadialGradient(
      0,
      0,
      sunRadius,
      0,
      0,
      sunRadius + rayLength
    );
    gradient.addColorStop(0, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0)");

    context.fillStyle = gradient;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "orange";
    context.stroke();
  }

  // Второй ряд лучей
  for (let i = 0; i < 24; i++) {
    const angle = (2 * Math.PI * i) / 24;
    const startX = (sunRadius - 10) * Math.cos(angle);
    const startY = (sunRadius - 10) * Math.sin(angle);
    const endX = (sunRadius + rayLength / 2) * Math.cos(angle);
    const endY = (sunRadius + rayLength / 2) * Math.sin(angle);

    const cp1X = (sunRadius + rayLength / 4) * Math.cos(angle + 0.05);
    const cp1Y = (sunRadius + rayLength / 4) * Math.sin(angle + 0.05);
    const cp2X = (sunRadius + rayLength / 4) * Math.cos(angle - 0.05);
    const cp2Y = (sunRadius + rayLength / 4) * Math.sin(angle - 0.05);

    const baseWidth = 5;

    context.beginPath();
    context.moveTo(startX - baseWidth / 2, startY);
    context.bezierCurveTo(
      cp1X - baseWidth / 2,
      cp1Y - baseWidth / 4,
      cp2X - baseWidth / 2,
      cp2Y - baseWidth / 4,
      endX - baseWidth / 2,
      endY
    );
    context.lineTo(endX + baseWidth / 2, endY);
    context.bezierCurveTo(
      cp2X + baseWidth / 2,
      cp2Y - baseWidth / 4,
      cp1X + baseWidth / 2,
      cp1Y - baseWidth / 4,
      startX + baseWidth / 2,
      startY
    );
    context.closePath();

    const gradient = context.createRadialGradient(
      0,
      0,
      sunRadius,
      0,
      0,
      sunRadius + rayLength
    );
    gradient.addColorStop(0, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0)");

    context.fillStyle = gradient;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "orange";
    context.stroke();
  }

  context.restore();

  rotationAngle += 0.01;

  if (increasing) {
    rayLength += 1;
    if (rayLength > 90) {
      increasing = false;
    }
  } else {
    rayLength -= 1;
    if (rayLength < 40) {
      increasing = true;
    }
  }

  requestAnimationFrame(drawSun);
}

drawSun();
