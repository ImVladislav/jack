$(function() {
    var supportsAnimation = clientSupports("animationName");
    var popSize = [184, 167];
    var teaserSize = [24, 24];
    var margin = 14/2;
 
    setTimeout(createTeaser, 500);

    function position(heart, size) {
        var w = $(window);
        var minX = w.scrollLeft() + margin;
        var maxX = w.scrollLeft() + w.width() - size[0] - margin;
        var minY = w.scrollTop() + margin;
        var maxY = w.scrollTop() + w.height() - size[1] - margin;
        heart.css("left",
                Math.round(minX + Math.random() * (maxX - minX)) + "px");
        heart.css("top",
                Math.round(minY + Math.random() * (maxY - minY)) + "px");
    }

    function pop() {
        var i = 0;
        var total = 14*2;

        function create() {
            ++i;

            var heart = $('<div class="heart pop"></div>');
            heart.bind("animationend oanimationend MSAnimationEnd " +
                "mozAnimationEnd webkitAnimationEnd",
                function() {$(this).remove();});

            position(heart, popSize);
            heart.appendTo(document.body);

            if (i < total) {
                setTimeout(create, Math.random() * 250);
            } else {
                setTimeout(createTeaser, 3000);
            }
        }

        create();
    }

    function createTeaser() {
        var d = new Date();
  
        var heart = $('<div class="heart teaser"></div>');
        var timer;
        
        function tease() {
            position(heart, teaserSize);
        }

        heart.hover(function() {
            timer = setTimeout(tease, 300); //Change this for hover timeout
        }, function() {
            clearTimeout(timer);
        });

       // if (supportsAnimation) {
            heart.click(function() {
                heart.remove();

                try {
                    var kiss = "valentines_day_heart", me = "click";
                    if (typeof _gaq !== "undefined") {
                        _gaq.push(["_trackEvent", kiss, me]);
                    } else if (typeof ga !== "undefined") {
                        ga("send", "event", kiss, me);
                    }
                } catch(err) {}

                pop();
                console.log('click')
            });
       // }

        position(heart, teaserSize);
        heart.appendTo(document.body);
    }

    function clientSupports(prop) {
        var style = document.body.style;

        if (typeof style[prop] === "string") {
            return true;
        }

        var prefix = ['O', 'ms', 'Moz', 'Webkit', 'webkit'];
        prop = prop.charAt(0).toUpperCase() + prop.substr(1);
        for (var i = 0; i < prefix.length; ++i) {
            if (typeof style[prefix[i] + prop] === "string") {
                return true;
            }
        }

        return false;
    }
});






document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'fixed';
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = `${Math.random() * maxX}px`;
    this.style.top = `${Math.random() * maxY}px`;
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("valentine-modal");
    const mainContent = document.getElementById("main-content");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const music = document.getElementById("background-music");
    const musicToggle = document.querySelector("#music-toggle"); // Використовуємо querySelector для точного вибору

    // Перевіряємо, чи знайдено кнопку
    if (!musicToggle) {
        console.error("❌ Кнопка керування музикою не знайдена!");
        return;
    }

    console.log("✅ Кнопка керування музикою знайдена!");

    // При натисканні на "Yes" закриваємо модалку, показуємо сайт та вмикаємо музику
    yesBtn.addEventListener("click", function () {
        modal.style.display = "none";
        if (mainContent) mainContent.style.display = "block";

        // Відтворюємо музику лише після взаємодії користувача
        music.play().then(() => {
            musicToggle.style.display = "block"; // Показуємо кнопку
        }).catch(error => console.warn("⚠️ Браузер заборонив автозапуск музики:", error));
    });

    // Кнопка перемикання музики
    musicToggle.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicToggle.textContent = "🔊";
        } else {
            music.pause();
            musicToggle.textContent = "🔇";
        }
    });

    // Рухома кнопка "No"
    noBtn.addEventListener("mouseover", function () {
        this.style.position = 'fixed';
        const maxX = window.innerWidth - this.clientWidth;
        const maxY = window.innerHeight - this.clientHeight;
        this.style.left = `${Math.random() * maxX}px`;
        this.style.top = `${Math.random() * maxY}px`;
    });
});