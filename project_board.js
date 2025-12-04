// Sample Data Structure
// Hierarchy: Project (Parent) Modules -> Core Functional Modules (Sub) -> Tasks
const defaultData = {
    project: {
        name: "关键节点flow",
    },
    parentModules: [
        { id: 'pm_default', name: 'S13赛季玩法' }
    ],
    modules: [
        { id: '1764583687011', parentId: 'pm_default', name: 'S13赛季玩法终局', color: '#218343', startDate: '2025-12-01', endDate: '2026-01-09' },
        { id: '1764584488915', parentId: 'pm_default', name: 'S13赛季玩法-异界', color: '#8ac15c', startDate: '2025-12-01', endDate: '2026-01-09' },
        { id: '1764584620826', parentId: 'pm_default', name: 'S13赛季玩法-打牌', color: '#42c26f', startDate: '2025-12-01', endDate: '2026-01-09' },
        { id: '1764584858712', parentId: 'pm_default', name: 'S13赛季玩法-整体流程正式化', color: '#5bc17f', startDate: '2025-12-01', endDate: '2026-01-09' }
    ],
    tasks: [
        {
            id: '1764583869300',
            content: '数值相对完全正式化',
            moduleId: '1764583687011',
            status: 'done',
            startDate: '',
            endDate: '2025-12-01',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764583891985',
            content: '战斗体验相对完全正式化',
            moduleId: '1764583687011',
            status: 'done',
            startDate: '2025-12-02',
            endDate: '2025-12-02',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764583931015',
            content: '流程体验相对完全正式化',
            moduleId: '1764583687011',
            status: 'pending',
            startDate: '2025-12-03',
            endDate: '2025-12-04',
            duration: 1,
            dependencies: ['1764583869300', '1764583891985']
        },
        {
            id: '1764584530494',
            content: '异界-战斗体验正式化及验收',
            moduleId: '1764584488915',
            status: 'doing',
            startDate: '',
            endDate: '2025-12-05',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764584562933',
            content: '异界-掉落正式化',
            moduleId: '1764584488915',
            status: 'pending',
            startDate: '',
            endDate: '2025-12-05',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764584675440',
            content: '数值平衡性调整初版',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-01',
            endDate: '2025-12-03',
            duration: 2.5,
            dependencies: []
        },
        {
            id: '1764584724781',
            content: '数值平衡性正式版1',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-04',
            endDate: '2025-12-05',
            duration: 2,
            dependencies: []
        },
        {
            id: '1764584967240',
            content: '初版可体验流程',
            moduleId: '1764584858712',
            status: 'pending',
            startDate: '',
            endDate: '2025-12-05',
            duration: 0,
            dependencies: [
                '1764583869300',
                '1764583891985',
                '1764583931015',
                '1764584530494',
                '1764584562933',
                '1764584675440'
            ]
        },
        {
            id: '1764585065701',
            content: '基本正式数值体验版',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-08',
            endDate: '2025-12-12',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585153120',
            content: '公司体验',
            moduleId: '1764584858712',
            status: 'pending',
            startDate: '2025-12-08',
            endDate: '2025-12-12',
            duration: 1,
            dependencies: ['1764584967240']
        },
        {
            id: '1764585233265',
            content: '打牌体验调整',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-15',
            endDate: '2025-12-19',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585282446',
            content: '打牌终版（仅修BUG及小调整）',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-22',
            endDate: '2025-12-26',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585334906',
            content: '打牌正式版',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2025-12-29',
            endDate: '2026-01-02',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585382651',
            content: '打牌修bug冗余',
            moduleId: '1764584620826',
            status: 'pending',
            startDate: '2026-01-05',
            endDate: '2026-01-09',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585685123',
            content: '异界-特效整体优化',
            moduleId: '1764584488915',
            status: 'pending',
            startDate: '2025-12-10',
            endDate: '2025-12-12',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585730129',
            content: '终局-特效优化',
            moduleId: '1764583687011',
            status: 'pending',
            startDate: '2025-12-10',
            endDate: '2025-12-12',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585763080',
            content: '特殊边界处理（非正常流程）',
            moduleId: '1764583687011',
            status: 'pending',
            startDate: '',
            endDate: '',
            duration: 1,
            dependencies: []
        },
        {
            id: '1764585898566',
            content: '终局-体验细节优化',
            moduleId: '1764583687011',
            status: 'pending',
            startDate: '2025-12-08',
            endDate: '2025-12-12',
            duration: 5,
            dependencies: []
        }
    ]
};

let data = JSON.parse(JSON.stringify(defaultData));
let currentView = 'board'; 
let ganttInstance = null;
let ganttMode = 'Day';

// --- Cloud Sync Logic (JSONBin & Custom) ---
function isDefaultDataset(dataset) {
    if (!dataset) return true;
    const hasTasks = dataset.tasks && dataset.tasks.length > 0;
    const meaningfulName = dataset.project && dataset.project.name && !["演示大事件", "未命名项目", "Project Flow"].includes(dataset.project.name);
    return !(hasTasks || meaningfulName);
}
const SERVER_BASE = window.location.protocol === 'file:' ? 'http://localhost:8000' : '';
const LOCAL_API_URL = `${SERVER_BASE}/api/data`;
const LOCAL_HEALTH_URL = `${SERVER_BASE}/api/health`;

const DEFAULT_CLOUD_CONFIG = {
    type: 'jsonbin',
    binId: '692ff62eae596e708f804387',
    apiKey: '$2a$10$6XjqsiDTFWsfHa5EnTtgWuuLPhUikpZ.P4y3qIWyDS69ajtAcfJWO'
};

let useServer = false;
let currentCloudConfig = null; // { type: 'jsonbin', binId, apiKey } or { type: 'custom', url }
let initialServerSyncDone = false;

function ensureCloudConfig(config) {
    if (!config || typeof config !== 'object') return { ...DEFAULT_CLOUD_CONFIG };
    const merged = { ...DEFAULT_CLOUD_CONFIG, ...config };
    if (!merged.binId || !merged.apiKey) {
        merged.binId = DEFAULT_CLOUD_CONFIG.binId;
        merged.apiKey = DEFAULT_CLOUD_CONFIG.apiKey;
    }
    if (merged.type === 'custom' && !merged.url) {
        console.warn('自定义云端未填写 URL，已自动回退到 JSONBin');
        merged.type = 'jsonbin';
        delete merged.url;
    }
    return merged;
}

function loadCloudConfig() {
    try {
        const savedConfig = localStorage.getItem('cloud-config');
        if (savedConfig) {
            currentCloudConfig = ensureCloudConfig(JSON.parse(savedConfig));
        } else {
            currentCloudConfig = { ...DEFAULT_CLOUD_CONFIG };
            localStorage.setItem('cloud-config', JSON.stringify(currentCloudConfig));
        }
    } catch (e) {
        currentCloudConfig = { ...DEFAULT_CLOUD_CONFIG };
    }
}

loadCloudConfig();

async function checkServer() {
    // 1. Check Cloud First
    if (currentCloudConfig) {
        useServer = true; // Treat cloud as "Server"
        updateConnectionStatus();
        return;
    }

    // 2. Fallback to Local Server
    try {
        const res = await fetch(LOCAL_HEALTH_URL);
        useServer = res.ok;
    } catch (e) {
        useServer = false;
    }
    updateConnectionStatus();
}

async function fetchFromCloud() {
    if (!currentCloudConfig) return null;

    try {
        if (currentCloudConfig.type === 'jsonbin') {
            const res = await fetch(`https://api.jsonbin.io/v3/b/${currentCloudConfig.binId}/latest`, {
                headers: {
                    'X-Master-Key': currentCloudConfig.apiKey,
                    'X-Access-Key': currentCloudConfig.apiKey,
                    'Cache-Control': 'no-cache'
                }
            });
            if (!res.ok) throw new Error('JSONBin Error');
            const json = await res.json();
            return json.record; // JSONBin v3 wraps data in "record"
        } else if (currentCloudConfig.type === 'custom') {
            const res = await fetch(currentCloudConfig.url);
            if (!res.ok) throw new Error('Custom API Error');
            return await res.json();
        }
    } catch (e) {
        console.error("Cloud Fetch Error", e);
        alert("无法连接到云端存储，请检查配置！");
        return null;
    }
}

async function saveToCloud(dataToSave) {
    if (!currentCloudConfig) return false;

    try {
        if (currentCloudConfig.type === 'jsonbin') {
            const res = await fetch(`https://api.jsonbin.io/v3/b/${currentCloudConfig.binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': currentCloudConfig.apiKey,
                    'X-Access-Key': currentCloudConfig.apiKey,
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(dataToSave)
            });
            return res.ok;
        } else if (currentCloudConfig.type === 'custom') {
            const res = await fetch(currentCloudConfig.url, {
                method: 'POST', // Assume POST for custom
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSave)
            });
            return res.ok;
        }
    } catch (e) {
        console.error("Cloud Save Error", e);
        return false;
    }
}

function updateConnectionStatus() {
    let statusEl = document.getElementById('connectionStatus');
    if (!statusEl) return;

    if (currentCloudConfig) {
        statusEl.textContent = '☁️ 已连接云端 (互联网模式)';
        statusEl.style.backgroundColor = '#cce5ff';
        statusEl.style.color = '#004085';
        statusEl.title = `数据存储在: ${currentCloudConfig.type}`;
    } else if (useServer) {
        statusEl.textContent = '🟢 已连接服务器 (局域网模式)';
        statusEl.style.backgroundColor = '#d4edda';
        statusEl.style.color = '#155724';
        statusEl.title = '数据实时保存在本地服务器';
    } else {
        statusEl.textContent = '⚪ 本地单机模式';
        statusEl.style.backgroundColor = '#f8f9fa';
        statusEl.style.color = '#6c757d';
        statusEl.title = '数据仅保存在您的浏览器中';
    }
}

// --- Core Logic ---

function normalizeDataset(dataset) {
    if (!dataset || typeof dataset !== 'object') return null;
    const normalized = {
        project: dataset.project ? { ...dataset.project } : { name: '未命名项目' },
        parentModules: Array.isArray(dataset.parentModules) ? [...dataset.parentModules] : [],
        modules: Array.isArray(dataset.modules) ? [...dataset.modules] : [],
        tasks: Array.isArray(dataset.tasks) ? [...dataset.tasks] : []
    };

    if (!normalized.project.name) normalized.project.name = '未命名项目';

    if (normalized.modules.length > 0 && normalized.parentModules.length === 0) {
        const fallbackParent = { id: 'pm_default', name: '默认项目模块' };
        normalized.parentModules.push(fallbackParent);
        normalized.modules = normalized.modules.map(m => ({
            ...m,
            parentId: m.parentId || fallbackParent.id
        }));
    }

    return normalized;
}

async function loadData() {
    await checkServer();

    const fallbackToDefault = () => {
        data = JSON.parse(JSON.stringify(defaultData));
        console.warn('Cloud数据不可用，已回退到内置示例数据');
    };

    if (currentCloudConfig) {
        const serverData = await fetchFromCloud();
        const normalized = normalizeDataset(serverData);
        if (normalized) {
            data = normalized;
            console.log('已从云端加载数据');
            return;
        }
        fallbackToDefault();
        return;
    }

    if (useServer) {
        try {
            const res = await fetch(LOCAL_API_URL);
            if (res.ok) {
                const dataset = await res.json();
                const normalized = normalizeDataset(dataset);
                if (normalized) {
                    data = normalized;
                    console.log('已从局域网服务器加载数据');
                    return;
                }
            }
        } catch (e) {
            console.error('局域网服务器不可用', e);
        }
    }

    fallbackToDefault();
}


async function saveData() {
    if (currentCloudConfig) {
        const ok = await saveToCloud(data);
        if (!ok) {
            const statusEl = document.getElementById('connectionStatus');
            if (statusEl) {
                statusEl.textContent = '⚠️ 云端同步失败';
                statusEl.style.backgroundColor = '#fff3cd';
                statusEl.style.color = '#856404';
            }
        } else {
            updateConnectionStatus();
        }
    } else if (useServer) {
        try {
            await fetch(LOCAL_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            updateConnectionStatus(); // Update status/icon to show synced?
        } catch (e) {
            console.error("Failed to save to server", e);
            const statusEl = document.getElementById('connectionStatus');
            if (statusEl) {
                statusEl.textContent = '⚠️ 局域网同步失败';
                statusEl.style.backgroundColor = '#fff3cd';
                statusEl.style.color = '#856404';
            }
        }
    }
    render();
}

async function fetchServerDataset() {
    if (currentCloudConfig) {
        return await fetchFromCloud();
    } else if (useServer) {
        try {
            const res = await fetch(LOCAL_API_URL);
            if (res.ok) {
                return await res.json();
            }
        } catch (e) {
            console.error("Local server fetch error", e);
        }
    }
    return null;
}

async function syncFromServer(silent = false) {
    const dataset = await fetchServerDataset();
    const normalized = normalizeDataset(dataset);
    if (normalized) {
        data = normalized;
        if (!silent) {
            alert(currentCloudConfig ? '已从云端服务器加载数据！' : '已从本地服务器加载数据！');
        }
        return true;
    } else if (!silent) {
        alert('未连接任何服务器或服务器无数据');
    }
    return false;
}

function getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function checkDependencies(task) {
    if (!task.dependencies || task.dependencies.length === 0) {
        return { status: 'ok', blockedBy: [], riskBy: [] };
    }
    
    const today = getTodayString();
    const blockedBy = [];
    const riskBy = [];
    const taskNeedsStart = task.startDate && task.startDate <= today;

    task.dependencies.forEach(depId => {
        const depTask = data.tasks.find(t => t.id === depId);
        if (!depTask) return; 

        if (depTask.status === 'done') return;

        if (taskNeedsStart) {
            blockedBy.push(depTask.content);
        }

        if (depTask.endDate && depTask.endDate < today) {
            riskBy.push(depTask.content);
        }
    });

    let status = 'ok';
    if (blockedBy.length > 0) status = 'blocked';
    else if (riskBy.length > 0) status = 'risk';

    return { status, blockedBy, riskBy };
}

// --- View Switching ---

const viewBoardBtn = document.getElementById('viewBoardBtn');
if (viewBoardBtn) viewBoardBtn.addEventListener('click', () => switchView('board'));
const viewGanttBtn = document.getElementById('viewGanttBtn');
if (viewGanttBtn) viewGanttBtn.addEventListener('click', () => switchView('gantt'));

function switchView(view) {
    currentView = view;
    document.getElementById('viewBoardBtn').classList.toggle('active', view === 'board');
    document.getElementById('viewGanttBtn').classList.toggle('active', view === 'gantt');
    
    document.getElementById('boardContainer').style.display = view === 'board' ? 'flex' : 'none';
    document.getElementById('ganttContainer').style.display = view === 'gantt' ? 'flex' : 'none';

    render();
}

// --- Rendering ---

function render() {
    // Update Project Title
    const titleEl = document.getElementById('projectNameDisplay');
    if (titleEl) {
        titleEl.textContent = (data.project && data.project.name) ? `🚀 ${data.project.name}` : '🚀 Project Flow';
    }

    if (currentView === 'board') {
        renderBoard();
    } else {
        renderGantt();
    }
}

function renderBoard() {
    const container = document.getElementById('boardContainer');
    container.innerHTML = '';

    // Render by Parent Module Groups
    data.parentModules.forEach(pm => {
        const groupEl = document.createElement('div');
        groupEl.className = 'module-group';
        
        const header = document.createElement('div');
        header.className = 'module-group-header';
        header.innerHTML = `
            <span>📁 ${pm.name}</span>
            <div style="display:flex;gap:4px;">
                <button class="icon-btn edit-parent" data-id="${pm.id}" title="修改名称">✎</button>
                <button class="icon-btn delete-parent" data-id="${pm.id}" title="删除项目模块">×</button>
            </div>
        `;
        // Wire up delete button later
        
        const columnsContainer = document.createElement('div');
        columnsContainer.className = 'module-group-columns';

        // Find sub-modules
        const subModules = data.modules.filter(m => m.parentId === pm.id);
        // Sort sub-modules by date
        subModules.sort((a, b) => (a.startDate || '').localeCompare(b.startDate || ''));

        subModules.forEach(module => {
            const col = renderModuleColumn(module);
            columnsContainer.appendChild(col);
        });

        groupEl.appendChild(header);
        groupEl.appendChild(columnsContainer);
        container.appendChild(groupEl);
    });

    // Bind delete parent buttons
    container.querySelectorAll('.delete-parent').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            deleteParentModule(btn.dataset.id);
        };
    });

    // Bind edit parent buttons
    container.querySelectorAll('.edit-parent').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            editParentModule(btn.dataset.id);
        };
    });
}

function renderModuleColumn(module) {
    const column = document.createElement('div');
    column.className = 'module-column';
    column.style.borderTopColor = module.color;
    
    const header = document.createElement('div');
    header.className = 'module-header';
    header.onclick = () => openModuleModal(module.id);
    
    const title = document.createElement('div');
    title.className = 'module-title';
    title.innerHTML = `<span>${module.name}</span> <span style="font-size:0.8rem;opacity:0.6;">${getModuleStats(module.id)}</span>`;
    
    const dates = document.createElement('div');
    dates.className = 'module-dates';
    dates.innerHTML = `📅 ${module.startDate || 'TBD'} ~ ${module.endDate || 'TBD'}`;
    
    header.appendChild(title);
    header.appendChild(dates);
    column.appendChild(header);

    const body = document.createElement('div');
    body.className = 'module-body';

    const tasksInModule = data.tasks.filter(t => t.moduleId === module.id);
    tasksInModule.forEach(task => {
        const card = createTaskElement(task, module);
        body.appendChild(card);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'add-task-btn';
    addBtn.textContent = '+ 添加任务';
    addBtn.onclick = () => openTaskModal(null, module.id);
    
    body.appendChild(addBtn);
    column.appendChild(body);
    return column;
}

function getModuleStats(moduleId) {
    const tasks = data.tasks.filter(t => t.moduleId === moduleId);
    const total = tasks.length;
    if (total === 0) return '';
    const done = tasks.filter(t => t.status === 'done').length;
    return `${done}/${total}`;
}

function createTaskElement(task, module) {
    const depCheck = checkDependencies(task);
    const today = getTodayString();
    
    let cardClass = `task-card ${task.status}`;
    if (task.status !== 'done') {
        if (depCheck.status === 'blocked') cardClass += ' blocked';
        else if (depCheck.status === 'risk') cardClass += ' risk';
        if (task.endDate === today) cardClass += ' due-today';
    }

    const card = document.createElement('div');
    card.className = cardClass;

    card.onclick = (e) => {
        if (!e.target.classList.contains('task-checkbox')) {
            openTaskModal(task.id);
        }
    };

    const headerRow = document.createElement('div');
    headerRow.className = 'task-header-row';

    const checkbox = document.createElement('div');
    checkbox.className = `task-checkbox ${task.status === 'done' ? 'checked' : ''}`;
    checkbox.onclick = (e) => {
        e.stopPropagation();
        toggleTaskStatus(task.id);
    };

    headerRow.appendChild(checkbox);
    card.appendChild(headerRow);

    const title = document.createElement('div');
    title.className = 'task-title';
    title.textContent = task.content;
    card.appendChild(title);

    const bottom = document.createElement('div');
    bottom.className = 'task-meta-bottom';
    
    let dateInfo = '';
    if (task.endDate) {
        if (task.status !== 'done' && task.endDate === today) {
            dateInfo = `<span style="color:var(--info);font-weight:bold;">🔥 今天截止</span>`;
        } else {
            dateInfo = `⏱️ ${task.endDate.slice(5)}`;
        }
    }
    
    let depInfo = '';
    if (task.status !== 'done') {
        if (depCheck.status === 'blocked') {
            depInfo = `<span class="dep-badge blocked" title="阻塞原因: ${depCheck.blockedBy.join(', ')}">⛔ 阻塞</span>`;
        } else if (depCheck.status === 'risk') {
            depInfo = `<span class="dep-badge risk" title="风险原因: ${depCheck.riskBy.join(', ')}">⚠️ 风险</span>`;
        } else if (task.dependencies && task.dependencies.length > 0) {
            depInfo = `<span class="dep-badge" title="依赖项正常">🔗 ${task.dependencies.length}</span>`;
        }
    }

    bottom.innerHTML = `<span>${dateInfo}</span>${depInfo}`;
    card.appendChild(bottom);

    return card;
}

function toggleTaskStatus(taskId) {
    const task = data.tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === 'done' ? 'pending' : 'done';
        saveData();
    }
}

// --- Gantt Logic ---

function renderGantt() {
    // Dynamic CSS
    let styleTag = document.getElementById('gantt-dynamic-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'gantt-dynamic-styles';
        document.head.appendChild(styleTag);
    }
    
    let cssRules = '';
    data.modules.forEach(m => {
        const safeId = m.id.replace(/[^a-zA-Z0-9-_]/g, '');
        cssRules += `
            .gantt .bar-wrapper.module-${safeId} .bar { fill: ${m.color} !important; }
            .gantt .bar-wrapper.module-${safeId} .bar-progress { fill: rgba(255,255,255,0.3) !important; }
        `;
    });
    styleTag.innerHTML = cssRules;

    const ganttTasks = [];

    // Group by Parent Module -> Sub Module -> Tasks
    data.parentModules.forEach(pm => {
        // We could add a bar for Parent Module, but let's focus on Core Modules
        // Maybe just tasks, sorted by Parent/Sub logic
        const subModules = data.modules.filter(m => m.parentId === pm.id);
        
        subModules.forEach(m => {
            // Module Summary Bar
            if (m.startDate && m.endDate) {
                ganttTasks.push({
                    id: `MOD_${m.id}`,
                    name: `${pm.name} / ${m.name}`,
                    start: m.startDate,
                    end: m.endDate,
                    progress: 0,
                    dependencies: '',
                    custom_class: `module-${m.id} summary-bar`,
                    _isModule: true,
                    _original: m
                });
            }

            // Tasks
            const moduleTasks = data.tasks.filter(t => t.moduleId === m.id);
            moduleTasks.forEach(t => {
                let start = t.startDate || m.startDate || getTodayString();
                let end = t.endDate;
                
                if (!end) {
                    const d = new Date(start);
                    d.setDate(d.getDate() + (parseInt(t.duration) || 1));
                    end = d.toISOString().split('T')[0];
                }

                let progress = 0;
                if (t.status === 'done') progress = 100;
                else if (t.status === 'doing') progress = 50;

                ganttTasks.push({
                    id: t.id,
                    name: t.content,
                    start: start,
                    end: end,
                    progress: progress,
                    dependencies: t.dependencies ? t.dependencies.join(',') : '',
                    custom_class: `module-${m.id}`,
                    _original: t
                });
            });
        });
    });

    if (ganttTasks.length === 0) {
        document.getElementById('gantt').innerHTML = '<text x="50" y="50" fill="#9aa1b5">暂无数据。</text>';
        return;
    }

    document.querySelector('.gantt-wrapper').innerHTML = '<svg id="gantt"></svg>';

    ganttInstance = new Gantt("#gantt", ganttTasks, {
        header_height: 50,
        column_width: 30,
        step: 24,
        view_modes: ['Day', 'Week', 'Month'],
        bar_height: 25,
        bar_corner_radius: 3,
        arrow_curve: 5,
        padding: 18,
        view_mode: ganttMode,
        date_format: 'YYYY-MM-DD',
        language: 'zh',
        custom_popup_html: function(task) {
            const typeLabel = task.id.startsWith('MOD_') ? '核心功能' : '任务';
            return `
                <div class="popup-wrapper">
                    <div class="title">${typeLabel}: ${task.name}</div>
                    <div class="subtitle">
                        <div>时间: ${task.start} - ${task.end}</div>
                    </div>
                </div>
            `;
        },
        on_click: function (task) {
            if (task.id.startsWith('MOD_')) {
                openModuleModal(task._original.id);
            } else {
                openTaskModal(task.id);
            }
        },
        on_date_change: function(task, start, end) {
            const formatDate = (d) => {
                const offset = d.getTimezoneOffset();
                const local = new Date(d.getTime() - (offset*60*1000));
                return local.toISOString().split('T')[0];
            };
            const s = formatDate(start);
            const e = formatDate(end);

            if (task.id.startsWith('MOD_')) {
                const mod = data.modules.find(m => m.id === task._original.id);
                if (mod) {
                    mod.startDate = s;
                    mod.endDate = e;
                    saveData();
                }
            } else {
                const t = data.tasks.find(x => x.id === task.id);
                if (t) {
                    t.startDate = s;
                    t.endDate = e;
                    const diffTime = Math.abs(end - start);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    t.duration = diffDays;
                    saveData();
                }
            }
        },
        on_view_change: function(mode) { ganttMode = mode; }
    });
}

window.changeGanttMode = function(mode) {
    if (ganttInstance) ganttInstance.change_view_mode(mode);
}

// --- Modals & Data Management ---

let editingTaskId = null;
let editingModuleId = null;

// Force Sync button
const controls = document.querySelector('.controls');
const forceSyncBtn = document.getElementById('forceSyncBtn');
if (forceSyncBtn && controls) {
    forceSyncBtn.onclick = async () => {
        if(confirm('确定要将当前显示的数据覆盖服务器上的数据吗？\n\n注意：这会用您当前屏幕上看到的内容，替换掉服务器上所有人看到的内容。')) {
            await saveData();
            alert('同步完成！所有人都将看到您现在的数据。');
        }
    };
}




// Parent Management
const parentModal = document.getElementById('parentModal');
const manageParentsBtn = document.getElementById('manageParentsBtn');
if (manageParentsBtn) {
    manageParentsBtn.addEventListener('click', () => {
        renderParentList();
        parentModal.style.display = 'flex';
    });
}

function renderParentList() {
    const list = document.getElementById('parentList');
    list.innerHTML = '';
    data.parentModules.forEach(pm => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <span>${pm.name}</span>
            <div style="display:flex;gap:4px;">
                <button class="icon-btn edit-pm" data-id="${pm.id}" title="修改">✎</button>
                <button class="icon-btn delete-pm" data-id="${pm.id}">×</button>
            </div>
        `;
        list.appendChild(item);
    });
    
    list.querySelectorAll('.delete-pm').forEach(btn => {
        btn.onclick = () => deleteParentModule(btn.dataset.id);
    });
    list.querySelectorAll('.edit-pm').forEach(btn => {
        btn.onclick = () => editParentModule(btn.dataset.id);
    });
}

const addParentBtn = document.getElementById('addParentBtn');
if (addParentBtn) {
    addParentBtn.addEventListener('click', () => {
        const name = document.getElementById('newParentName').value.trim();
        if (name) {
            data.parentModules.push({ id: Date.now().toString(), name });
            document.getElementById('newParentName').value = '';
            saveData();
            renderParentList();
        }
    });
}

function deleteParentModule(id) {
    if (confirm('确定删除此项目模块？其下的核心功能模块将被移除！')) {
        data.parentModules = data.parentModules.filter(pm => pm.id !== id);
        // Remove sub-modules or move them? Let's delete for strict hierarchy
        const subModules = data.modules.filter(m => m.parentId === id);
        const subModuleIds = subModules.map(m => m.id);
        
        data.modules = data.modules.filter(m => m.parentId !== id);
        data.tasks = data.tasks.filter(t => !subModuleIds.includes(t.moduleId));
        
        saveData();
        renderParentList(); // if open
        // render board will happen implicitly or needs call?
        // render() calls are cheap here
        render();
    }
}

function editParentModule(id) {
    const pm = data.parentModules.find(p => p.id === id);
    if (!pm) return;
    
    const newName = prompt("修改项目模块名称：", pm.name);
    if (newName && newName.trim()) {
        pm.name = newName.trim();
        saveData();
        renderParentList(); // Update list if modal is open
    }
}

// Module Modal
function openModuleModal(moduleId) {
    editingModuleId = moduleId;
    const modal = document.getElementById('moduleModal');
    const title = document.getElementById('moduleModalTitle');
    const parentSelect = document.getElementById('moduleParentSelect');
    const nameInput = document.getElementById('moduleName');
    const colorInput = document.getElementById('moduleColor');
    const startInput = document.getElementById('moduleStartDate');
    const endInput = document.getElementById('moduleEndDate');
    const deleteBtn = document.getElementById('deleteModuleBtn');

    // Populate Parent Select
    parentSelect.innerHTML = '';
    data.parentModules.forEach(pm => {
        const opt = document.createElement('option');
        opt.value = pm.id;
        opt.textContent = pm.name;
        parentSelect.appendChild(opt);
    });

    if (moduleId) {
        const module = data.modules.find(m => m.id === moduleId);
        title.textContent = '编辑核心功能模块';
        parentSelect.value = module.parentId || '';
        nameInput.value = module.name;
        colorInput.value = module.color;
        startInput.value = module.startDate || '';
        endInput.value = module.endDate || '';
        deleteBtn.style.display = 'block';
    } else {
        title.textContent = '添加核心功能模块';
        nameInput.value = '';
        colorInput.value = '#5bc17f';
        startInput.value = '';
        endInput.value = '';
        deleteBtn.style.display = 'none';
    }
    
    modal.style.display = 'flex';
}

document.getElementById('addModuleBtn').addEventListener('click', () => {
    if (data.parentModules.length === 0) {
        alert('请先创建至少一个项目模块 (父级)');
        document.getElementById('manageParentsBtn').click();
        return;
    }
    openModuleModal(null);
});

document.getElementById('saveModuleBtn').addEventListener('click', () => {
    const parentId = document.getElementById('moduleParentSelect').value;
    const name = document.getElementById('moduleName').value.trim();
    if (!name) return alert('请输入模块名称');
    
    const color = document.getElementById('moduleColor').value;
    const start = document.getElementById('moduleStartDate').value;
    const end = document.getElementById('moduleEndDate').value;

    if (editingModuleId) {
        const module = data.modules.find(m => m.id === editingModuleId);
        module.parentId = parentId;
        module.name = name;
        module.color = color;
        module.startDate = start;
        module.endDate = end;
    } else {
        data.modules.push({
            id: Date.now().toString(),
            parentId,
            name,
            color,
            startDate: start,
            endDate: end
        });
    }
    
    saveData();
    document.getElementById('moduleModal').style.display = 'none';
});

document.getElementById('deleteModuleBtn').addEventListener('click', () => {
    if (editingModuleId && confirm('确定删除此模块？任务也将被删除！')) {
        data.modules = data.modules.filter(m => m.id !== editingModuleId);
        data.tasks = data.tasks.filter(t => t.moduleId !== editingModuleId);
        saveData();
        document.getElementById('moduleModal').style.display = 'none';
    }
});

// Task Modal
function openTaskModal(taskId, moduleId = null) {
    editingTaskId = taskId;
    const modal = document.getElementById('taskModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('taskContent');
    const moduleSelect = document.getElementById('taskModuleSelect');
    const duration = document.getElementById('taskDuration');
    const start = document.getElementById('taskStartDate');
    const end = document.getElementById('taskEndDate');
    const depSelect = document.getElementById('taskDependencies');
    const deleteBtn = document.getElementById('deleteTaskBtn');

    // Populate Module Select (Grouped by Parent)
    moduleSelect.innerHTML = '<option value="">-- 选择核心功能 --</option>';
    data.parentModules.forEach(pm => {
        const optGroup = document.createElement('optgroup');
        optGroup.label = pm.name;
        
        const subModules = data.modules.filter(m => m.parentId === pm.id);
        subModules.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.textContent = m.name;
            optGroup.appendChild(opt);
        });
        
        if (subModules.length > 0) moduleSelect.appendChild(optGroup);
    });

    // Populate Dependencies
    depSelect.innerHTML = '';
    data.tasks.forEach(t => {
        if (t.id !== taskId) {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = t.content.length > 20 ? t.content.slice(0, 20) + '...' : t.content;
            depSelect.appendChild(opt);
        }
    });

    if (taskId) {
        const task = data.tasks.find(t => t.id === taskId);
        title.textContent = '编辑任务';
        content.value = task.content;
        moduleSelect.value = task.moduleId || '';
        duration.value = task.duration || '';
        start.value = task.startDate || '';
        end.value = task.endDate || '';
        
        document.querySelectorAll('input[name="taskStatus"]').forEach(radio => {
            radio.checked = radio.value === task.status;
        });

        if (task.dependencies) {
            Array.from(depSelect.options).forEach(opt => {
                if (task.dependencies.includes(opt.value)) opt.selected = true;
            });
        }
        
        deleteBtn.style.display = 'block';
    } else {
        title.textContent = '新任务';
        content.value = '';
        moduleSelect.value = moduleId || '';
        duration.value = '1';
        start.value = '';
        end.value = '';
        document.querySelector('input[name="taskStatus"][value="pending"]').checked = true;
        deleteBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
}

document.getElementById('saveTaskBtn').addEventListener('click', () => {
    const content = document.getElementById('taskContent').value.trim();
    if (!content) return alert('请输入任务内容');

    const moduleId = document.getElementById('taskModuleSelect').value;
    if (!moduleId) return alert('请选择所属核心功能');

    const duration = document.getElementById('taskDuration').value;
    const startDate = document.getElementById('taskStartDate').value;
    const endDate = document.getElementById('taskEndDate').value;
    const status = document.querySelector('input[name="taskStatus"]:checked').value;
    
    const depSelect = document.getElementById('taskDependencies');
    const dependencies = Array.from(depSelect.selectedOptions).map(opt => opt.value);

    if (editingTaskId) {
        const task = data.tasks.find(t => t.id === editingTaskId);
        task.content = content;
        task.moduleId = moduleId;
        task.duration = duration;
        task.startDate = startDate;
        task.endDate = endDate;
        task.status = status;
        task.dependencies = dependencies;
    } else {
        const newTask = {
            id: Date.now().toString(),
            content,
            moduleId,
            duration,
            startDate,
            endDate,
            status,
            dependencies
        };
        data.tasks.push(newTask);
    }
    
    saveData();
    document.getElementById('taskModal').style.display = 'none';
});

document.getElementById('deleteTaskBtn').addEventListener('click', () => {
    if (editingTaskId && confirm('确定删除此任务？')) {
        data.tasks = data.tasks.filter(t => t.id !== editingTaskId);
        data.tasks.forEach(t => {
            if (t.dependencies) t.dependencies = t.dependencies.filter(d => d !== editingTaskId);
        });
        saveData();
        document.getElementById('taskModal').style.display = 'none';
    }
});

// Export
document.getElementById('exportBtn').addEventListener('click', () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `project_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
});

// Edit Project Name
document.getElementById('editProjectBtn').addEventListener('click', () => {
    const newName = prompt("请输入新的项目名称：", data.project.name);
    if (newName && newName.trim()) {
        data.project.name = newName.trim();
        saveData();
    }
});

// Common Modal Close
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal-overlay').style.display = 'none';
    });
});

window.onclick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
    }
};

// Init
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    
    // 默认执行一次“数据恢复-服务器拉取”，确保首次打开即为云端数据
    if (!initialServerSyncDone && (currentCloudConfig || useServer)) {
        const ok = await syncFromServer(true);
        if (ok) initialServerSyncDone = true;
    } else if (currentCloudConfig && isDefaultDataset(data)) {
        // 兜底逻辑：若仍是示例数据，再尝试一次云端拉取
        await syncFromServer(true);
    }
    
    // Wire up Force Sync Button if connected
    const syncBtn = document.getElementById('forceSyncBtn');
    if ((currentCloudConfig || useServer) && syncBtn) {
        syncBtn.style.display = 'inline-block';
    } else if (syncBtn) {
        syncBtn.style.display = 'none';
    }
    
    // --- Cloud Config UI Logic ---
    const cloudModal = document.getElementById('cloudConfigModal');
    const cloudBtn = document.getElementById('cloudConfigBtn');
    
    if (cloudBtn && cloudModal) {
        cloudBtn.addEventListener('click', () => {
            // Populate existing config
            if (currentCloudConfig) {
                document.getElementById('cloudServiceType').value = currentCloudConfig.type;
                if (currentCloudConfig.type === 'jsonbin') {
                    document.getElementById('cloudBinId').value = currentCloudConfig.binId;
                    document.getElementById('cloudApiKey').value = currentCloudConfig.apiKey;
                } else {
                    document.getElementById('cloudCustomUrl').value = currentCloudConfig.url;
                }
                document.getElementById('cloudStatusDisplay').textContent = '🟢 已配置: ' + currentCloudConfig.type;
            }
            
            // Toggle inputs based on type
            const toggleInputs = () => {
                const type = document.getElementById('cloudServiceType').value;
                document.getElementById('jsonbinConfig').style.display = type === 'jsonbin' ? 'block' : 'none';
                document.getElementById('customConfig').style.display = type === 'custom' ? 'block' : 'none';
            };
            document.getElementById('cloudServiceType').addEventListener('change', toggleInputs);
            toggleInputs(); // Init
            
            cloudModal.style.display = 'flex';
        });

        const testCloudBtn = document.getElementById('testCloudBtn');
        if (testCloudBtn) {
            testCloudBtn.addEventListener('click', async () => {
                const type = document.getElementById('cloudServiceType').value;
                let tempConfig = { type };
                
                if (type === 'jsonbin') {
                    tempConfig.binId = document.getElementById('cloudBinId').value.trim();
                    tempConfig.apiKey = document.getElementById('cloudApiKey').value.trim();
                    if (!tempConfig.binId || !tempConfig.apiKey) return alert('请填写完整 JSONBin 信息');
                } else {
                    tempConfig.url = document.getElementById('cloudCustomUrl').value.trim();
                    if (!tempConfig.url) return alert('请填写 API 地址');
                }

                // Temporarily use this config to test
                const oldConfig = currentCloudConfig;
                currentCloudConfig = ensureCloudConfig(tempConfig);
                const data = await fetchFromCloud();
                
                if (data) {
                    alert('✅ 连接成功！读取到 ' + (data.tasks ? data.tasks.length : 0) + ' 个任务。');
                }
                currentCloudConfig = oldConfig; // Revert
            });
        }

        const saveCloudBtn = document.getElementById('saveCloudBtn');
        if (saveCloudBtn) {
            saveCloudBtn.addEventListener('click', async () => {
                const type = document.getElementById('cloudServiceType').value;
                let newConfig = { type };
                
                if (type === 'jsonbin') {
                    newConfig.binId = document.getElementById('cloudBinId').value.trim();
                    newConfig.apiKey = document.getElementById('cloudApiKey').value.trim();
                } else {
                    newConfig.url = document.getElementById('cloudCustomUrl').value.trim();
                }

                currentCloudConfig = ensureCloudConfig(newConfig);
                localStorage.setItem('cloud-config', JSON.stringify(currentCloudConfig));
                
                // Reload data with new config
                await loadData();
                render();
                
                cloudModal.style.display = 'none';
                alert('已切换到云端模式！');
            });
        }
    }

    render();
});
