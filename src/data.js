// All content below is drawn directly from Sharib Ahmad's resume.
// Do not add skills, links, or claims that are not sourced from it.

export const profile = {
  name: 'Sharib Ahmad',
  degree: 'B.E. Electronics & Telecommunication Engineering',
  headline: 'Electronics & Embedded Systems Engineer',
  location: 'Pimpri-Chinchwad, Maharashtra, India',
  email: 'sharib.tech1@gmail.com',
  phone: '+91-9889792085',
  intro:
    "I'm an Electronics & Telecommunication Engineering student who builds things that sit at the boundary of hardware and code — ESP32-based systems, sensor-driven prototypes, and the firmware that ties them together. My work spans embedded C/C++, Wi‑Fi/Bluetooth communication, GPIO-level interfacing, and hands-on circuit simulation, with a growing focus on IoT and hardware product development.",
}

export const skillCategories = [
  {
    title: 'Embedded & Microcontrollers',
    items: ['ESP32', 'Arduino', 'Microcontrollers', 'C/C++'],
  },
  {
    title: 'Communication & IoT',
    items: ['Wi-Fi', 'Bluetooth', 'MQTT', 'Web Server', 'IoT'],
  },
  {
    title: 'Hardware',
    items: ['Sensors', 'GPIO', 'Servo Motors', 'Hardware Prototyping', 'Hardware-Software Integration'],
  },
  {
    title: 'Simulation & VLSI',
    items: ['NGSpice', 'Xschem', 'Digital VLSI', 'RTL Design', 'CMOS'],
  },
  {
    title: 'Other',
    items: ['Technical Support', 'Networking', 'System Monitoring', 'Troubleshooting'],
  },
]

export const projects = [
  {
    title: 'Smart Traffic and Pollution Control',
    team: 'Team of 4 · Mentor: Mrs Priyanka Wani',
    problem:
      'Fixed-timer traffic signals don\u2019t respond to real conditions, which causes unnecessary waiting time, fuel wastage, and congestion at intersections.',
    solution:
      'A real-time sensing system that detects vehicle density using sensors/cameras and dynamically adjusts signal timing accordingly. Air purifiers and water sprinklers installed near intersections help reduce emissions from idling vehicles on the spot.',
    technologies: ['Embedded Systems', 'Sensors/Cameras', 'Hardware-Software Integration'],
    features: [
      'Real-time traffic density detection',
      'Dynamic signal timing management',
      'Reduced congestion & waiting time',
      'On-site air pollution control',
      'Improved traffic efficiency & greener environment',
    ],
  },
  {
    title: 'Automatic Solar Tracking and Cleaning System',
    team: 'Team of 4 · Mentor: Vishakha Jadhav',
    problem:
      'Fixed-position solar panels lose efficiency from suboptimal sun orientation and dust accumulation on the panel surface.',
    solution:
      'A low-cost tracking and self-cleaning system built around an ESP32 microcontroller, LDR sensors, and servo motors that automatically orient the panel toward maximum sunlight and clear dust to maintain consistent output.',
    technologies: ['ESP32', 'LDR Sensors', 'Servo Motors', 'Hardware Integration'],
    features: [
      'Automatic solar tracking via LDR sensors',
      'ESP32-driven servo positioning',
      'Automated dust-cleaning mechanism',
      'Improved photovoltaic panel efficiency',
    ],
  },
]

export const experience = [
  {
    org: 'IIT BHU Varanasi',
    role: 'Digital VLSI Design Internship',
    track: 'Academics / Research',
    date: '01 Jun 2026 – 10 Jul 2026',
    skills: ['CMOS', 'Digital VLSI', 'RTL Design', 'NGSpice', 'Xschem', 'Circuit Simulation', 'SRAM/DRAM'],
    points: [
      'Gained hands-on experience in semiconductor devices and CMOS technology',
      'Worked with NGSpice and Xschem for circuit simulation and analysis',
      'Studied digital VLSI design and RTL design concepts',
      'Gained knowledge of SRAM/DRAM memory architecture and design fundamentals',
    ],
  },
  {
    org: 'Sujata Infotech',
    role: 'Field Technical Support Intern',
    track: 'IT / Computers - Software',
    date: '10 Jan 2026 – 10 Feb 2026',
    skills: ['Database Management', 'Technical Support', 'Field Operation', 'System Monitoring', 'Networking', 'Software Troubleshooting'],
    points: [
      'Provided on-site technical assistance for real-time event monitoring systems',
      'Assisted in monitoring running events using RFID technology to record timing and distance',
      'Supported database operations for accurate data entry and record management',
      'Monitored networking systems and resolved connectivity-related issues during live events',
      'Operated and troubleshot monitoring software to keep systems running uninterrupted',
    ],
  },
]

export const certification = {
  title: 'Advanced IoT System with ESP32: Design, Implementation & Development',
  provider: 'Dr. D. Y. Patil Institute of Technology',
  description:
    'A hands-on workshop covering ESP32 programming, wireless communication, and cloud-connected IoT projects.',
  learnings: [
    'ESP32 programming & GPIO interfacing',
    'Wi-Fi & Bluetooth communication',
    'IoT applications with MQTT & web server',
    'Cloud integration with Firebase & Blynk',
  ],
  builtProjects: ['Home automation system', 'IoT weather station', 'RFID attendance system'],
}

export const leadership = [
  {
    org: 'ZION',
    role: 'Event Manager',
    description:
      'Part of the event management team for "Power Play," hosted by ZION at Dr. D. Y. Patil Institute of Technology, with 40 participating teams.',
    points: ['Planning & coordination', 'Real-time problem solving', 'Teamwork & event execution'],
  },
  {
    org: 'IEI Student Chapter',
    role: 'Treasurer',
    description:
      'Oversaw financial management of the chapter, including budgeting, membership fee collection, and operational expense tracking.',
    points: ['Budgeting & documentation', 'Faculty coordination & reporting', 'Organized workshops, seminars & competitions'],
  },
]

export const education = {
  degree: 'B.E. Electronics & Telecommunication Engineering',
  institute: 'Dr. D. Y. Patil Institute of Technology',
  years: '2023 – 2027',
  cgpa: '8.05 / 10',
}
