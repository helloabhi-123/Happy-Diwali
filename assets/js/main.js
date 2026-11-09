(function () {
        "use strict";

        var LANTERNS = [
          {
            name: "Royal Hex Lantern", finish: "Red & Gold",
            img: "assets/images/lanterns/lantern-1.png", top: 13, w: 96, ratio: 734 / 402, ax: 0.596, ay: 0.064,
            alt: "Red and gold hexagonal Lantern with pink tassels",
            desc: "A hexagonal Lantern in deep red and gold brocade with scalloped gold edging — and long pink tassels that glow from within as the light moves through them."
          },
          {
            name: "Floral Diamond Lantern", finish: "Yellow & Green",
            img: "assets/images/lanterns/lantern-2.png", top: 9, w: 96, ratio: 594 / 292, ax: 0.514, ay: 0.010,
            alt: "Yellow and green floral diamond Lantern with gold tassels",
            desc: "Diamond panels cut with floral patterns in yellow, green and pink, finished with a band of gold flowers and shimmering gold tassels."
          },
          {
            name: "Lotus Hex Lantern", finish: "White & Purple",
            img: "assets/images/lanterns/lantern-3.png", top: 15, w: 88, ratio: 454 / 180, ax: 0.500, ay: 0.009,
            alt: "White and purple floral hexagonal Lantern with teal tassels",
            desc: "White hexagonal panels carved with lotus blooms, touched with purple and cool blue light, with flowing teal tassels below."
          },
          {
            name: "Diya Square Lantern", finish: "Emerald Green",
            img: "assets/images/lanterns/lantern-4.png", top: 11, w: 88, ratio: 441 / 168, v: [0.10, 0.245, 0.96, 0.236],
            alt: "Green square Lantern with a diya design and white tassel",
            desc: "A square emerald Lantern with a diya flame cut into every face, edged with rows of gold dots and finished with a single cream tassel."
          },
          {
            name: "Crochet Globe Lantern", finish: "Rose Pink",
            img: "assets/images/lanterns/lantern-5.png", top: 8, w: 92, ratio: 935 / 367, ax: 0.572, ay: 0,
            alt: "Pink round crochet Lantern with pink tassels and beads",
            desc: "A round hand-crocheted globe in rose pink — the light glows through every knot, over strands of crystal beads and long pink tassels."
          },
          {
            name: "Peacock Hex Lantern", finish: "Orange & Purple",
            img: "assets/images/lanterns/lantern-6.png", top: 14, w: 100, ratio: 710 / 434, ax: 0.505, ay: 0.150,
            alt: "Peacock orange and purple hexagonal Lantern",
            desc: "Hexagonal panels in glowing orange and violet with a golden peacock at the centre, crowned and footed with gold filigree — the showpiece of the track."
          },
          {
            name: "Rainbow Diamond Lantern", finish: "Multicolour",
            img: "assets/images/lanterns/lantern-7.png", top: 10, w: 94, ratio: 798 / 348, ax: 0.511, ay: 0,
            alt: "Multicolour diamond Lantern with rainbow tassels",
            desc: "A diamond-patterned dome in blue, violet and gold with red star cut-outs, flowing into long rainbow tassels in every colour of the festival."
          },
          {
            name: "Star Lantern", finish: "Multicolour",
            img: "assets/images/lanterns/lantern-8.png", top: 17, w: 112, ratio: 666 / 681, ax: 0.500, ay: 0.185,
            alt: "Multicolour eight-point star Lantern",
            desc: "An eight-point star in red, orange, green, violet and blue, each point patterned with white festive motifs and dotted cut-outs that sparkle when lit."
          }
        ];

        var stageBox = document.getElementById("stageBox");
        var lanternsBox = document.getElementById("lanterns");
        var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

        /* ---------- Fairy lights across the top ---------- */
        (function fairy() {
          var g = document.getElementById("fairy");
          var colors = ["#ffb154", "#ff8a4d", "#ffd98a", "#ff6f61"];
          var wire = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          wire.setAttribute("viewBox", "0 0 1200 60");
          wire.setAttribute("preserveAspectRatio", "none");
          wire.style.cssText = "position:absolute;left:0;top:0;width:100%;height:10%;overflow:visible";
          wire.setAttribute("aria-hidden", "true");
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M-10 2 Q600 58 1210 2");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#5a4020");
          path.setAttribute("stroke-width", "1.4");
          path.setAttribute("stroke-opacity", "0.8");
          wire.appendChild(path);
          g.appendChild(wire);
          var x0 = -10, y0 = 2, cx = 600, cy = 58, x1 = 1210, y1 = 2;
          for (var i = 0; i < 17; i++) {
            var t = (i + 0.5) / 17;
            var px = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
            var py = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y1;
            var b = document.createElement("span");
            b.className = "fairy-bulb";
            b.style.left = (px / 12) + "%";
            b.style.top = "calc(" + (py / 6).toFixed(2) + "% + 8px)";
            b.style.background = colors[i % colors.length];
            b.style.boxShadow = "0 0 6px 1px " + colors[i % colors.length];
            b.style.animationDelay = (i * 0.33).toFixed(2) + "s";
            g.appendChild(b);
          }
        })();

        /* ---------- Build Lanterns ---------- */
        var startX = LANTERNS.map(function (_, i) { return (i + 0.5) * 12.5; });

        var lamps = LANTERNS.map(function (data, i) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "lantern";
          btn.style.left = startX[i] + "%";
          btn.setAttribute("aria-label", data.name + ", " + data.finish + ". Press Enter to light it.");

          var swing = document.createElement("span");
          swing.className = "k-swing";
          var sway = document.createElement("span");
          sway.className = "k-sway";
          sway.style.animationDelay = (-i * 0.7) + "s";
          sway.style.animationDuration = (4.6 + (i % 3) * 0.6) + "s";

          var haloTop = data.top + 26;
          var halo = document.createElement("span");
          halo.className = "k-halo";
          halo.style.top = haloTop + "%";

          var beam = document.createElement("span");
          beam.className = "k-beam";
          beam.style.top = (data.top + 18) + "%";
          beam.style.bottom = "7%";

          // Support rope(s) for this Lantern — one centred vertical rope,
          // or two ropes in a V for the Diya Square. The SVG lives inside
          // the sway/swing wrapper, so the ropes sway and drag together
          // with their Lantern; layoutRopes() sets the exact px geometry
          // so each rope runs from the rail to that Lantern's own top.
          var ropes = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          ropes.setAttribute("class", "k-ropes");
          ropes.setAttribute("aria-hidden", "true");
          var ropeLines = [];
          for (var r = 0; r < (data.v ? 2 : 1); r++) {
            var ln = document.createElementNS("http://www.w3.org/2000/svg", "line");
            ropes.appendChild(ln);
            ropeLines.push(ln);
          }

          var mount = document.createElement("span");
          mount.className = "k-mount";

          var wrap = document.createElement("span");
          wrap.className = "k-imgwrap";
          wrap.style.top = data.top + "%";
          wrap.style.width = data.w + "%";
          var img = document.createElement("img");
          img.src = data.img;
          img.alt = data.alt;
          img.draggable = false;
          wrap.appendChild(img);

          var ring = document.createElement("span");
          ring.className = "k-ring";
          ring.style.top = haloTop + "%";

          sway.appendChild(halo);
          sway.appendChild(beam);
          sway.appendChild(ropes);
          sway.appendChild(mount);
          sway.appendChild(wrap);
          sway.appendChild(ring);
          swing.appendChild(sway);
          btn.appendChild(swing);

          var pool = document.createElement("span");
          pool.className = "k-pool";
          btn.appendChild(pool);

          lanternsBox.appendChild(btn);

          return {
            data: data, i: i, x: startX[i],
            b: 0, bt: 0, level: 1, angle: 0, av: 0,
            els: { btn: btn, swing: swing, pool: pool, halo: halo, beam: beam, mount: mount, ropes: ropeLines }
          };
        });

        /* ---------- Rope geometry ----------
           Each rope starts at the middle of the rail (y = 18px) and runs
           straight to its Lantern's real top point, measured from the photo
           itself (ax / ay, or the V corners in v), so every rope is solid,
           centred on the Lantern it holds, and actually reaches it — at any
           stage size. Recomputed on resize. */
        function setRopeLine(line, x1, y1, x2, y2) {
          line.setAttribute("x1", x1.toFixed(1));
          line.setAttribute("y1", y1.toFixed(1));
          line.setAttribute("x2", x2.toFixed(1));
          line.setAttribute("y2", y2.toFixed(1));
        }

        function layoutRopes() {
          var stageW = stageBox.clientWidth;
          var stageH = stageBox.clientHeight;
          if (!stageW || !stageH) return;
          var btnW = stageW * 0.13;
          lamps.forEach(function (lamp) {
            var d = lamp.data;
            var imgW = (d.w / 100) * btnW;
            var imgH = imgW * d.ratio;
            var imgLeft = (btnW - imgW) / 2;
            var imgTop = (d.top / 100) * stageH;
            var lines = lamp.els.ropes;
            if (d.v) {
              var lx = imgLeft + d.v[0] * imgW;
              var ly = imgTop + d.v[1] * imgH + 2;
              var rx = imgLeft + d.v[2] * imgW;
              var ry = imgTop + d.v[3] * imgH + 2;
              var apex = (lx + rx) / 2;
              setRopeLine(lines[0], apex, 18, lx, ly);
              setRopeLine(lines[1], apex, 18, rx, ry);
              lamp.els.mount.style.left = (apex / btnW * 100) + "%";
            } else {
              var x = imgLeft + d.ax * imgW;
              var y = imgTop + d.ay * imgH + 2;
              setRopeLine(lines[0], x, 18, x, y);
              lamp.els.mount.style.left = (x / btnW * 100) + "%";
            }
          });
        }
        window.addEventListener("resize", layoutRopes);

        /* ---------- Info panel ---------- */
        var infoSwap = document.getElementById("infoSwap");
        var infoKicker = document.getElementById("infoKicker");
        var infoName = document.getElementById("infoName");
        var infoDesc = document.getElementById("infoDesc");
        var brightFill = document.getElementById("brightFill");
        var brightPct = document.getElementById("brightPct");
        var featured = -1;

        /* ---------- Catalog detail (Section 2) ---------- */
        var SHAPES = ["Hexagonal Lantern", "Diamond Lantern", "Hexagonal Lantern", "Square Lantern", "Round Globe Lantern", "Hexagonal Lantern", "Diamond Lantern", "Star Lantern"];
        var GLOWS = [
          { name: "Warm Gold", hex: "#f0a83e" },
          { name: "Rose Pink", hex: "#e84393" },
          { name: "Emerald Green", hex: "#12b76a" },
          { name: "Royal Violet", hex: "#6a5cff" }
        ];
        var catalogMedia = document.getElementById("catalogMedia");
        var catalogGlow = document.getElementById("catalogGlow");
        var catalogImg = document.getElementById("catalogImg");
        var catalogSwap = document.getElementById("catalogSwap");
        var catalogKicker = document.getElementById("catalogKicker");
        var catalogTitle = document.getElementById("catalogTitle");
        var catalogName = document.getElementById("catalogName");
        var catalogDesc = document.getElementById("catalogDesc");
        var glowName = document.getElementById("glowName");
        var swatchBtns = Array.prototype.slice.call(document.querySelectorAll(".swatch"));
        var glowIndex = 0;

        function hexToRgba(hex, a) {
          var n = parseInt(hex.slice(1), 16);
          return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
        }

        function setGlow(idx) {
          glowIndex = ((idx % GLOWS.length) + GLOWS.length) % GLOWS.length;
          var g = GLOWS[glowIndex];
          catalogMedia.style.setProperty("--glow", g.hex);
          catalogGlow.style.background = "radial-gradient(circle, " + hexToRgba(g.hex, 0.55) + " 0%, " + hexToRgba(g.hex, 0.22) + " 48%, " + hexToRgba(g.hex, 0) + " 72%)";
          catalogImg.style.filter = "drop-shadow(0 0 26px " + hexToRgba(g.hex, 0.55) + ") drop-shadow(0 14px 30px " + hexToRgba(g.hex, 0.3) + ")";
          glowName.textContent = g.name;
          swatchBtns.forEach(function (s, j) {
            s.classList.toggle("active", j === glowIndex);
            s.setAttribute("aria-pressed", j === glowIndex ? "true" : "false");
          });
        }

        swatchBtns.forEach(function (s) {
          s.addEventListener("click", function () { setGlow(parseInt(s.getAttribute("data-color"), 10)); });
        });

        /* ---------- Celebration video (Buy a Free Lantern) ---------- */
        var videoOverlay = document.getElementById("videoOverlay");
        var celebrationVideo = document.getElementById("celebrationVideo");
        var videoLoader = document.getElementById("videoLoader");
        var buyBtn = document.getElementById("colorCycleBtn");
        var lastFocus = null;

        function hideLoader() {
          if (videoLoader) videoLoader.classList.add("hidden");
        }
        function showLoader() {
          if (videoLoader) videoLoader.classList.remove("hidden");
        }

        if (celebrationVideo) {
          celebrationVideo.addEventListener("playing", hideLoader);
          celebrationVideo.addEventListener("canplay", hideLoader);
          celebrationVideo.addEventListener("waiting", showLoader);
        }

        function openCelebration() {
          lastFocus = document.activeElement;
          videoOverlay.hidden = false;
          requestAnimationFrame(function () { videoOverlay.classList.add("open"); });
          document.body.style.overflow = "hidden";
          showLoader();

          if (celebrationVideo.readyState >= 1) {
            try { celebrationVideo.currentTime = 0; } catch (err) {}
          }
          var p = celebrationVideo.play();
          if (p && p.catch) {
            p.catch(function () {
              // If browser blocks audio autoplay, fallback to muted so playback starts instantly
              celebrationVideo.muted = true;
              celebrationVideo.play().then(hideLoader).catch(hideLoader);
            });
          }
          document.getElementById("videoClose").focus();
        }

        function closeCelebration() {
          videoOverlay.classList.remove("open");
          videoOverlay.hidden = true;
          celebrationVideo.pause();
          if (celebrationVideo.readyState >= 1) {
            try { celebrationVideo.currentTime = 0; } catch (err) {}
          }
          document.body.style.overflow = "";
          if (lastFocus && lastFocus.focus) lastFocus.focus();
        }

        buyBtn.addEventListener("click", openCelebration);
        document.getElementById("videoClose").addEventListener("click", closeCelebration);
        videoOverlay.addEventListener("click", function (e) {
          if (e.target === videoOverlay) closeCelebration(); // click outside the video closes
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && !videoOverlay.hidden) closeCelebration();
        });

        function updateCatalog(i) {
          var d = LANTERNS[i];
          catalogImg.src = d.img;
          catalogImg.alt = d.alt;
          catalogKicker.textContent = "Catalog · Lantern " + (i + 1) + " of 8";
          catalogTitle.textContent = SHAPES[i] + " · " + d.finish;
          catalogName.textContent = d.name;
          catalogDesc.textContent = d.desc;
          catalogSwap.classList.remove("catalog-swap");
          catalogMedia.classList.remove("catalog-swap");
          void catalogSwap.offsetWidth;
          catalogSwap.classList.add("catalog-swap");
          catalogMedia.classList.add("catalog-swap");
        }

        function scrollToCatalog() {
          document.getElementById("catalog").scrollIntoView({ behavior: reduced.matches ? "auto" : "smooth", block: "start" });
        }

        var cards = [];
        function refreshCards() {
          cards.forEach(function (c, i) {
            c.classList.toggle("active", i === featured);
          });
        }

        function selectLamp(i, lightIt) {
          var lamp = lamps[i];
          if (lightIt !== false) lamp.bt = Math.max(lamp.bt, lamp.level * 0.92 + 0.08);
          lamps.forEach(function (l, j) {
            if (j !== i) l.bt = 0;
            l.els.btn.classList.toggle("lit", j === i);
          });
          lamp.av += (Math.random() > 0.5 ? 1 : -1) * 10; // little swing as it catches the eye
          if (i === featured) { refreshCards(); return; }
          featured = i;
          infoKicker.textContent = "Now glowing · Lantern " + (i + 1) + " of 8";
          infoName.textContent = lamp.data.name + " — " + lamp.data.finish;
          infoDesc.textContent = lamp.data.desc;
          infoSwap.classList.remove("info-swap");
          void infoSwap.offsetWidth;
          infoSwap.classList.add("info-swap");
          updateCatalog(i);
          refreshCards();
        }

        /* ---------- Pointer interaction ---------- */
        var drag = null;
        var lastDragMoved = false;

        function stageRect() { return stageBox.getBoundingClientRect(); }
        function toPctX(clientX) {
          var r = stageRect();
          return (clientX - r.left) / r.width * 100;
        }

        lamps.forEach(function (lamp) {
          var btn = lamp.els.btn;

          btn.addEventListener("pointerenter", function (e) {
            if (e.pointerType === "mouse" && !drag) selectLamp(lamp.i);
          });

          btn.addEventListener("pointerdown", function (e) {
            if (e.button !== undefined && e.button > 0) return;
            drag = {
              lamp: lamp, id: e.pointerId,
              startClientX: e.clientX, startClientY: e.clientY,
              startX: lamp.x, startLevel: lamp.level, moved: 0
            };
            try { btn.setPointerCapture(e.pointerId); } catch (err) {}
            selectLamp(lamp.i);
            e.preventDefault();
          });

          btn.addEventListener("pointermove", function (e) {
            if (!drag || drag.id !== e.pointerId || drag.lamp !== lamp) return;
            var r = stageRect();
            var dxPct = toPctX(e.clientX) - toPctX(drag.startClientX);
            var dyPx = e.clientY - drag.startClientY;
            drag.moved = Math.max(drag.moved, Math.abs(dxPct), Math.abs(dyPx));

            var target = drag.startX + dxPct;
            target = Math.max(6.5, Math.min(93.5, target));
            lamps.forEach(function (o) {
              if (o === lamp) return;
              if (Math.abs(target - o.x) < 11.5) {
                target = o.x + (target > o.x ? 11.5 : -11.5);
              }
            });
            target = Math.max(6.5, Math.min(93.5, target));
            lamp.av += (target - lamp.x) * 0.35;
            lamp.x = target;
            btn.style.left = lamp.x + "%";

            // Lift to dim, press down to brighten
            lamp.level = Math.max(0.08, Math.min(1, drag.startLevel + dyPx / (r.height * 0.55)));
            if (lamp.i === featured) lamp.bt = lamp.level;
          });

          function endDrag(e, cancelled) {
            if (!drag || drag.id !== e.pointerId || drag.lamp !== lamp) return;
            var wasDrag = drag.moved > 6;
            lastDragMoved = wasDrag;
            drag = null;
            if (!cancelled && !wasDrag) selectLamp(lamp.i); // simple tap / click
            if (!cancelled && wasDrag) lamp.bt = Math.max(lamp.bt, lamp.level * 0.3);
          }
          btn.addEventListener("pointerup", function (e) { endDrag(e, false); });
          btn.addEventListener("pointercancel", function (e) { endDrag(e, true); });

          btn.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              var n = (lamp.i + (e.key === "ArrowRight" ? 1 : -1) + lamps.length) % lamps.length;
              lamps[n].els.btn.focus();
              selectLamp(n);
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
              lamp.level = Math.max(0.08, Math.min(1, lamp.level + (e.key === "ArrowDown" ? 0.12 : -0.12)));
              if (lamp.i !== featured) selectLamp(lamp.i, false);
              lamp.bt = lamp.level;
            }
          });
          btn.addEventListener("click", function () {
            selectLamp(lamp.i);
            if (!lastDragMoved) scrollToCatalog(); // a real click sends this Lantern to the catalog below
            lastDragMoved = false;
          });
        });

        /* ---------- Collection cards ---------- */
        var grid = document.getElementById("grid");
        LANTERNS.forEach(function (data, i) {
          var card = document.createElement("button");
          card.type = "button";
          card.className = "card";
          card.setAttribute("aria-label", "Light the " + data.name + " on the track");
          var thumb = document.createElement("div");
          thumb.className = "thumb";
          var im = document.createElement("img");
          im.src = data.img;
          im.alt = data.alt;
          im.loading = "lazy";
          thumb.appendChild(im);
          card.appendChild(thumb);

          var h = document.createElement("h3");
          h.textContent = data.name;
          card.appendChild(h);
          var f = document.createElement("div");
          f.className = "finish";
          f.textContent = data.finish;
          card.appendChild(f);
          var row = document.createElement("div");
          row.className = "row";
          var t = document.createElement("span");
          t.className = "try";
          t.textContent = "Light it ↑";
          row.appendChild(t);
          card.appendChild(row);

          card.addEventListener("click", function () {
            selectLamp(i);
            scrollToCatalog();
          });
          grid.appendChild(card);
          cards.push(card);
        });

        /* ---------- Animation loop ---------- */
        var last = 0;
        function tick(now) {
          var dt = last ? Math.min((now - last) / 1000, 0.03) : 0.016;
          last = now;
          lamps.forEach(function (lamp) {
            // brightness easing
            var k = reduced.matches ? 1 : 1 - Math.exp(-dt * 7);
            lamp.b += (lamp.bt - lamp.b) * k;
            if (Math.abs(lamp.bt - lamp.b) < 0.002) lamp.b = lamp.bt;

            // swing spring (pivot at track)
            if (!reduced.matches) {
              lamp.av += (-lamp.angle * 120 - lamp.av * 7) * dt;
              lamp.angle += lamp.av * dt;
            } else {
              lamp.angle = 0;
            }
            lamp.els.swing.style.transform = "rotate(" + lamp.angle.toFixed(2) + "deg)";
            lamp.els.btn.style.setProperty("--b", lamp.b.toFixed(3));
            lamp.els.pool.style.opacity = (lamp.b * 0.8).toFixed(3);
            lamp.els.halo.style.opacity = (lamp.b * 0.9).toFixed(3);
            lamp.els.beam.style.opacity = (lamp.b * 0.85).toFixed(3);
          });

          if (featured >= 0) {
            var pct = Math.round(lamps[featured].b * 100);
            brightFill.style.width = pct + "%";
            brightPct.textContent = pct + "%";
          }
          requestAnimationFrame(tick);
        }

        layoutRopes();
        setGlow(0);
        selectLamp(0);
        lamps[0].b = 0.001;
        requestAnimationFrame(tick);
      })();

(function () {
        "use strict";
        var btn = document.getElementById("shareWishBtn");
        if (!btn) return;

        var SHARE_TEXT = "Happy Diwali! \uD83E\uDE94";

        function whatsappUrl() {
          var url = "";
          try { url = window.location.href; } catch (e) { url = ""; }
          var message = url ? SHARE_TEXT + " " + url : SHARE_TEXT;
          return "https://wa.me/?text=" + encodeURIComponent(message);
        }
        function refreshLink() {
          btn.setAttribute("href", whatsappUrl());
        }
        refreshLink();
        btn.addEventListener("pointerdown", refreshLink);
        btn.addEventListener("focus", refreshLink);
        btn.addEventListener("click", refreshLink);
      })();