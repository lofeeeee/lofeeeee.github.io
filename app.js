(() => {
  'use strict';

  // ---------------------------------------------------------------------
  // DOM refs
  // ---------------------------------------------------------------------
  const stage = document.getElementById('stage');
  const bootLog = document.getElementById('bootLog');
  const ringWrap = document.getElementById('ringWrap');
  const nameHeading = document.getElementById('nameHeading');
  const nameText = document.getElementById('nameText');
  const introText = document.getElementById('introText');
  const starsLayer = document.getElementById('starsLayer');
  const shootersLayer = document.getElementById('shootersLayer');
  const cometLayer = document.getElementById('cometLayer');
  const bgTint = document.getElementById('bgTint');
  const constellationOuter = document.getElementById('constellationOuter');
  const constellationScale = document.getElementById('constellationScale');
  const orbOpacityWrap = document.getElementById('orbOpacityWrap');
  const idleRings = document.getElementById('idleRings');
  const selRings = document.getElementById('selRings');
  const techPlanetsLayer = document.getElementById('techPlanetsLayer');
  const crystalsLayer = document.getElementById('crystalsLayer');
  const satOrbit = document.getElementById('satOrbit');
  const protostarsLayer = document.getElementById('protostarsLayer');
  const moonIcon = document.getElementById('moonIcon');
  const achToast = document.getElementById('achToast');
  const achTitleEl = document.getElementById('achTitle');
  const achDescEl = document.getElementById('achDesc');
  const missionsRow = document.getElementById('missionsRow');
  const openProjectsLink = document.getElementById('openProjectsLink');
  const projectsOverlay = document.getElementById('projectsOverlay');
  const projectsWindow = document.getElementById('projectsWindow');
  const closeProjectsBtn = document.getElementById('closeProjectsBtn');
  const termBody = document.getElementById('termBody');
  const termCmdLine = document.getElementById('termCmdLine');
  const typedCmdEl = document.getElementById('typedCmd');
  const typingCursor = document.getElementById('typingCursor');
  const projList = document.getElementById('projList');
  const termInteractive = document.getElementById('termInteractive');
  const termHistoryEl = document.getElementById('termHistory');
  const termInput = document.getElementById('termInput');
  const captionText = document.getElementById('captionText');
  const kernelPanic = document.getElementById('kernelPanic');
  const saver = document.getElementById('saver');
  const warpLayer = document.getElementById('warpLayer');

  // ---------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------
  const NAME = 'Lofee';
  const ALIAS = 'Marco';

  const DOT = { fe: '#19c3e6', be: '#f0329b', db: '#c9c9d6', sp: '#ffd21e' };

  const CATS = [
    {
      id: 'fe', label: 'Front End', full: 'Front End Tech Stack',
      chips: [['Next.js', 3, 'https://nextjs.org'], ['React', 3, 'https://react.dev'], ['Svelte', 2, 'https://svelte.dev'], ['Solid.js', 2, 'https://www.solidjs.com'], ['HTMX', 2, 'https://htmx.org'], ['Compose Multiplatform', 1, 'https://www.jetbrains.com/compose-multiplatform/']],
      p1: '#19c3e6', p2: '#0e8fb0',
      fill: 'rgba(25,195,230,.26)', stroke: '#bfeffb', face: 'rgba(190,240,252,.5)',
      glow: 'rgba(25,195,230,.45)', labelColor: '#8adef0',
      text: '#c8ecf7', border: 'rgba(25,195,230,.55)', shadow: 'rgba(25,195,230,.3)',
      bgTint: 'rgba(25,195,230,.13)',
      spinDur: '26s',
      armsD: 'M50 50 C 62 44 72 50 72 62 C 72 74 60 82 46 80 M50 50 C 38 56 28 50 28 38 C 28 26 40 18 54 20',
      extraD: '', extraDash: '0 0',
    },
    {
      id: 'be', label: 'Back End', full: 'Back End Tech Stack',
      chips: [['Python', 3, 'https://www.python.org'], ['Elysia JS', 2, 'https://elysiajs.com'], ['Express JS', 3, 'https://expressjs.com'], ['Laravel', 2, 'https://laravel.com'], ['Rust', 1, 'https://www.rust-lang.org'], ['Rust Axum', 1, 'https://github.com/tokio-rs/axum'], ['Go', 2, 'https://go.dev'], ['MinIO', 2, 'https://min.io'], ['PgBouncer', 2, 'https://www.pgbouncer.org'], ['Redis', 3, 'https://redis.io'], ['Bun', 2, 'https://bun.sh'], ['Spring Boot', 1, 'https://spring.io/projects/spring-boot']],
      p1: '#f0329b', p2: '#b0246f',
      fill: 'rgba(240,50,155,.26)', stroke: '#fcc6e4', face: 'rgba(252,205,230,.5)',
      glow: 'rgba(240,50,155,.42)', labelColor: '#f58fc7',
      text: '#f7d3e7', border: 'rgba(240,50,155,.55)', shadow: 'rgba(240,50,155,.3)',
      bgTint: 'rgba(240,50,155,.12)',
      spinDur: '34s',
      armsD: 'M50 50 C 63 46 73 52 71 65 C 69 76 58 81 48 79 M50 50 C 40 61 28 60 23 49 C 19 39 25 28 36 25 M50 50 C 47 37 53 27 65 26 C 76 26 83 36 80 47',
      extraD: 'M41 56 L59 44', extraDash: '0 0',
    },
    {
      id: 'sp', label: 'Supporting', full: 'Supporting Programs',
      chips: [['Bruno', 3, 'https://www.usebruno.com'], ['Postman', 3, 'https://www.postman.com'], ['DBeaver', 3, 'https://dbeaver.io'], ['DataGrip', 2, 'https://www.jetbrains.com/datagrip/'], ['Zabbix', 3, 'https://www.zabbix.com'], ['Docker', 2, 'https://www.docker.com'], ['Git', 3, 'https://git-scm.com']],
      p1: '#ffd21e', p2: '#c9a010',
      fill: 'rgba(255,210,30,.24)', stroke: '#ffe9a3', face: 'rgba(255,238,170,.55)',
      glow: 'rgba(255,210,30,.4)', labelColor: '#ffdf6e',
      text: '#f7ecc4', border: 'rgba(255,210,30,.5)', shadow: 'rgba(255,210,30,.28)',
      bgTint: 'rgba(255,210,30,.11)',
      spinDur: '30s',
      armsD: 'M50 50 C 58 46 62 52 60 58 C 58 64 50 66 44 62 M50 50 C 42 54 38 48 40 42 C 42 36 50 34 56 38',
      extraD: 'M50 13 A37 37 0 1 1 49.9 13', extraDash: '7 5',
    },
    {
      id: 'db', label: 'Database', full: 'Database',
      chips: [['MariaDB / MySQL', 3, 'https://mariadb.org'], ['PostgreSQL', 3, 'https://www.postgresql.org'], ['Oracle Database', 2, 'https://www.oracle.com/database/'], ['MongoDB', 2, 'https://www.mongodb.com'], ['Firebase', 2, 'https://firebase.google.com'], ['Valkey', 1, 'https://valkey.io']],
      p1: '#c9c9d6', p2: '#8a8a99',
      fill: 'rgba(212,212,226,.13)', stroke: '#e2e2ea', face: 'rgba(235,235,242,.65)',
      glow: 'rgba(215,215,228,.3)', labelColor: '#c9c9d2',
      text: '#e4e4ec', border: 'rgba(220,220,235,.5)', shadow: 'rgba(220,220,235,.25)',
      bgTint: 'rgba(215,215,228,.10)',
      spinDur: '44s',
      armsD: 'M26 50 C 26 40 37 33 50 33 C 63 33 74 40 74 50 C 74 60 63 67 50 67 C 37 67 26 60 26 50 M35 50 C 35 45 42 41 50 41 C 58 41 65 45 65 50 C 65 55 58 59 50 59 C 42 59 35 55 35 50',
      extraD: 'M82 27 a4.5 4.5 0 1 0 0.1 0', extraDash: '0 0',
    },
  ];

  const MISSIONS = [
    { yr: '2018', co: 'BPJIP - Jakarta', role: 'Intern Staff', desc: 'Document control & admin workflows for Procurement and Planning teams.', dot: '#c9c9d6', glow: 'rgba(220,220,235,.4)' },
    { yr: '2023', co: 'BW Ltd.', role: 'Full-Stack Developer (pro bono)', desc: 'Built BW Business Management System - Go + SolidJS + PostgreSQL POS for low-resource hardware.', dot: '#f0329b', glow: 'rgba(240,50,155,.4)' },
    { yr: '2023', co: 'THS-THM Organization', role: 'R&D Leader & Technical Lead (volunteer)', desc: 'Org platform with CMS, social ecosystem, and multimedia e-learning for martial arts training.', dot: '#ffd21e', glow: 'rgba(255,210,30,.4)' },
    { yr: '2024 →', co: 'PT. Bali Towerindo Sentra Tbk', role: 'IT Support - present', desc: 'End-to-end IT ops, backend/frontend issue resolution, AI data ops, remote support for field teams.', dot: '#19c3e6', glow: 'rgba(25,195,230,.4)' },
  ];

  const PROJECTS = [
    {
      name: 'chat-app-testing', status: 'singular · in progress',
      desc: "Discord's servers crossed with WhatsApp's DMs and Stories. Kotlin Multiplatform + Compose client (desktop and Android, no webview) talking GraphQL over websockets to a Spring Boot backend.",
      link: 'https://github.com/lofeeeee/chat-app-testing',
      tech: [['Compose Multiplatform', 'fe'], ['Kotlin', 'be'], ['Spring Boot 3', 'be'], ['GraphQL', 'be'], ['MinIO', 'be'], ['PostgreSQL 17', 'db'], ['Valkey', 'db']],
    },
    {
      name: 'a-weeb-app', status: 'self-hosted',
      desc: 'Anime streaming and manga reader. ElysiaJS/Bun backend with a Redis-queued Python + ffmpeg worker fleet transcoding uploads to adaptive HLS (NVENC/QSV when available), Next.js 14 frontend typed end-to-end via Eden Treaty.',
      link: 'https://github.com/lofeeeee/a-weeb-app',
      tech: [['Next.js 14', 'fe'], ['shadcn/ui', 'fe'], ['Vidstack + hls.js', 'fe'], ['ElysiaJS', 'be'], ['Bun', 'be'], ['Drizzle ORM', 'be'], ['Python + ffmpeg', 'be'], ['Redis', 'be'], ['MinIO', 'be'], ['PostgreSQL', 'db']],
    },
    {
      name: 'shortener-test', status: 'experiment',
      desc: 'URL shortener. Laravel 11 + Octane backend with Sanctum auth and a HashId slug service, Next.js 16 / React 19 frontend on shadcn/ui with Recharts stats and QR-code links.',
      link: 'https://github.com/lofeeeee/shortener-test',
      tech: [['Laravel 11', 'be'], ['Octane', 'be'], ['PHP 8.2', 'be'], ['PostgreSQL', 'db'], ['Next.js 16', 'fe'], ['TypeScript', 'fe'], ['Tailwind v4', 'fe'], ['shadcn/ui', 'fe']],
    },
    {
      name: 'bw-pos-app', status: 'thesis · production',
      desc: 'BW Business Management System - POS with inventory, sales, customer debt, expenses and reporting. One tuned Go binary serves the SolidJS SPA, built for 2GB-RAM / 1-core hardware. Developed with Extreme Programming.',
      link: 'https://github.com/lofeeeee/bw-pos-app',
      tech: [['Go', 'be'], ['pgx', 'be'], ['SolidJS', 'fe'], ['Tabler UI', 'fe'], ['Chart.js', 'fe'], ['PostgreSQL', 'db']],
    },
    {
      name: 'ths-thm-platform', status: 'volunteer · private deploy',
      desc: 'Organizational platform: CMS, integrated social ecosystem and a multimedia e-learning module for structured martial arts training.',
      link: 'https://github.com/lofeeeee/',
      tech: [['React', 'fe'], ['Anime.js', 'fe'], ['Elysia.js', 'be'], ['Eden/tRPC', 'be'], ['Drizzle ORM', 'be'], ['PgBouncer', 'be'], ['PostgreSQL', 'db']],
    },
  ];

  // from the GitHub profile README's "Currently exploring" section
  const EXPLORING = [
    ['Rust', 'https://www.rust-lang.org'], ['Flutter', 'https://flutter.dev'],
    ['Spring Boot', 'https://spring.io/projects/spring-boot'], ['MQTT', 'https://mqtt.org'],
    ['Bun', 'https://bun.sh'], ['Ollama', 'https://ollama.com'],
    ['PyTorch', 'https://pytorch.org'], ['Pydantic', 'https://docs.pydantic.dev'],
  ];
  const PLANET_NAMES = CATS.flatMap((c) => c.chips.map((ch) => ch[0]));
  // anything already on a planet is past the protostar stage
  const PROTOSTARS = EXPLORING.filter(([name]) => !PLANET_NAMES.includes(name));

  const CMDS = {
    whoami: 'marco antonio (lofee) - IT & technical support specialist, Jakarta.\nSupport at heart, fullstack when the job calls for it.',
    uptime: ' 09:41:22 up 2 years 5 months @ PT Bali Towerindo, 8 years in IT orbit,  load average: 0.42, 0.15, 0.09',
    contact: 'GITHUB    https://github.com/lofeeeee\nLINKEDIN  https://www.linkedin.com/in/marco-antonio-n/',
    neofetch: '      .-.       lofee@prodnode-01\n     (o o)      -----------------\n     | O \\      OS: Arch Linux x86_64\n      \\   \\     Kernel: 6.9.4-2-lts\n       `~~~\'    Role: IT Support Specialist\n                Base: Jakarta, ID\n                Stack: ' + CATS.length + ' galaxies · ' + PLANET_NAMES.length + ' planets · ' + PROTOSTARS.length + ' protostars\n                Uptime: 99.98%',
    exploring: 'currently exploring: ' + EXPLORING.map(([n]) => n).join(', '),
    help: 'available commands: ls, ls -la, pwd, cd, cat, grep, git log, curl resume.pdf, whoami, uptime, date, echo, uname -a, history, contact, neofetch, exploring, help, clear, exit\n[tab] completes · [up]/[down] walk history',
  };

  const TERM_FILES = { 'about.txt': 'whoami', 'contact.txt': 'contact', 'exploring.txt': 'exploring' };
  const TERM_COMMANDS = ['cat', 'cd', 'clear', 'contact', 'curl', 'date', 'echo', 'exit', 'exploring', 'git', 'grep', 'help', 'history', 'll', 'ls', 'neofetch', 'pwd', 'uname', 'uptime', 'wget', 'whoami'];
  const PUBLIC_REPOS = ['chat-app-testing', 'a-weeb-app', 'shortener-test', 'bw-pos-app', 'lofeeeee'];

  const TERM_CMD = 'ls -la ~/projects';

  const BOOT = [
    ['k', 'Linux version 6.9.4-2-lts (build@prodnode-01) (gcc 13.2.0, GNU ld 2.42) #1 SMP PREEMPT_DYNAMIC'],
    ['k', 'Command line: BOOT_IMAGE=/vmlinuz-6.9.4-2-lts root=/dev/nvme0n1p2 ro quiet'],
    ['k', 'BIOS-provided physical RAM map:'],
    ['k', 'BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable'],
    ['k', 'BIOS-e820: [mem 0x0000000100000000-0x000000083fffffff] usable'],
    ['k', 'DMI: LOFEE STARSYSTEM/PRODNODE-01, BIOS F.42 11/02/2025'],
    ['k', 'tsc: Detected 3600.000 MHz processor'],
    ['k', 'Calibrating delay loop (skipped), value calculated using timer frequency.. 7200.00 BogoMIPS (lpj=3600000)'],
    ['k', 'pid_max: default: 32768 minimum: 301'],
    ['k', 'Mount-cache hash table entries: 2048 (order: 1, 8192 bytes)'],
    ['k', 'Mountpoint-cache hash table entries: 2048 (order: 1, 8192 bytes)'],
    ['k', 'CPU: Testing write buffer coherency: ok'],
    ['k', 'CPU0: thread -1, cpu 0, socket 0'],
    ['k', 'rcu: Hierarchical SRCU implementation.'],
    ['k', 'smp: Bringing up secondary CPUs ...'],
    ['k', 'CPU1: thread -1, cpu 1, socket 0'],
    ['k', 'CPU2: thread -1, cpu 2, socket 0'],
    ['k', 'CPU3: thread -1, cpu 3, socket 0'],
    ['k', 'smp: Brought up 1 node, 16 CPUs'],
    ['k', 'SMP: Total of 16 processors activated (115200.00 BogoMIPS)'],
    ['k', 'devtmpfs: initialized'],
    ['k', 'clocksource: jiffies: mask 0xffffffff max_cycles 0xffffffff, max_idle_ns: 19112604462750000 ns'],
    ['k', 'futex hash table entries: 4096 (order: 6, 262144 bytes)'],
    ['k', 'NET: Registered protocol family 16'],
    ['k', 'DMA: preallocated 4096 KiB GFP_KERNEL pool for atomic allocations'],
    ['k', 'ACPI: Core revision 20240322'],
    ['k', 'PCI: Using configuration type 1 for base access'],
    ['k', 'SCSI subsystem initialized'],
    ['k', 'usbcore: registered new interface driver usbfs'],
    ['k', 'usbcore: registered new interface driver hub'],
    ['k', 'usbcore: registered new device driver usb'],
    ['k', 'pci 0000:00:1f.2: AHCI controller found'],
    ['k', 'nvme nvme0: 8/0/0 default/read/poll queues'],
    ['k', 'nvme nvme0: allocated 64 MiB host memory buffer'],
    ['k', 'clocksource: Switched to clocksource tsc'],
    ['k', 'VFS: Disk quotas dquot_6.6.0'],
    ['k', 'VFS: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)'],
    ['k', 'FS-Cache: Loaded'],
    ['k', 'NET: Registered protocol family 2'],
    ['k', 'tcp_listen_portaddr_hash hash table entries: 512 (order: 0, 6144 bytes)'],
    ['k', 'TCP established hash table entries: 8192 (order: 3, 32768 bytes)'],
    ['k', 'TCP bind hash table entries: 8192 (order: 4, 65536 bytes)'],
    ['k', 'TCP: Hash tables configured (established 8192 bind 8192)'],
    ['k', 'UDP hash table entries: 512 (order: 2, 16384 bytes)'],
    ['k', 'UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)'],
    ['k', 'NET: Registered protocol family 1'],
    ['k', 'RPC: Registered named UNIX socket transport module.'],
    ['k', 'RPC: Registered udp transport module.'],
    ['k', 'RPC: Registered tcp transport module.'],
    ['k', 'EXT4-fs (nvme0n1p2): mounted filesystem with ordered data mode. Quota mode: none.'],
    ['k', 'r8169 0000:03:00.0 eth0: RTL8125B, link up, 2.5Gbps full-duplex'],
    ['k', 'random: crng init done'],
    ['k', 'Run /sbin/init as init process'],
    ['ok', 'Mounted /dev/nvme0n1p2 on /'],
    ['ok', 'Started Journal Service'],
    ['ok', 'Finished Load Kernel Modules'],
    ['ok', 'Finished Apply Kernel Variables'],
    ['ok', 'Mounted Kernel Debug File System'],
    ['ok', 'Reached target Local File Systems (Pre)'],
    ['ok', 'Finished Create Static Device Nodes in /dev'],
    ['run', 'Starting Rule-based Manager for Device Events and Files...'],
    ['ok', 'Started Rule-based Manager for Device Events and Files'],
    ['ok', 'Found device /dev/nvme0n1p1 (EFI System Partition)'],
    ['ok', 'Mounted /boot/efi'],
    ['ok', 'Activated swap /dev/nvme0n1p3'],
    ['ok', 'Reached target Swaps'],
    ['ok', 'Reached target Local File Systems'],
    ['run', 'Starting Remount Root and Kernel File Systems...'],
    ['ok', 'Finished Remount Root and Kernel File Systems'],
    ['run', 'Starting Flush Journal to Persistent Storage...'],
    ['ok', 'Finished Flush Journal to Persistent Storage'],
    ['run', 'Starting Create Volatile Files and Directories...'],
    ['ok', 'Finished Create Volatile Files and Directories'],
    ['run', 'Starting Network Time Synchronization...'],
    ['ok', 'Started Network Time Synchronization'],
    ['ok', 'Reached target System Time Set'],
    ['run', 'Starting Load/Save Random Seed...'],
    ['ok', 'Finished Load/Save Random Seed'],
    ['ok', 'Finished Set Console Font and Keymap'],
    ['ok', 'Reached target System Initialization'],
    ['ok', 'Started Daily Cleanup of Temporary Directories'],
    ['ok', 'Reached target Timer Units'],
    ['ok', 'Listening on D-Bus System Message Bus Socket'],
    ['ok', 'Reached target Socket Units'],
    ['run', 'Starting Network Manager...'],
    ['ok', 'Started D-Bus System Message Bus'],
    ['ok', 'Started Network Manager'],
    ['ok', 'Reached target Network'],
    ['run', 'Starting OpenSSH server daemon...'],
    ['ok', 'Started OpenSSH server daemon'],
    ['ok', 'Started User Login Management'],
    ['err', 'Failed to start Bluetooth service (no adapter found)'],
    ['ok', 'Started Zabbix Agent'],
    ['run', 'Starting Docker Application Container Engine...'],
    ['ok', 'Started Docker Application Container Engine'],
    ['ok', 'Started containerd container runtime'],
    ['run', 'Starting nginx - high performance web server...'],
    ['ok', 'Started nginx - high performance web server'],
    ['ok', 'Started MariaDB 11.4 database server'],
    ['ok', 'Started MongoDB Database Server'],
    ['ok', 'Started Firebase Emulator Suite'],
    ['run', 'Starting fail2ban service...'],
    ['ok', 'Started fail2ban service'],
    ['err', 'Failed to start Load Kernel Module pcspkr (module blacklisted)'],
    ['ok', 'Started Daily apt download activities'],
    ['ok', 'Started Certbot renewal timer'],
    ['run', 'Starting PostgreSQL 16 database server...'],
    ['ok', 'Started PostgreSQL 16 database server'],
    ['run', 'Starting Redis persistent key-value database...'],
    ['ok', 'Started Redis persistent key-value database'],
    ['ok', 'Started MinIO Object Storage'],
    ['ok', 'Started PgBouncer connection pooler'],
    ['run', 'Starting Stack Constellation Service...'],
    ['ok', 'Started Stack Constellation Service'],
    ['ok', 'Started CMYK Crystal Daemon'],
    ['ok', 'Started Starfall Renderer'],
    ['ok', 'Reached target Multi-User System'],
    ['run', 'Starting Graphical Interface...'],
    ['ok', 'Reached target Graphical Interface'],
    ['run', 'Starting Record Runlevel Change in UTMP...'],
    ['ok', 'Finished Record Runlevel Change in UTMP'],
    ['raw', 'Arch Linux 6.9.4-2-lts (tty1)'],
    ['raw', 'prodnode-01 login: lofee (automatic login)'],
    ['raw', 'Last login: Tue Jul  7 09:41:22 on tty1'],
  ];

  // static decorative fields (fixed, don't depend on state)
  function mkStar(x, y, s, c, dur, delay, jx, jy) {
    return { x, y, s, c, dur: dur + 's', dur2: (dur * 2) + 's', delay: '-' + delay + 's', jx: jx + 'vw', jy: jy + 'vh' };
  }
  const STARS = [
    mkStar(10, 18, 10, '#ffffff', 5.2, 0.0, 14, 9),
    mkStar(24, 62, 7, '#dbe4ff', 6.4, 2.1, -8, -14),
    mkStar(33, 30, 12, '#ffffff', 7.1, 3.6, 10, 18),
    mkStar(46, 12, 8, '#fff3d6', 5.8, 1.2, -12, 12),
    mkStar(55, 82, 9, '#ffffff', 6.9, 4.4, 9, -16),
    mkStar(63, 26, 7, '#dbe4ff', 5.5, 2.8, -15, 8),
    mkStar(72, 58, 11, '#ffffff', 7.6, 0.7, 8, 13),
    mkStar(81, 14, 8, '#fff3d6', 6.1, 3.1, -10, 15),
    mkStar(88, 42, 10, '#ffffff', 5.9, 1.9, -13, -9),
    mkStar(93, 74, 7, '#dbe4ff', 7.3, 4.9, -9, -12),
    mkStar(6, 52, 8, '#ffffff', 6.6, 2.4, 12, -10),
    mkStar(18, 88, 9, '#dbe4ff', 5.4, 0.4, 15, -7),
    mkStar(40, 68, 7, '#ffffff', 7.8, 3.9, -7, -15),
    mkStar(68, 86, 8, '#fff3d6', 6.2, 1.6, 11, -11),
    mkStar(96, 24, 9, '#ffffff', 5.7, 4.1, -14, 10),
  ];
  function mkShooter(x, y, dxVw, dyVw, dur, delay) {
    const ang = (Math.atan2(-dyVw, -dxVw) * 180) / Math.PI;
    return { x, y, dx: dxVw + 'vw', dy: dyVw + 'vw', dur: dur + 's', delay: delay + 's', ang: ang.toFixed(1) + 'deg' };
  }
  const SHOOTERS = [
    mkShooter(72, 6, -65, 5, 11, 1),
    mkShooter(34, 2, -38, 3, 15, 6),
    mkShooter(92, 28, -55, 4, 19, 10.5),
  ];
  const WARP_STARS = Array.from({ length: 44 }, (_, i) => ({
    a: (i * 8.18).toFixed(1) + 'deg',
    dur: (1.5 + (i % 7) * 0.34).toFixed(2) + 's',
    delay: '-' + ((i * 0.29) % 3.2).toFixed(2) + 's',
  }));

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------
  const state = {
    phase: '',
    selected: null,
    fading: false,
    gen: 0,
    novaId: null,
    disco: false,
    saverOn: false,
    panicOn: false,
    projOpen: false,
  };
  const timers = {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const achDone = {};

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // ---------------------------------------------------------------------
  // Boot sequence
  // ---------------------------------------------------------------------
  let bootLines = [];
  let bootN = 0;

  function buildBootLines() {
    let t = 0.000642;
    return BOOT.map(([kind, text]) => {
      if (kind === 'k') {
        t += Math.random() < 0.15 ? 0.02 + Math.random() * 0.09 : 0.0002 + Math.random() * 0.004;
        return { tag: '[' + t.toFixed(6).padStart(12) + ']', tagColor: '#9ca34a', text };
      }
      if (kind === 'ok') return { tag: '[  OK  ]', tagColor: '#4ade80', text };
      if (kind === 'err') return { tag: '[FAILED]', tagColor: '#f87171', text };
      if (kind === 'run') return { tag: '        ', tagColor: '#c8c8cc', text };
      return { tag: '', tagColor: '#c8c8cc', text };
    });
  }

  // The boot log ticks every 55ms; a full innerHTML rebuild on every tick forces
  // the browser to re-layout/restyle the whole line list while the loader rings
  // are trying to spin at 60fps. Instead, append only the newly-revealed line(s)
  // and drop the oldest node once we're past the visible window — O(1) per tick.
  let bootRenderedN = 0;
  let bootMaxLines = 10;

  function computeBootMaxLines() {
    const vh = window.innerHeight, vw = window.innerWidth;
    return Math.max(10, Math.floor((vh - 60) / (Math.min(13.5, Math.max(10, vw * 0.015)) * 1.6)));
  }

  function appendBootLine(ln) {
    const div = document.createElement('div');
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.style.color = ln.tagColor;
    tag.textContent = ln.tag;
    const txt = document.createElement('span');
    txt.className = 'txt';
    txt.textContent = ln.text;
    div.append(tag, txt);
    bootLog.appendChild(div);
    while (bootLog.children.length > bootMaxLines) bootLog.removeChild(bootLog.firstChild);
  }

  function tickBootLog(newBootN) {
    for (let i = bootRenderedN; i < newBootN; i++) appendBootLine(bootLines[i]);
    bootRenderedN = newBootN;
  }

  // full rebuild — only used on init and on resize (discrete events, not per-frame)
  function rebuildBootLog() {
    bootMaxLines = computeBootMaxLines();
    bootLog.innerHTML = '';
    bootRenderedN = 0;
    tickBootLog(bootN);
  }

  function runBoot() {
    clearInterval(timers.boot);
    bootLines = buildBootLines();
    bootN = 0;
    bootLog.dataset.hidden = 'false';
    ringWrap.dataset.shown = 'false';
    rebuildBootLog();
    timers.boot = setInterval(() => {
      const roll = Math.random();
      const burst = roll < 0.25 ? 4 : roll < 0.5 ? 3 : roll < 0.8 ? 2 : 1;
      const n = Math.min(bootN + burst, BOOT.length);
      if (n >= BOOT.length) {
        clearInterval(timers.boot);
        bootN = BOOT.length;
        tickBootLog(bootN);
        setTimeout(() => {
          bootLog.dataset.hidden = 'true';
          ringWrap.dataset.shown = 'true';
          timers.autoStart = setTimeout(start, 1000);
        }, 500);
      } else {
        bootN = n;
        tickBootLog(bootN);
      }
    }, 55);
  }

  // ---------------------------------------------------------------------
  // Phase transitions
  // ---------------------------------------------------------------------
  let launching = false;

  function start() {
    if (launching) return;
    launching = true;
    stage.dataset.phase = 'launching';
    setTimeout(() => {
      stage.dataset.phase = 'profile';
      launching = false;
      startTyping();
    }, 680);
  }

  function reset() {
    stage.dataset.phase = '';
    launching = false;
    state.selected = null;
    state.fading = false;
    state.projOpen = false;
    projectsOverlay.hidden = true;
    nameText.textContent = '';
    introText.dataset.shown = 'false';
    renderConstellation();
    runBoot();
  }

  // ---------------------------------------------------------------------
  // Name typing + identity glitch
  // ---------------------------------------------------------------------
  let curName = NAME;
  let typedN = 0;

  function startTyping() {
    clearInterval(timers.type);
    clearTimeout(timers.glitch);
    curName = NAME;
    typedN = 0;
    introText.dataset.shown = 'false';
    nameText.textContent = '';
    setTimeout(() => {
      timers.type = setInterval(() => {
        typedN++;
        nameText.textContent = curName.slice(0, typedN);
        if (typedN >= curName.length) {
          clearInterval(timers.type);
          setTimeout(() => { introText.dataset.shown = 'true'; }, 400);
          scheduleGlitch();
        }
      }, 130);
    }, 1000);
  }

  function scheduleGlitch() {
    clearTimeout(timers.glitch);
    timers.glitch = setTimeout(runGlitch, 20000 + Math.random() * 35000);
  }

  function runGlitch() {
    const A = NAME, B = ALIAS, frames = [];
    for (let n = A.length - 1; n >= 0; n--) frames.push({ s: A, n, dt: 55 });
    for (let n = 1; n <= B.length; n++) frames.push({ s: B, n, dt: 100 });
    frames.push({ s: B, n: B.length, dt: 2600 });
    for (let n = B.length - 1; n >= 0; n--) frames.push({ s: B, n, dt: 55 });
    for (let n = 1; n <= A.length; n++) frames.push({ s: A, n, dt: 100 });
    const play = (i) => {
      if (stage.dataset.phase !== 'profile') return;
      if (i >= frames.length) return scheduleGlitch();
      const f = frames[i];
      curName = f.s;
      nameText.textContent = curName.slice(0, f.n);
      timers.glitch = setTimeout(() => play(i + 1), f.dt);
    };
    play(0);
  }

  // ---------------------------------------------------------------------
  // Constellation / crystals / tech planets
  // ---------------------------------------------------------------------
  function hash(s) {
    let h = 2166136261;
    for (let k = 0; k < s.length; k++) { h ^= s.charCodeAt(k); h = Math.imul(h, 16777619); }
    return ((h >>> 0) % 1000) / 1000;
  }

  function svgNS(tag) { return document.createElementNS('http://www.w3.org/2000/svg', tag); }

  function buildCrystalNode(cat, r, anim, scale, isNova) {
    const outer = document.createElement('div');
    outer.className = 'gpu-anim';
    outer.style.position = 'absolute';
    outer.style.setProperty('--r', r);
    outer.style.animation = anim;

    const btn = document.createElement('div');
    btn.className = 'crystalbtn';
    btn.style.cssText = 'position:absolute; transform:translate(-50%,-54%) scale(' + scale + '); transition:transform .6s cubic-bezier(.2,.8,.2,1), filter .3s ease; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:8px;';
    btn.addEventListener('click', (e) => { e.stopPropagation(); pick(cat.id); });
    btn.addEventListener('dblclick', (e) => { e.stopPropagation(); boom(cat.id); });

    const iconWrap = document.createElement('div');
    iconWrap.style.cssText = 'position:relative; width:90px; height:90px; display:flex; align-items:center; justify-content:center;';
    iconWrap.style.animation = isNova ? 'novaBurst 1.4s cubic-bezier(.3,.7,.4,1) both' : 'none';

    if (isNova) {
      const ring = document.createElement('div');
      ring.style.cssText = 'position:absolute; left:50%; top:50%; width:26px; height:26px; margin:-13px; border-radius:50%; border:2px solid ' + cat.stroke + '; animation:novaRing .9s ease-out forwards;';
      iconWrap.appendChild(ring);
    }

    const glow = document.createElement('div');
    glow.className = 'gpu-anim';
    glow.style.cssText = 'position:absolute; left:50%; top:50%; width:150px; height:150px; border-radius:50%; background:radial-gradient(circle, ' + cat.glow + ', rgba(0,0,0,0) 70%); animation:corePulse 4s ease-in-out infinite; transform:translate(-50%,-50%);';
    iconWrap.appendChild(glow);

    const svg = svgNS('svg');
    svg.setAttribute('class', 'gpu-anim');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('width', '90'); svg.setAttribute('height', '90');
    svg.style.cssText = 'position:relative; animation:spin ' + cat.spinDur + ' linear infinite;';

    const c1 = svgNS('circle'); c1.setAttribute('cx', 50); c1.setAttribute('cy', 50); c1.setAttribute('r', 36); c1.setAttribute('fill', cat.fill); c1.setAttribute('opacity', '.3');
    const c2 = svgNS('circle'); c2.setAttribute('cx', 50); c2.setAttribute('cy', 50); c2.setAttribute('r', 23); c2.setAttribute('fill', cat.fill); c2.setAttribute('opacity', '.45');
    const armsSoft = svgNS('path'); armsSoft.setAttribute('d', cat.armsD); armsSoft.setAttribute('fill', 'none'); armsSoft.setAttribute('stroke', cat.stroke); armsSoft.setAttribute('stroke-width', '5'); armsSoft.setAttribute('stroke-linecap', 'round'); armsSoft.setAttribute('opacity', '.38');
    const armsGrain = svgNS('path'); armsGrain.setAttribute('d', cat.armsD); armsGrain.setAttribute('fill', 'none'); armsGrain.setAttribute('stroke', '#ffffff'); armsGrain.setAttribute('stroke-width', '1.7'); armsGrain.setAttribute('stroke-linecap', 'round'); armsGrain.setAttribute('stroke-dasharray', '0.1 5.2'); armsGrain.setAttribute('opacity', '.95');
    const extra = svgNS('path'); extra.setAttribute('d', cat.extraD); extra.setAttribute('fill', 'none'); extra.setAttribute('stroke', cat.stroke); extra.setAttribute('stroke-width', '1.8'); extra.setAttribute('stroke-linecap', 'round'); extra.setAttribute('stroke-dasharray', cat.extraDash); extra.setAttribute('opacity', '.75');
    const core = svgNS('circle'); core.setAttribute('cx', 50); core.setAttribute('cy', 50); core.setAttribute('r', 7.5); core.setAttribute('fill', cat.face);
    const coreW = svgNS('circle'); coreW.setAttribute('cx', 50); coreW.setAttribute('cy', 50); coreW.setAttribute('r', 3.5); coreW.setAttribute('fill', '#ffffff');
    svg.append(c1, c2, armsSoft, armsGrain, extra, core, coreW);
    iconWrap.appendChild(svg);

    const label = document.createElement('div');
    label.style.cssText = 'font-family:\'JetBrains Mono\',monospace; font-size:10px; font-weight:700; letter-spacing:.26em; text-transform:uppercase; white-space:nowrap; color:' + cat.labelColor + '; text-shadow:0 2px 10px rgba(0,0,0,.9);';
    label.textContent = cat.label;

    btn.append(iconWrap, label);
    outer.appendChild(btn);
    return outer;
  }

  function buildTechPlanetsNode(selCat, ringAnim, counterAnim) {
    const wrap = document.createElement('div');
    const n = selCat.chips.length;
    const pts = [];
    const items = selCat.chips.map(([name, lv, url], i) => {
      const slice = 360 / n;
      const angDeg = slice * i - 90 + (hash(name) - 0.5) * slice * 0.8;
      const r = 122 + hash(name + '*r') * 94;
      const rad = (angDeg * Math.PI) / 180;
      pts.push([r * Math.cos(rad), r * Math.sin(rad)]);
      const base = hash(name + '*c') < 0.5 ? selCat.p1 : selCat.p2;
      return {
        name, url,
        ang: angDeg + 'deg', negAng: (-angDeg) + 'deg', r: r + 'px', d: 10 + lv * 4,
        bg: 'radial-gradient(circle at 32% 30%, rgba(255,255,255,.9), ' + base + ' 48%, rgba(6,6,10,.95))',
      };
    });
    const constelD = pts.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join(' ') + ' Z';

    wrap.className = 'gpu-anim';
    wrap.style.position = 'absolute';
    wrap.style.animation = ringAnim;

    const lines = svgNS('svg');
    lines.setAttribute('viewBox', '-300 -300 600 600'); lines.setAttribute('width', '600'); lines.setAttribute('height', '600');
    lines.style.cssText = 'position:absolute; left:-300px; top:-300px; pointer-events:none;';
    const path = svgNS('path'); path.setAttribute('d', constelD); path.setAttribute('fill', 'none'); path.setAttribute('stroke', selCat.border); path.setAttribute('stroke-width', '1'); path.setAttribute('stroke-dasharray', '5 7'); path.setAttribute('opacity', '.5');
    lines.appendChild(path);
    wrap.appendChild(lines);

    items.forEach((tp) => {
      const posWrap = document.createElement('div');
      posWrap.style.cssText = 'position:absolute; transform:rotate(' + tp.ang + ') translateX(' + tp.r + ');';
      const counter = document.createElement('div');
      counter.className = 'gpu-anim';
      counter.style.animation = counterAnim;
      const unrot = document.createElement('div');
      unrot.style.transform = 'rotate(' + tp.negAng + ')';
      const link = document.createElement('a');
      link.className = 'planetlink';
      // href kept so middle-click / ctrl-click still reach the docs
      link.href = tp.url; link.target = '_blank'; link.rel = 'noopener';
      link.title = 'which projects use ' + tp.name + '?';
      link.style.cssText = 'display:block; cursor:pointer; text-decoration:none;';
      link.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        e.preventDefault();
        openTech(tp.name, tp.url);
      });
      const dotDiv = document.createElement('div');
      dotDiv.style.cssText = 'position:absolute; width:' + tp.d + 'px; height:' + tp.d + 'px; margin:calc(' + tp.d + 'px / -2); border-radius:50%; background:' + tp.bg + '; box-shadow:0 0 ' + tp.d + 'px ' + selCat.shadow + ';';
      const lbl = document.createElement('div');
      lbl.style.cssText = 'position:absolute; left:calc(' + tp.d + 'px / 2 + 7px); top:-8px; font-family:\'JetBrains Mono\',monospace; font-size:11.5px; font-weight:500; white-space:nowrap; color:' + selCat.text + '; text-shadow:0 1px 8px rgba(0,0,0,.95);';
      lbl.textContent = tp.name;
      link.append(dotDiv, lbl);
      unrot.appendChild(link);
      counter.appendChild(unrot);
      posWrap.appendChild(counter);
      wrap.appendChild(posWrap);
    });

    return wrap;
  }

  function renderConstellation() {
    const sel = state.selected;
    const selCat = CATS.find((c) => c.id === sel) || null;
    const others = CATS.filter((c) => c.id !== sel);
    const sfx = (state.gen % 2 === 1) ? 'b' : '';
    const o1 = 'orbit1' + sfx;

    crystalsLayer.innerHTML = '';
    CATS.forEach((cat, i) => {
      const isSel = cat.id === sel;
      let r = '222px', anim = o1 + ' 26s linear infinite -' + (i * 6.5).toFixed(1) + 's';
      if (sel && isSel) { r = '0px'; anim = 'none'; }
      else if (sel) {
        const j = others.indexOf(cat);
        r = '262px';
        anim = o1 + ' 34s linear infinite -' + ((j * 34) / 3).toFixed(1) + 's';
      }
      const scale = isSel ? 1.55 : 1;
      const isNova = state.novaId === cat.id;
      crystalsLayer.appendChild(buildCrystalNode(cat, r, anim, scale, isNova));
    });

    techPlanetsLayer.innerHTML = '';
    if (selCat) {
      const ringAnim = 'spin' + (sfx ? 'b' : '') + ' 70s linear infinite';
      const counterAnim = 'spinRev' + (sfx ? 'b' : '') + ' 70s linear infinite';
      techPlanetsLayer.appendChild(buildTechPlanetsNode(selCat, ringAnim, counterAnim));
    }

    idleRings.style.opacity = sel ? 0 : 1;
    selRings.style.opacity = sel ? 1 : 0;
    bgTint.style.opacity = selCat ? 1 : 0;
    if (selCat) bgTint.style.background = 'radial-gradient(circle at 50% 52%, ' + selCat.bgTint + ' 0%, rgba(5,5,6,0) 58%)';
    captionText.textContent = selCat ? selCat.full : '';
    orbOpacityWrap.style.opacity = state.fading ? 0 : 1;
  }

  function swapTo(sel) {
    if (state.fading) return;
    state.fading = true;
    renderConstellation();
    setTimeout(() => {
      state.selected = sel;
      state.fading = false;
      state.gen = (state.gen + 1) % 2;
      renderConstellation();
    }, 300);
  }

  function pick(id) {
    if (state.selected === id) return swapTo(null);
    swapTo(id);
  }

  function deselect() {
    if (state.projOpen) return;
    if (state.selected === null || state.fading) return;
    swapTo(null);
  }

  function boom(id) {
    if (state.novaId) return;
    state.novaId = id;
    renderConstellation();
    clearTimeout(timers.nova);
    timers.nova = setTimeout(() => { state.novaId = null; renderConstellation(); }, 1500);
  }

  // ---------------------------------------------------------------------
  // Static decorative layers (stars / shooters / missions / satellite orbit)
  // ---------------------------------------------------------------------
  function renderStars() {
    starsLayer.innerHTML = STARS.map((p) =>
      '<div class="gpu-anim" style="position:absolute; left:' + p.x + '%; top:' + p.y + '%; --jx:' + p.jx + '; --jy:' + p.jy + '; animation:starMove ' + p.dur2 + ' linear infinite; animation-delay:' + p.delay + '; z-index:1;">' +
        '<div class="gpu-anim star-core" style="width:' + p.s + 'px; height:' + p.s + 'px; background:' + p.c + '; clip-path:polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%); animation:starBlink ' + p.dur + ' ease-in-out infinite; animation-delay:' + p.delay + '; opacity:0;"></div>' +
      '</div>'
    ).join('');
  }

  function renderShooters() {
    shootersLayer.innerHTML = SHOOTERS.map((sh) =>
      '<div class="gpu-anim" style="position:absolute; left:' + sh.x + '%; top:' + sh.y + '%; --dx:' + sh.dx + '; --dy:' + sh.dy + '; animation:starfall ' + sh.dur + ' linear infinite; animation-delay:' + sh.delay + '; opacity:0; z-index:1;">' +
        '<div style="width:130px; height:2px; border-radius:2px; transform:rotate(' + sh.ang + '); transform-origin:left center; background:linear-gradient(90deg, rgba(255,255,255,.95), rgba(255,255,255,0)); filter:blur(.4px); box-shadow:0 0 8px rgba(255,255,255,.45);"></div>' +
      '</div>'
    ).join('');
  }

  function renderMissions() {
    missionsRow.innerHTML = '<div class="missions-line"></div>' + MISSIONS.map((m) =>
      '<div class="wp">' +
        '<div class="wpcard"><div class="co">' + escapeHtml(m.co) + '</div><div class="role">' + escapeHtml(m.role) + '</div><div class="desc">' + escapeHtml(m.desc) + '</div></div>' +
        '<div class="dot" style="border-color:' + m.dot + '; box-shadow:0 0 8px ' + m.glow + ';"></div>' +
        '<div class="yr">' + escapeHtml(m.yr) + '</div>' +
      '</div>'
    ).join('');
  }

  function renderProtostars() {
    const period = 150;
    protostarsLayer.innerHTML = '';
    PROTOSTARS.forEach(([name, url], i) => {
      const orbit = document.createElement('div');
      orbit.className = 'protostar gpu-anim';
      orbit.style.setProperty('--r', '312px');
      orbit.style.animation = 'orbit2 ' + period + 's linear infinite -' + ((i * period) / PROTOSTARS.length + 20).toFixed(1) + 's';
      const btn = document.createElement('a');
      btn.className = 'proto-btn';
      btn.href = url; btn.target = '_blank'; btn.rel = 'noopener';
      btn.title = 'currently exploring · ' + name;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        e.preventDefault();
        openTech(name, url, name + ' is still a protostar - currently exploring, nothing shipped with it yet.');
      });
      const core = document.createElement('span');
      core.className = 'proto-core';
      core.style.animationDelay = '-' + (i * 0.7).toFixed(1) + 's';
      const label = document.createElement('span');
      label.className = 'proto-label';
      label.textContent = name;
      btn.append(core, label);
      orbit.appendChild(btn);
      protostarsLayer.appendChild(orbit);
    });
  }

  function renderSatelliteOrbit() {
    satOrbit.style.setProperty('--r', '272px');
    satOrbit.style.animation = 'orbit1 96s linear infinite -30s';
  }

  function renderWarpStars() {
    warpLayer.innerHTML = WARP_STARS.map((w) =>
      '<div class="gpu-anim" style="position:absolute; --wa:' + w.a + '; animation:warp ' + w.dur + ' linear infinite; animation-delay:' + w.delay + ';"><div class="warpstar"></div></div>'
    ).join('');
  }

  function checkMoon() {
    const on = Math.abs(((Date.now() - 947182440000) / 86400000) % 29.53058867 - 14.765) < 0.75;
    moonIcon.hidden = !on;
  }

  // ---------------------------------------------------------------------
  // Responsive layout
  // ---------------------------------------------------------------------
  function updateResponsive() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const orbScale = Math.min(1, vw / 700, vh / 800);
    const isMobile = vw < 640;
    const orbTop = isMobile
      ? Math.min(Math.round(400 + 0.45 * vw), Math.round(vh * 0.55)) + 'px'
      : '52%';
    stage.style.setProperty('--orb-top', orbTop);
    stage.style.setProperty('--id-top', isMobile ? '58px' : 'clamp(18px, 4.5vh, 48px)');
    stage.style.setProperty('--link-dir', isMobile ? 'row' : 'column');
    stage.style.setProperty('--link-gap', isMobile ? '16px' : '10px');
    stage.style.setProperty('--link-top', isMobile ? '16px' : 'clamp(20px, 5vh, 52px)');
    stage.style.setProperty('--link-left', isMobile ? '16px' : 'auto');
    stage.style.setProperty('--kick-max', isMobile ? '62vw' : 'none');
    constellationScale.style.transform = 'scale(' + orbScale + ')';
    if (stage.dataset.phase === '') rebuildBootLog();
  }

  // ---------------------------------------------------------------------
  // Comet
  // ---------------------------------------------------------------------
  function scheduleComet() {
    clearTimeout(timers.comet);
    timers.comet = setTimeout(() => {
      if (reduceMotion.matches) return scheduleComet();
      const blue = Math.random() < 0.0001;
      spawnComet(blue ? 'blue' : 'norm', (10 + Math.random() * 26).toFixed(1) + '%');
    }, 14000 + Math.random() * 26000);
  }

  function spawnComet(kind, y) {
    cometLayer.innerHTML = '';
    const c1 = kind === 'blue' ? '#7ab0ff' : '#ffffff';
    const c2 = kind === 'blue' ? 'rgba(90,140,255,.65)' : 'rgba(160,190,255,.5)';
    const outer = document.createElement('div');
    outer.className = 'gpu-anim';
    outer.style.cssText = 'position:absolute; right:-12%; top:' + y + '; z-index:7; animation:cometfly 6.5s linear forwards;';
    outer.addEventListener('animationend', () => { cometLayer.innerHTML = ''; scheduleComet(); });
    const clickPad = document.createElement('div');
    clickPad.style.cssText = 'cursor:pointer; padding:56px; margin:-56px; -webkit-user-select:none; user-select:none; -webkit-tap-highlight-color:transparent;';
    clickPad.addEventListener('click', (e) => {
      e.stopPropagation();
      if (kind === 'blue') unlockAch('talala', 'Talala', "You're indeed a diamond in a rough");
      else unlockAch('ohhi', 'Oh Hi!', 'Hey there, if you know me then you know me');
    });
    const inner = document.createElement('div');
    inner.style.cssText = 'position:relative; transform:rotate(-3deg); pointer-events:none;';
    const tail = document.createElement('div');
    tail.style.cssText = 'position:absolute; left:100%; top:50%; width:180px; height:2px; margin-top:-1px; background:linear-gradient(90deg, ' + c1 + ', rgba(0,0,0,0)); filter:blur(.4px);';
    const head = document.createElement('div');
    head.style.cssText = 'width:8px; height:8px; border-radius:50%; background:' + c1 + '; box-shadow:0 0 12px ' + c1 + ', 0 0 30px ' + c2 + ';';
    inner.append(tail, head);
    clickPad.appendChild(inner);
    outer.appendChild(clickPad);
    cometLayer.appendChild(outer);
  }

  // ---------------------------------------------------------------------
  // Achievements
  // ---------------------------------------------------------------------
  function unlockAch(id, title, desc) {
    if (achDone[id]) return;
    achDone[id] = true;
    achTitleEl.textContent = title;
    achDescEl.textContent = desc;
    achToast.hidden = false;
    clearTimeout(timers.ach);
    timers.ach = setTimeout(() => { achToast.hidden = true; }, 5200);
  }

  // ---------------------------------------------------------------------
  // Projects terminal
  // ---------------------------------------------------------------------
  let termHistory = [];

  function renderTermHistory() {
    termHistoryEl.innerHTML = '';
    termHistory.forEach((h) => {
      const line = document.createElement('div');
      line.className = 'term-history-line';
      const cmdLine = document.createElement('div');
      const user = document.createElement('span'); user.className = 'term-user'; user.textContent = 'lofee@prodnode-01';
      const sep = document.createElement('span'); sep.className = 'term-sep'; sep.textContent = ':~$';
      cmdLine.append(user, sep, document.createTextNode(' ' + h.cmd));
      line.appendChild(cmdLine);
      if (h.out) {
        const out = document.createElement('div');
        out.style.cssText = 'color:' + h.color + '; white-space:pre-wrap;';
        out.textContent = h.out;
        line.appendChild(out);
      }
      termHistoryEl.appendChild(line);
    });
  }

  // "Next.js" must match "Next.js 16", "Elysia JS" must match "ElysiaJS"/"Elysia.js"
  function techKey(s) { return s.toLowerCase().replace(/[^a-z0-9]/g, ''); }

  function projectsUsing(name) {
    const key = techKey(name);
    const word = new RegExp('\\b' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
    return PROJECTS.filter((p) => p.tech.some(([label]) => techKey(label).startsWith(key)) || word.test(p.desc));
  }

  function renderProjectsList(list = PROJECTS, hlKey = null, footer = null) {
    let html = list.map((pr) =>
      '<div class="proj-item">' +
        '<div class="row1"><a href="' + pr.link + '" target="_blank" rel="noopener">' + escapeHtml(pr.name) + '</a><span class="status">' + escapeHtml(pr.status) + '</span></div>' +
        '<div class="desc">' + escapeHtml(pr.desc) + '</div>' +
        '<div class="techrow">' + pr.tech.map(([label, cat]) =>
          '<span class="tech' + (hlKey && techKey(label).startsWith(hlKey) ? ' hit' : '') + '"><span class="swatch" style="background:' + DOT[cat] + '; box-shadow:0 0 7px ' + DOT[cat] + ';"></span>' + escapeHtml(label) + '</span>'
        ).join('') + '</div>' +
      '</div>'
    ).join('');
    if (footer) {
      html += '<div class="term-dim">' + escapeHtml(footer.note) +
        (footer.url ? '<br>docs → <a href="' + escapeHtml(footer.url) + '" target="_blank" rel="noopener">' + escapeHtml(footer.url) + '</a>' : '') +
        '</div>';
    }
    projList.innerHTML = html;
  }

  // opens the terminal, auto-types `cmdText`, then calls `show()` to fill the output
  function runAutoCommand(cmdText, show) {
    clearInterval(timers.term);
    clearTimeout(timers.termStart);
    clearTimeout(timers.termShow);
    state.projOpen = true;
    projectsOverlay.hidden = false;
    projList.hidden = true;
    termInteractive.hidden = true;
    typingCursor.hidden = false;
    termHistory = [];
    renderTermHistory();
    termInput.value = '';
    typedCmdEl.textContent = '';
    let n = 0;
    timers.termStart = setTimeout(() => {
      timers.term = setInterval(() => {
        n++;
        typedCmdEl.textContent = cmdText.slice(0, n);
        if (n >= cmdText.length) {
          clearInterval(timers.term);
          timers.termShow = setTimeout(() => {
            typingCursor.hidden = true;
            show();
            projList.hidden = false;
            termInteractive.hidden = false;
            termInput.focus({ preventScroll: true });
            termBody.scrollTop = 0;
          }, 320);
        }
      }, 55);
    }, 350);
  }

  function openProjects(e) {
    e.preventDefault(); e.stopPropagation();
    runAutoCommand(TERM_CMD, () => renderProjectsList(PROJECTS));
  }

  function openTech(name, url, emptyNote) {
    const hits = projectsUsing(name);
    runAutoCommand('grep -ril "' + name + '" ~/projects', () => renderProjectsList(hits, techKey(name), {
      note: hits.length
        ? hits.length + ' project' + (hits.length > 1 ? 's' : '') + ' orbit ' + name + '.'
        : (emptyNote || 'no public repo uses ' + name + ' yet - it lives in the day job and private work.'),
      url,
    }));
  }

  function closeProjects(e) {
    if (e) e.stopPropagation();
    clearInterval(timers.term);
    clearTimeout(timers.termStart);
    clearTimeout(timers.termShow);
    state.projOpen = false;
    projectsOverlay.hidden = true;
  }

  // survives `clear`, like bash
  const cmdLog = [];
  let cmdLogIdx = 0;

  function walkHistory(dir) {
    if (!cmdLog.length) return;
    cmdLogIdx = Math.max(0, Math.min(cmdLog.length, cmdLogIdx + dir));
    termInput.value = cmdLogIdx < cmdLog.length ? cmdLog[cmdLogIdx] : '';
    const end = termInput.value.length;
    termInput.setSelectionRange(end, end);
  }

  function commonPrefix(words) {
    let p = words[0];
    for (const w of words) while (!w.toLowerCase().startsWith(p.toLowerCase())) p = p.slice(0, -1);
    return p;
  }

  function completeTab() {
    const v = termInput.value;
    const tokens = v.replace(/^\s+/, '').split(/\s+/);
    const cur = tokens[tokens.length - 1];
    const bin = tokens[0];
    let pool;
    if (tokens.length === 1) pool = TERM_COMMANDS;
    else if (bin === 'git') pool = ['log', 'status'];
    else if (bin === 'curl' || bin === 'wget') pool = ['resume.pdf'];
    else if (bin === 'cd') pool = ['projects/', 'stack/', 'experience/'];
    else if (bin === 'cat') pool = Object.keys(TERM_FILES).concat('resume.pdf');
    else pool = [];
    const hits = pool.filter((w) => w.toLowerCase().startsWith(cur.toLowerCase()));
    if (!hits.length) return;
    const head = v.slice(0, v.length - cur.length);
    if (hits.length === 1) {
      termInput.value = head + hits[0] + (hits[0].endsWith('/') ? '' : ' ');
      return;
    }
    const prefix = commonPrefix(hits);
    if (prefix.length > cur.length) { termInput.value = head + prefix; return; }
    termHistory.push({ cmd: v, out: hits.join('   '), color: '#8a8a92' });
    renderTermHistory();
    termBody.scrollTop = termBody.scrollHeight;
  }

  function timeAgo(date) {
    const s = Math.max(1, Math.round((Date.now() - date) / 1000));
    const steps = [[31536000, 'year'], [2592000, 'month'], [604800, 'week'], [86400, 'day'], [3600, 'hour'], [60, 'minute'], [1, 'second']];
    for (const [secs, unit] of steps) {
      if (s >= secs) { const n = Math.floor(s / secs); return n + ' ' + unit + (n > 1 ? 's' : '') + ' ago'; }
    }
    return 'just now';
  }

  let commitCache = null;
  async function fetchCommits() {
    if (commitCache) return commitCache;
    const lists = await Promise.all(PUBLIC_REPOS.map(async (repo) => {
      const res = await fetch('https://api.github.com/repos/lofeeeee/' + repo + '/commits?per_page=5');
      if (!res.ok) throw new Error(res.status === 403 || res.status === 429 ? 'rate limited by api.github.com' : 'HTTP ' + res.status);
      const commits = await res.json();
      return commits.map((c) => ({
        repo,
        sha: c.sha.slice(0, 7),
        msg: (c.commit.message || '').split('\n')[0],
        date: new Date((c.commit.author || c.commit.committer).date),
      }));
    }));
    commitCache = lists.flat().sort((a, b) => b.date - a.date).slice(0, 10);
    return commitCache;
  }

  // output that arrives later: print a placeholder now, fill it in when ready
  function asyncOutput(cmd, pending, work) {
    const entry = { cmd, out: pending, color: '#8a8a92' };
    termHistory.push(entry);
    renderTermHistory();
    termInput.value = '';
    termBody.scrollTop = termBody.scrollHeight;
    work().then(([out, color]) => {
      entry.out = out;
      entry.color = color;
      renderTermHistory();
      termBody.scrollTop = termBody.scrollHeight;
    });
  }

  function gitLog(cmd) {
    asyncOutput(cmd, 'remote: fetching commits from github.com/lofeeeee ...', () => fetchCommits().then(
      (commits) => [commits.map((c) => {
        const msg = c.msg.length > 58 ? c.msg.slice(0, 57) + '…' : c.msg;
        return c.sha + '  ' + c.repo.padEnd(17) + msg + '  (' + timeAgo(c.date) + ')';
      }).join('\n'), '#c8c8cc'],
      (err) => ['fatal: unable to access \'https://github.com/lofeeeee/\': ' + err.message + '\nhint: browse them at https://github.com/lofeeeee?tab=repositories', '#f87171']
    ));
  }

  function curlResume(cmd) {
    asyncOutput(cmd, '  % Total    % Received   Speed\n  0     0    0     0      --:--', () => fetch('resume.pdf', { method: 'HEAD' }).then(
      (res) => {
        if (!res.ok) return ['curl: (22) The requested URL returned error: ' + res.status, '#f87171'];
        const kb = Math.max(1, Math.round((+res.headers.get('content-length') || 0) / 1024));
        const a = document.createElement('a');
        a.href = 'resume.pdf';
        a.download = 'marco-antonio-resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        return ['  % Total    % Received   Speed\n100  ' + kb + 'k  100  ' + kb + 'k    --:--\nsaved resume.pdf -> your downloads', '#4ade80'];
      },
      () => ['curl: (7) Failed to connect: resume.pdf is not reachable from here', '#f87171']
    ));
  }

  function handleTermKey(e) {
    if (e.key === 'ArrowUp') { e.preventDefault(); walkHistory(-1); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); walkHistory(1); return; }
    if (e.key === 'Tab') { e.preventDefault(); completeTab(); return; }
    if (e.key !== 'Enter') return;
    const raw = termInput.value || '';
    const cmd = raw.trim();
    if (cmd === '') return;
    cmdLog.push(cmd);
    cmdLogIdx = cmdLog.length;
    if (cmd === 'exit') { closeProjects(); return; }

    const done = (out, color) => {
      termHistory.push({ cmd, out, color: color || '#9a9aa2' });
      renderTermHistory();
      termInput.value = '';
      termBody.scrollTop = termBody.scrollHeight;
    };

    if (cmd === 'clear') {
      clearInterval(timers.term);
      termHistory = [];
      renderTermHistory();
      termInput.value = '';
      projList.hidden = true;
      typedCmdEl.textContent = '';
      typingCursor.hidden = true;
      return;
    }
    if (cmd === 'sudo' || cmd.startsWith('sudo ')) return done('lofee is not in the sudoers file.  This incident will be reported.', '#f87171');

    const tokens = cmd.split(/\s+/);
    const bin = tokens[0];
    const arg = raw.slice(raw.indexOf(bin) + bin.length).trim();

    if (cmd === 'ls -la ~/projects' || cmd === 'ls -la' || cmd === 'll') {
      termHistory = [];
      renderTermHistory();
      termInput.value = '';
      typedCmdEl.textContent = TERM_CMD;
      projList.hidden = false;
      renderProjectsList();
      termBody.scrollTop = 0;
      return;
    }
    if (cmd === 'pwd') return done('/home/lofee/projects');
    if (cmd === 'ls') return done('about.txt   contact.txt   exploring.txt   resume.pdf   projects/   stack/   experience/');
    if (bin === 'cat') {
      const file = tokens[1];
      if (!file) return done('usage: cat FILE   (try: ls)');
      if (file === 'resume.pdf') return done('cat: resume.pdf: binary file - try `curl resume.pdf`', '#f87171');
      if (TERM_FILES[file]) return done(CMDS[TERM_FILES[file]]);
      return done('cat: ' + file + ': No such file or directory', '#f87171');
    }
    if (bin === 'grep') {
      const pattern = tokens.slice(1).filter((t) => !t.startsWith('-') && !t.startsWith('~')).join(' ').replace(/^["']|["']$/g, '');
      if (!pattern) return done('usage: grep PATTERN ~/projects', '#f87171');
      const key = techKey(pattern);
      const hits = PROJECTS.filter((p) => p.tech.some(([l]) => techKey(l).includes(key)) || p.desc.toLowerCase().includes(pattern.toLowerCase()));
      return done(hits.length ? hits.map((p) => '~/projects/' + p.name).join('\n') : '(no matches)', hits.length ? '#c8c8cc' : '#8a8a92');
    }
    if (bin === 'git') {
      if (tokens[1] === 'log') return gitLog(cmd);
      if (tokens[1] === 'status') return done('On branch main\nYour branch is up to date with \'origin/main\'.\n\nnothing to commit, working tree clean');
      if (!tokens[1]) return done('usage: git log | git status');
      return done('git: \'' + tokens[1] + '\' is not a git command. See \'git log\'.', '#f87171');
    }
    if (bin === 'curl' || bin === 'wget') {
      const target = tokens.slice(1).find((t) => !t.startsWith('-'));
      if (!target) return done(bin + ': try \'' + bin + ' resume.pdf\'', '#f87171');
      if (target.replace(/^\.?\//, '') === 'resume.pdf') return curlResume(cmd);
      return done(bin === 'curl' ? 'curl: (6) Could not resolve host: ' + target : 'wget: unable to resolve host address \'' + target + '\'', '#f87171');
    }
    if (bin === 'cd') return done('');
    if (cmd === 'date') return done(new Date().toString());
    if (bin === 'echo') return done(arg);
    if (cmd === 'uname -a' || cmd === 'uname') return done('Linux prodnode-01 6.9.4-2-lts #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux');
    if (cmd === 'history') return done(cmdLog.map((c, i) => '  ' + (i + 1) + '  ' + c).join('\n'));
    if (Object.hasOwn(CMDS, cmd)) return done(CMDS[cmd], '#9a9aa2');
    return done('bash: ' + bin + ': command not found', '#f87171');
  }

  // ---------------------------------------------------------------------
  // Kernel panic / name click
  // ---------------------------------------------------------------------
  let nameTs = 0, nameN = 0;
  function nameClick() {
    const now = Date.now();
    if (!nameTs || now - nameTs > 4000) { nameTs = now; nameN = 0; }
    nameN++;
    if (nameN >= 5) {
      nameN = 0;
      state.panicOn = true;
      state.saverOn = false;
      state.projOpen = false;
      kernelPanic.hidden = false;
      saver.hidden = true;
      projectsOverlay.hidden = true;
      clearTimeout(timers.panic);
      timers.panic = setTimeout(() => {
        kernelPanic.hidden = true;
        state.panicOn = false;
        reset();
      }, 2400);
    }
  }

  // ---------------------------------------------------------------------
  // Idle screensaver
  // ---------------------------------------------------------------------
  function resetIdle() {
    clearTimeout(timers.idle);
    if (state.saverOn) { state.saverOn = false; saver.hidden = true; }
    timers.idle = setTimeout(() => {
      if (stage.dataset.phase === 'profile' && !state.panicOn && !reduceMotion.matches) {
        state.saverOn = true;
        saver.hidden = false;
      }
    }, 60000);
  }

  function wake() {
    if (state.saverOn) { state.saverOn = false; saver.hidden = true; }
  }

  // ---------------------------------------------------------------------
  // Easter eggs: konami, right-click, devtools
  // ---------------------------------------------------------------------
  const konamiSeq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let keyBuf = [];
  let rcCount = 0;

  function onKeyDown(e) {
    keyBuf.push(e.key);
    if (keyBuf.length > 10) keyBuf.shift();
    if (keyBuf.length === 10 && konamiSeq.every((k, i) => keyBuf[i] === k)) {
      keyBuf = [];
      state.disco = true;
      constellationScale.parentElement.querySelector('.constellation-inner').style.animation = 'discoHue 1.1s linear infinite';
      clearTimeout(timers.disco);
      timers.disco = setTimeout(() => {
        state.disco = false;
        constellationScale.parentElement.querySelector('.constellation-inner').style.animation = 'none';
      }, 10000);
      unlockAch('konami', "Besides, i'm the Strongest", 'Throughout heaven and earth, I alone am the honored one');
    }
    const k = (e.key || '').toLowerCase();
    const combo = (e.ctrlKey || e.metaKey) && e.shiftKey && (k === 'i' || k === 'j' || k === 'c');
    const viewSrc = (e.ctrlKey || e.metaKey) && k === 'u';
    if (e.key === 'F12' || combo || viewSrc) {
      unlockAch('theend', 'This is the End', 'Hold your breath and count to ten');
    }
  }

  function onContextMenu(e) {
    e.preventDefault();
    rcCount++;
    clearTimeout(timers.rc);
    timers.rc = setTimeout(() => { rcCount = 0; }, 2500);
    if (rcCount >= 5) {
      rcCount = 0;
      unlockAch('god', 'Playing God aren\'t we?', 'Human are indeed made as the same material as a Star');
    }
  }

  function checkDevtools() {
    if (window.top !== window.self) return;
    const gap = 168;
    if (window.outerWidth - window.innerWidth > gap || window.outerHeight - window.innerHeight > gap) {
      unlockAch('theend', 'This is the End', 'Hold your breath and count to ten');
    }
  }

  // ---------------------------------------------------------------------
  // Wire up
  // ---------------------------------------------------------------------
  document.getElementById('screenProfile').addEventListener('click', deselect);
  nameHeading.addEventListener('click', (e) => { e.stopPropagation(); nameClick(); });
  openProjectsLink.addEventListener('click', openProjects);
  closeProjectsBtn.addEventListener('click', closeProjects);
  projectsOverlay.addEventListener('click', closeProjects);
  projectsWindow.addEventListener('click', (e) => e.stopPropagation());
  termBody.addEventListener('click', (e) => { e.stopPropagation(); termInput.focus(); });
  termInput.addEventListener('keydown', handleTermKey);
  termInput.addEventListener('click', (e) => e.stopPropagation());
  saver.addEventListener('mousemove', wake);
  saver.addEventListener('click', wake);
  saver.addEventListener('touchstart', wake, { passive: true });

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('contextmenu', onContextMenu);
  timers.devtools = setInterval(checkDevtools, 1600);
  ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach((ev) => window.addEventListener(ev, resetIdle, { passive: true }));
  window.addEventListener('resize', updateResponsive);

  // initial render
  renderStars();
  renderShooters();
  renderMissions();
  renderSatelliteOrbit();
  renderProtostars();
  renderWarpStars();
  renderConstellation();
  checkMoon();
  updateResponsive();
  resetIdle();
  runBoot();
  scheduleComet();
})();
