//start of heder& navebar
// عند التمرير، حدد القسم الظاهر
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
//end of activ navbar
//  fish vedioكود لإظهار النص عند التمرير

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3 // يظهر العنصر عندما يظهر 30% منه
    });

    const content = document.querySelector('.wrigtmaseg .content');
    if (content) {
        observer.observe(content);
    }
});


//القائمة المنسدلة الزجاجية 

const menuButton = document.querySelector(".menu");
const navList = document.querySelector(".nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("show");
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("show");
    });
});


// end of hedar and navbar
//start of celebration
const counter = document.getElementById('counter');
const hats = document.getElementById('hats');
const congrats = document.getElementById('congrats');
const btn = document.getElementById('celebrateBtn');
const hatIcons = hats.querySelectorAll('i');

// ضع رابط صوت الـ mp3 هنا (يمكنك تغييره حسب مسار ملفك)
const celebrationSound = new Audio("./assets/sounds/celebration.mp3");//add 3 just to run the souns later

// دالة تحديث الرقم داخل المربعات (تعريفها خارج setInterval)
function updateDigits(num) {
    let str = num.toString().padStart(2, '0');
    document.getElementById('digit1').textContent = str.charAt(0);
    document.getElementById('digit2').textContent = str.charAt(1);
}

let count = 0;
const interval = setInterval(() => {
    updateDigits(count);  // استبدلت counter.textContent = count; بهذا

    count++;
    if (count > 100) {
        clearInterval(interval);

        // إخفاء العداد (يمكن تحذف لو تحب تبقى مربعات الأرقام ظاهر)
        counter.style.display = 'none';

        // إظهار القبعات تدريجيًا
        hats.classList.add('show');
        hatIcons.forEach((hat, index) => {
            setTimeout(() => {
                hat.classList.add('visible');
            }, index * 400); // كل قبعة تظهر بعد 400ms من السابقة
        });

        // إظهار التهنئة والزر بعد ظهور القبعات
        setTimeout(() => {
            congrats.style.display = 'block';
            btn.style.display = 'inline-block';
        }, hatIcons.length * 400 + 500);

        // إطلاق الشرائط وتشغيل الصوت فور بداية ظهور القبعات
        launchConfetti();
        celebrationSound.currentTime = 0;
        celebrationSound.play();
    }
}, 50);

// 🎉 إطلاق الأشرطة
function launchConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 90,
            spread: 360,
            origin: { y: 0 },
            colors: ['#bb0000', '#ffffff', '#00bbff', '#ffc107', '#4caf50']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// 🟢 عند الضغط على زر الاحتفال لإعادة إطلاق الشرائط وتشغيل الصوت
btn.addEventListener('click', () => {
    launchConfetti();
    celebrationSound.currentTime = 0;
    celebrationSound.play();
});
//end of celebration
// start of sounds

// الحصول على جميع المشغلات في الصفحة
const audioPlayers = document.querySelectorAll(".audio-player");

// هذا الكود يجعل كل مشغل يعمل بشكل مستقل
audioPlayers.forEach(player => {
    const audio = player.querySelector("audio");
    const playBtn = player.querySelector(".play-btn");
    const pauseBtn = player.querySelector(".pause-btn");
    const progressBar = player.querySelector(".progress");

    // زر التشغيل
    playBtn.addEventListener("click", () => {
        // ❗️ لإيقاف جميع الأصوات الأخرى (اختياري)
        audioPlayers.forEach(otherPlayer => {
            const otherAudio = otherPlayer.querySelector("audio");
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0;
                const otherProgress = otherPlayer.querySelector(".progress");
                if (otherProgress) {
                    otherProgress.style.width = "0%";
                }
            }
        });

        audio.play();
    });

    // زر الإيقاف
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });

    // تحديث شريط التقدم
    audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    });

    // عند انتهاء الصوت
    audio.addEventListener("ended", () => {
        progressBar.style.width = "0%";
    });
});


// end of control the sound
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTisNt0rLgTgO8lGb_DNL5HXrN_gA7lS0Pm1Nygh7Bi7r2LQkuIGROkIKZqIFKqkzasu-QcSivvn-3v/pub?gid=0&single=true&output=csv';
const webAppUrl = 'https://script.google.com/macros/s/AKfycbyl1D8mVVcDblxy8ASRfA21B7fQilhzjLTDTZklULpele6MDlA92MOHDSBimXT_PALq1Q/exec';
const backgroundqouts = [
    'url(assets/image/fyonka.png)',
    'url(assets/image/nagm.jpeg)',
    'url(assets/image/orced.jpeg)',
    'url(assets/image/orceed.jpeg)',
    'url(assets/image/yalf.jpeg)',
    'url(assets/image/see.jpeg)',
    'url(./assets/image/rose.jpeg)',
    // أضيفي المزيد من الصور حسب ما تملكين
];


const backgroundimages = [
    'url(assets/image/cloud1.jpeg)',
    'url(assets/image/cloud2.jpeg)',
    'url(assets/image/cloud3.jpeg)',
    'url(assets/image/cloude4.jpeg)',

];







const target = document.querySelector(".scroll-section");
let currentIndex = 0;

setInterval(() => {
    target.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}, 5000); // تغيير الخلفية كل 5 ثواني

/*
const pastelColors = [
    'bisque', 'lavenderblush', 'mintcream', 'honeydew', 'azure'
];*/

function loadMessages() {
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvText => {
            const rows = csvText.trim().split('\n');
            rows.shift();
            const messages = [];
            const quotes = [];
            rows.forEach(row => {
                const columns = row.split(',');
                const name = columns[0];
                const message = columns[1];
                const quote = columns[2];
                if (message.trim()) {
                    //  const color = pastelColors[Math.floor(Math.random() * pastelColors.length)]; style="background-color: ${color};
                    const bgImage = backgroundimages[Math.floor(Math.random() * backgroundimages.length)];



                    messages.push(`
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style="background-image: ${bgImage}; background-size: cover; background-position: center;  "  >
                  <p class="title">${name}</p>
                  <p>اضغط لقراءة الرسالة</p>
                </div>
                <div class="flip-card-back "  >
                  <p class="title">${name}</p>
                  <p>${message}</p>
                </div>
              </div>
            </div>
          `);
                }


                const bgqout = backgroundqouts[Math.floor(Math.random() * backgroundqouts.length)];

                if (quote && quote.trim()) {
                    quotes.push(`
            <div class="card quote" style="background-image: ${bgqout}; background-size: cover; background-position: center;  ">
              ❝ ${quote} ❞
            </div>
          `);
                }
            });
            document.getElementById("messageGallery").innerHTML = messages.reverse().join('');
            document.getElementById("quoteSection").innerHTML = quotes.reverse().join('');

        })
        .catch(err => console.error("Error loading messages:", err));
}

//add
window.onload = function () {
    const scrollContainer = document.querySelector('.scroll-section');
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
};

window.addEventListener('load', () => {
    const scrollSections = document.querySelectorAll('.scroll-section');
    scrollSections.forEach(section => {
        section.scrollLeft = section.scrollWidth;
    });
});






loadMessages();

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch(webAppUrl, {
        method: 'POST',
        body: data,
    })
        .then(res => res.text())
        .then(response => {
            alert("✅ تم إرسال الرسالة!");
            form.reset();
            document.getElementById("popupOverlay").classList.remove("active");
            loadMessages();
        })
        .catch(err => {
            alert("❌ فشل الإرسال!");
            console.error(err);
        });
});

document.getElementById("openFormBtn").onclick = () => {
    document.getElementById("popupOverlay").classList.add("active");
};
document.getElementById("popupOverlay").onclick = (e) => {
    if (e.target.id === "popupOverlay") {
        e.currentTarget.classList.remove("active");
    }
};

//start the play random boll
//boll play
const ball = document.getElementById("ball");
const playground = document.getElementById("playground");

let velocity = {
    x: getRandomSpeed(),
    y: getRandomSpeed()
};

function getRandomSpeed() {
    const speed = Math.random() * 2 + 1; // من 1 إلى 3
    return Math.random() < 0.5 ? -speed : speed;
}

function moveBall() {
    const ballRect = ball.getBoundingClientRect();
    const sectionRect = playground.getBoundingClientRect();

    let newLeft = ball.offsetLeft + velocity.x;
    let newTop = ball.offsetTop + velocity.y;

    // الارتداد عند الحواف
    if (newLeft <= 0 || newLeft + ballRect.width >= sectionRect.width) {
        velocity.x *= -1;
    }
    if (newTop <= 0 || newTop + ballRect.height >= sectionRect.height) {
        velocity.y *= -1;
    }

    ball.style.left = `${ball.offsetLeft + velocity.x}px`;
    ball.style.top = `${ball.offsetTop + velocity.y}px`;

    requestAnimationFrame(moveBall);
}

// عند مرور الماوس أو الضغط عليها
ball.addEventListener("mouseover", changeDirection);
ball.addEventListener("click", changeDirection);

function changeDirection() {
    velocity = {
        x: getRandomSpeed(),
        y: getRandomSpeed()
    };

    // تأثير بصري عند التغيير
    ball.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
}

// بدء الحركة
moveBall();
// end the boll play





