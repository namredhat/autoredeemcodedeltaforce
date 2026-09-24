(async function autoRedeemProUltra() {
    // ============ CẤU HÌNH GIFT CODE DỰ BÁO & CẬP NHẬT TỔNG HỢP ============
    const rawCodes = [
        // --- Danh sách gốc & Ảnh 1, 3 (117 Gift Code) ---
        "PWC260418S79", "PWC260418S84", "PWC260418S11", "PWC260418S72", "PWC260419S67",
        "PWC260419S84", "DFCCOPNOW111", "DFCCOPGIST88", "DFCCOPWORD1", "DFCCOPTOBE03",
        "DFCCOPPL4Y3R5", "DFDRAGONBOAT", "DFBrilliant165", "DFBeacon030", "DF1314754",
        "JGHMCmxYa6PLcFgvD9mg", "DFCL503", "DFanchor945", "DFdragon504", "DFCONCORD82",
        "ReturningWarrior3", "ReturningWarrior1", "fvezLxYajwVvSFSTSZ", "ReturningWarrior2",
        "Top1BXHVN", "A5Z1NDW8K3PJLU", "10KSUBSY0UTUBEDFTRNK", "daichienboba6228",
        "daichienboba2719", "daichienboba6167", "daichienmobile7095", "daichienmobile3325",
        "daichienmobile7362", "DFessence982", "DFserene218", "DFSpark119", "DFUltra220",
        "DFMagic057", "DFGalaxy250", "TrickOrTreat", "DFninja874", "DFRainbow356",
        "DFenergy428", "DFoasis407", "DFeternity717", "DFfantasy742", "DFrocket825",
        "DFclover812", "DFheroic668", "DFharbor738", "DFpromise643", "DFceleste516",
        "DFvivid061", "DFSH428", "DFmomentum423", "DFsymphony104", "DFHORIZON91",
        "DFINSIGHT48", "DFRESOLVE19", "DFEMBARK63", "DFmoment479", "DFASCEND72",
        "DFPARAGON41", "DFCATALYST87", "DFAXIOM33", "GADZEbra", "SsCkDfXY5AkZdqiJLKXq",
        "yWHtfsxYGRPZaVfLN82", "DFUTW260412S95", "DFUTW260412S36", "DFUTW260412S99",
        "DFELEVATE16", "DFAWAKEN56", "DFOS2ZK8VA", "DFOSL5Q7MN", "DFOSB4N9RD",
        "DFGENESIS05", "TRILLIONRAID300", "DFakaoniku", "MOILOOT65", "MOILOOT79",
        "TRILLIONRAID1000", "TRILLIONRAID600", "DFOSS260405B69", "DFOSS260405B58",
        "DFOSS260405B36", "N4SQWGxYcHw7gUC3bJy", "DFOutstanding056", "DFReliable732",
        "DFForever395", "DFExcellent659", "DFExceptional305", "DFRemarkable103",
        "DFFlash260", "DFHorizon503", "DFWizard309", "DFRL1017", "DFvoyage901",
        "DFjubilee594", "85ewN4xYhJfn6PkHADR", "DFclarity152", "DFUT2025FINALS1549",
        "DFUT2025PLAYOFF5910", "DFUT2025PLAYOFF9163", "DFUT2025PLAYOFF2509",
        "DFUT2025PLAYOFF4827", "DFUT2025PLAYOFF8051", "DFUT2025PLAYOFF5732",
        "DFUT2025PLAYOFF1276", "hjRtrKxYLmcTyCEy64H", "f2X6e3xY3pJDCE5T7P",
        "Bd52XmxYj2DFGCqnq4", "msz7hMxYyGhjp8ay7HpK", "DFOSS260404B57", "DFOSS260404B63",
        "DFOSS260404B47", "DFOSS260403B21", "DFOSS260403B33", "DFOSS260403B81",
        "DFOS7K2M9Q", "DFOS4XJ8PL", "DFOSW4D1YP", "DFsolace241", "PWC260419S21",
        "DFOSS260409S65",

        // --- Ảnh 2 (Bảng Code DFUTWQ & DFLUVUU) ---
        "DFUTWQ200838", "DFUTWQ200880", "DFUTWQ200889", "DFUTWQ210810",
        "DFUTWQ210833", "DFUTWQ210862", "DFUTWQ220857", "DFUTWQ220831",
        "DFUTWQ220811", "DFISTARRY939", "DFLUISHERE", "DFGKTK34", "DFLUVUU282",

        // --- Ảnh 4 (Bảng Tổng hợp Code mới nhất bổ sung) ---
        "PWC260419S65", "HEDELTAFORCE3630", "HEDELTAFORCE4583", "HEDELTAFORCE7563",
        "HEDELTAFORCE8781", "DFSIXMAJOR6", "VIP666SOLDF", "SOLPROMAJOR",
        "DFFILE274", "DFTRNG469", "MOILOOT92", "DFSIXVIP888", "ACESXMAJOR",
        "DFWEEK237", "SOLDFWIN360", "MOILOOT55", "MOILOOT68", "MOILOOT48",
        "MOILOOT02", "MOILOOT04", "MOILOOT60", "MOILOOT45", "DFCRAFT427",
        "DFPACK293", "SIXMAJORMVP", "VIP777SIXDF", "DFARMX46", "DFAMM008",
        "DFTURING09", "HEDELTAFORCE8032", "HEDELTAFORCE9026", "POC3105S95",
        "POC3105S96", "POC3105S73", "POC3105S64", "POC3105S31", "POC3105S90",
        "POC3005S19", "POC3005S52", "POC3005S99", "POC3005S59", "POC3005S53",
        "POC3005S51", "DFWITNESS77", "DFOS3FZ9LK", "DFOS7Q2VXA",
        "aCuQjtxY7vXGjXCTBnQU", "DFVANGUARD76", "GARENADFNY2501E034",
        "GARENADFNY2501H258", "C7S2X9J5D4B1V3Q", "GARENADFCBT2503Z6T9",
        "GARENADFCBT2503X9D1", "GARENADFCBT2503C3F4", "GARENADFID2501V621",
        "GARENADFID2501L983", "GARENADFID2501R572", "DELTAFORCEVN_8MD718JT4GR",
        "DELTAFORCEVN_95S092Y9T9D", "DELTAFORCEVN_6AVHJ6MYX6Y",
        "DELTAFORCEVN_540VN2S550U", "DFUTSCARH", "DFUTWEAPON", "DFUTGEARTICKET",
        "DFUTINTERMEDIATE", "DFUTSUPPYPACK", "DFUTARMAMENT", "MOBILE0123",
        "DFUTS26QL3101C64", "DFUTS26QL3101C38", "DFUTS26QL3001C47", "DFUTS26QL1",
        "DFUTS26QL6", "DFUTS26QL5", "DFUTS26GR2702C44", "DFUTS26GR2702C57",
        "DFUTS26GR2702C92", "DFUTS26GR2802C23", "DFUTS26GR2802C66", "DFUTS26GR2802C78",
        "DFUTS26GR0103C35", "DFUTS26GR0103C81", "DFUTS26GR0103C49", "DFUTS26GR0703C34",
        "DFUTS26GR0703C96", "DFUTS26GR1203C72", "DFUTS26GR1203C83", "DFUTS26GR1203C46",
        "DFUTS26GR1303C65", "DFUTS26GR1303C39", "DFUTS26GR1303C98", "DFUTS26GR1403C24",
        "DFUTS26GR1403C87", "DFUTS26GR1403C52", "DFCC0001", "DFCCEIET01", "DFCCHAHA5",
        "DFUTS26GR1503C33", "DFUTS26GR1503C91", "DFUTS26GR1503C74", "LAISEGAME",
        "DFUTS26PL2103C32", "DFUTS26PL2103C41", "DFUTS26PL2103C68", "DFUTS26PL2103C54",
        "DFUTS26PL2103C85", "DFUTS26PL2103C90", "DFUTS26PL2203C28", "DFUTS26PL2203C43",
        "DFUTS26PL2203C61", "DFUTS26PL2203C77", "DFUTS26PL2203C86", "DFUTS26PL2203C95",
        "DFVS3S7FR4", "DFVS8T9SZ4", "DFVSH5N4C7", "DFVSU2X6M8", "DFVSW1C5D9",
        "DFVSE4K7G1", "DFCCOPWINEIEI", "DF425SOL", "DFWIN777", "DFHUNTER666",
        "DFAIM666", "DFGOGOGO425", "DFGiveMeBrick425", "DFLuckylucky425", "DF425BountyS2",
        "DF51login51login", "DFVICTORY11", "DFWEAPON91", "SVBesCXYcSAn6LCD4TP",
        "L34m5GxYjnPkXzckgDEB", "XufJgVxYrFCTM5heBT3B", "DFOSB6T3WZ", "DFOS9R2HXC",
        "DFOS3Y8KLM",

        // --- Ảnh 5 (Gift Code cập nhật 1/9 bổ sung) ---
        "POC3105S52", "POC3105S59", "POC3105S51", "DFSL1629", "DFRIDEORDIE5215",
        "DFRIDEORDIE4078", "DFWPNX36", "DFBLKT42"
    ];

    // Lọc trùng lặp & xóa khoảng trắng thừa
    const giftCodes = [...new Set(rawCodes.map(c => c.trim()).filter(Boolean))];
    const DELAY_TIME = 650;
    const startTime = Date.now();

    // ============ UTILITIES ============
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 1000);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    };

    // ============ UI GLASSMORPHISM HIỆN ĐẠI ============
    const oldUi = document.getElementById("df-modern-ui");
    if (oldUi) oldUi.remove();

    const uiContainer = document.createElement("div");
    uiContainer.id = "df-modern-ui";

    const htmlContent = `
    <style>
        .df-modern-container {
            position: fixed;
            top: 24px;
            right: 24px;
            z-index: 9999999;
            width: 320px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #f1f5f9;
            animation: dfSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dfSlideIn {
            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes dfPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes dfShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        .df-card {
            background: rgba(15, 23, 42, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 20px;
            padding: 18px 20px;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6),
                        0 0 15px rgba(34, 197, 94, 0.15);
        }

        .df-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            margin-bottom: 14px;
        }

        .df-title {
            font-size: 11.5px;
            font-weight: 800;
            letter-spacing: 0.4px;
            background: linear-gradient(135deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-width: 0;
            flex: 1;
        }

        .df-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 3px 8px;
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid rgba(34, 197, 94, 0.3);
            border-radius: 20px;
            font-size: 10.5px;
            font-weight: 700;
            color: #4ade80;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            height: 22px;
            box-sizing: border-box;
        }

        .df-dot {
            width: 6px;
            height: 6px;
            background-color: #22c55e;
            border-radius: 50%;
            animation: dfPulse 1.5s infinite ease-in-out;
            box-shadow: 0 0 8px #22c55e;
        }

        .df-progress-section {
            margin-bottom: 14px;
        }

        .df-progress-info {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #94a3b8;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .df-progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .df-progress {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #22c55e, #38bdf8);
            background-size: 200% 100%;
            animation: dfShimmer 2s infinite linear;
            border-radius: 10px;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .df-current-box {
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .df-current-label {
            font-size: 10px;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .df-current-code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 13px;
            font-weight: 700;
            color: #38bdf8;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .df-current-code.success { color: #4ade80; }

        .df-toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            padding: 12px 20px;
            background: rgba(15, 23, 42, 0.9);
            border: 1px solid #22c55e;
            border-radius: 12px;
            color: #4ade80;
            font-size: 13px;
            font-weight: 700;
            z-index: 9999999;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            animation: dfSlideIn 0.3s ease-out;
        }
    </style>

    <div class="df-modern-container">
        <div class="df-card">
            <div class="df-header">
                <div class="df-title" title="DELTA FORCE // AUTO REDEEM">DELTA FORCE // AUTO REDEEM</div>
                <div class="df-badge">
                    <div class="df-dot" id="status-dot"></div>
                    <span id="status-text">Đang chạy</span>
                </div>
            </div>

            <div class="df-progress-section">
                <div class="df-progress-info">
                    <span id="ui-percent-label">0 / ${giftCodes.length}</span>
                    <span id="ui-time">0s</span>
                </div>
                <div class="df-progress-bar">
                    <div id="ui-progress" class="df-progress"></div>
                </div>
            </div>

            <div class="df-current-box">
                <div class="df-current-label">Code hiện tại</div>
                <div id="ui-current-code" class="df-current-code">-</div>
            </div>
        </div>
    </div>
    `;

    uiContainer.innerHTML = htmlContent;
    document.body.appendChild(uiContainer);

    // ============ DOM REFERENCES ============
    const uiProgress = document.getElementById("ui-progress");
    const uiPercentLabel = document.getElementById("ui-percent-label");
    const uiCurrentCode = document.getElementById("ui-current-code");
    const uiTime = document.getElementById("ui-time");
    const statusText = document.getElementById("status-text");
    const statusDot = document.getElementById("status-dot");

    const showToast = (message) => {
        const toast = document.createElement("div");
        toast.className = "df-toast";
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    };

    // ============ INPUT MANIPULATION ============
    const setInputValue = (inputEl, value) => {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(inputEl, value);
        inputEl.dispatchEvent(new Event("input", { bubbles: true }));
        inputEl.dispatchEvent(new Event("change", { bubbles: true }));
    };

    const closePopupImmediately = () => {
        const closeSelectors = [
            "a.btn-close", ".popup-close", ".modal-close", 
            '[class*="close"]', ".btn-cancel", "[aria-label*='Close']"
        ];
        for (const selector of closeSelectors) {
            const btn = document.querySelector(selector);
            if (btn && typeof btn.click === "function" && btn.offsetWidth > 0) {
                btn.click();
                return true;
            }
        }
        return false;
    };

    const observer = new MutationObserver(() => closePopupImmediately());
    observer.observe(document.body, { childList: true, subtree: true });

    // Tìm ô nhập & nút bấm linh hoạt
    const inputEl = document.querySelector('input[type="text"]') || document.querySelector("input:not([type='hidden'])");
    const submitBtn = document.querySelector("a.btn-exchange") || 
                      document.querySelector('button[type="submit"]') || 
                      document.querySelector(".btn-submit") ||
                      document.querySelector("button");

    if (!inputEl || !submitBtn) {
        observer.disconnect();
        showToast("❌ Không tìm thấy ô nhập code hoặc nút gửi!");
        uiContainer.remove();
        return;
    }

    // ============ REDEEM LOOP ============
    for (let i = 0; i < giftCodes.length; i++) {
        const code = giftCodes[i];
        closePopupImmediately();

        // Update UI
        uiCurrentCode.textContent = code;
        const pct = Math.round(((i + 1) / giftCodes.length) * 100);
        uiProgress.style.width = pct + "%";
        uiPercentLabel.textContent = `${i + 1} / ${giftCodes.length} (${pct}%)`;

        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        uiTime.textContent = formatTime(elapsed * 1000);

        // Redeem
        setInputValue(inputEl, code);
        submitBtn.click();

        await sleep(DELAY_TIME);
    }

    observer.disconnect();

    // ============ COMPLETION ============
    closePopupImmediately();
    uiCurrentCode.textContent = "🎉 Hoàn thành toàn bộ!";
    uiCurrentCode.classList.add("success");
    statusText.textContent = "Hoàn thành";
    statusDot.style.backgroundColor = "#38bdf8";
    statusDot.style.boxShadow = "0 0 8px #38bdf8";
    
    showToast("🎉 Đã tự động nhập xong toàn bộ code!");
    setTimeout(() => uiContainer.remove(), 4000);
})();