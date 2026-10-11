(function () {
    "use strict";

    var root = document.documentElement;
    var toggle = document.getElementById("theme-toggle");
    var stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
        root.setAttribute("data-theme", stored);
    }

    function isDark() {
        var attr = root.getAttribute("data-theme");
        if (attr === "dark") return true;
        if (attr === "light") return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function syncToggle() {
        if (!toggle) return;
        var dark = isDark();
        toggle.textContent = dark ? "☀️" : "🌙";
        toggle.setAttribute("aria-pressed", String(dark));
    }

    if (toggle) {
        syncToggle();
        toggle.addEventListener("click", function () {
            var next = isDark() ? "light" : "dark";
            root.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            syncToggle();
        });
    }

    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    var sections = Array.prototype.map
        .call(navLinks, function (link) {
            return document.querySelector(link.getAttribute("href"));
        })
        .filter(Boolean);
    var lastSect = sections[sections.length - 1];
    var lastLink = navLinks[navLinks.length - 1];
    var prevLink = navLinks[navLinks.length - 2];

    if ("IntersectionObserver" in window && sections.length) {
        function navObservCB(entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (l) {
                    l.removeAttribute("aria-current");
                });
                var active = document.querySelector('nav a[href="#' + entry.target.id + '"]');
                if (active) active.setAttribute("aria-current", "true");
            });
        } 
        var navObserver = new IntersectionObserver(
            navObservCB,
            { rootMargin: "-30% 0px -60% 0px" }
        );
        var lastObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navObservCB([entry]);
                    } else if (lastLink && lastLink.hasAttribute("aria-current")) {
                        lastLink.removeAttribute("aria-current");
                        if (prevLink) prevLink.setAttribute("aria-current", true);
                    }
                })
            },
            { threshold: 1 }
        );
        sections.forEach(function (s) {
            if (s !== lastSect) {
                navObserver.observe(s);
            }
        });
        lastObserver.observe(lastSect);
    }

    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
        var revealObserver = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        revealEls.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }
})();
