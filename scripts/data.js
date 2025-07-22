const galleryData = [
    {
        id: 1,
        title: "Neon Gridscape",
        image: "https://images.unsplash.com/photo-1729520126776-2235a6baa1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A retro-futuristic world inspired by classic terminal interfaces and cyberpunk aesthetics.",
        artist: "BashBytes Team",
        category: "Digital Art",
        date: "2025-07-01"
    },
    {
        id: 2,
        title: "The Kernel Bloom",
        image: "https://images.unsplash.com/photo-1639091824355-48221063de7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A flower abstractly grown from binary trees — symbolizing Linux kernel development.",
        artist: "A. Byte",
        category: "Abstract",
        date: "2025-06-28"
    },
    {
        id: 3,
        title: "Terminal Dreams",
        image: "https://images.unsplash.com/photo-1649778650608-841ab432b14c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "An artist’s impression of escaping into the terminal, where commands open portals.",
        artist: "EchoArt",
        category: "Conceptual",
        date: "2025-07-10"
    },
    {
        id: 4,
        title: "Shell & Soul",
        image: "https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "Inspired by the elegance of Bash scripting — combining form, flow, and logic.",
        artist: "BashBytes Collective",
        category: "Mixed Media",
        date: "2025-07-04"
    },
    {
        id: 5,
        title: "Minimal Ping",
        image: "https://plus.unsplash.com/premium_photo-1748880489520-3d0c5a39d4a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A minimalist representation of network connectivity and digital communication.",
        artist: "PixelCoder",
        category: "Minimalism",
        date: "2025-07-15"
    },
    {
        id: 6,
        title: "404 Not Found",
        image: "https://images.unsplash.com/photo-1570873755554-3471c42de519?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A surreal interpretation of loss and discovery in the digital age.",
        artist: "Errorist",
        category: "Surrealism",
        date: "2025-07-20"
    },
    {
        id: 7,
        title: "Neon Gridscape",
        image: "https://images.unsplash.com/photo-1691040516392-d9700bb4ebce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A retro-futuristic world inspired by terminal grids and cyberpunk tones.",
        artist: "BashBytes Team",
        category: "Digital Art",
        date: "2025-07-01"
    },
    {
        id: 8,
        title: "The Kernel Bloom",
        image: "https://images.unsplash.com/photo-1723792306904-c417c0da40e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNvbXB1dGVyJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        inspiration: "A flower grown from binary logic — symbolizing the heart of Linux.",
        artist: "A. Byte",
        category: "Abstract",
        date: "2025-06-28"
    },
    {
        id: 9,
        title: "Terminal Dreams",
        image: "https://images.unsplash.com/photo-1701318134576-6100f43c8531?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Escaping into a shell where commands spark imagination.",
        artist: "EchoArt",
        category: "Conceptual",
        date: "2025-07-10"
    },
    {
        id: 10,
        title: "Shell & Soul",
        image: "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Inspired by the elegance of Bash scripting — combining form, flow, and logic.",
        artist: "BashBytes Collective",
        category: "Mixed Media",
        date: "2025-07-04"
    },
    {
        id: 11,
        title: "Minimal Ping",
        image: "https://images.unsplash.com/photo-1744627549992-cd7a5f157344?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Capturing the silence and success of a single ping in digital void.",
        artist: "PixelCoder",
        category: "Minimalism",
        date: "2025-07-15"
    },
    {
        id: 12,
        title: "404 Not Found",
        image: "https://images.unsplash.com/photo-1658856039235-7745824f88db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "A surreal take on loss, misdirection, and digital absence.",
        artist: "Errorist",
        category: "Surrealism",
        date: "2025-07-20"
    },
    {
        id: 13,
        title: "Stack Overflow",
        image: "https://images.unsplash.com/photo-1701318134822-fcc7630206ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "An abstract overload of knowledge, questions, and recursion.",
        artist: "LoopMage",
        category: "Abstract",
        date: "2025-07-17"
    },
    {
        id: 14,
        title: "Syntax Symphony",
        image: "https://images.unsplash.com/photo-1720969837856-6a25a6428e0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Celebrating code as music — every character a note.",
        artist: "BashBytes Collective",
        category: "Digital Art",
        date: "2025-07-12"
    },
    {
        id: 15,
        title: "The Silent Compiler",
        image: "https://images.unsplash.com/photo-1599939570150-ae85e8432985?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "The unseen beauty of code that just works.",
        artist: "LexicalTuner",
        category: "Conceptual",
        date: "2025-07-05"
    },
    {
        id: 16,
        title: "Root Access",
        image: "https://images.unsplash.com/photo-1642176802212-5166f114d45c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "The power and responsibility of having full control.",
        artist: "SudoBrush",
        category: "Digital Art",
        date: "2025-07-02"
    },
    {
        id: 17,
        title: "Buffer Overflow",
        image: "https://images.unsplash.com/photo-1643131747793-1b103cc66c6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "A chaotic explosion of memory, bits, and corruption.",
        artist: "CyberNova",
        category: "Abstract",
        date: "2025-07-03"
    },
    {
        id: 18,
        title: "Pixel Pulse",
        image: "https://images.unsplash.com/photo-1625961332600-f6eac385c6ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Heartbeat of a machine interpreted through pixels.",
        artist: "BitCrafter",
        category: "Digital Art",
        date: "2025-07-08"
    },
    {
        id: 19,
        title: "Command Echo",
        image: "https://images.unsplash.com/photo-1603481546238-487240415921?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "A visual loop of typed commands and their reflections.",
        artist: "CLIArtist",
        category: "Mixed Media",
        date: "2025-07-09"
    },
    {
        id: 20,
        title: "Dark Mode Muse",
        image: "https://images.unsplash.com/photo-1590109738246-2af866338d35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "Celebrating the modern developer's preferred aesthetic.",
        artist: "ByteShade",
        category: "Minimalism",
        date: "2025-07-11"
    },
    {
        id: 21,
        title: "Boot Sequence",
        image: "https://images.unsplash.com/photo-1618133030686-e1186525ebcc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
        inspiration: "A journey from silence to system — startup as art.",
        artist: "InitSketch",
        category: "Conceptual",
        date: "2025-07-06"
    },
    {
    id: 22,
    title: "Neon Gridscape",
    image: "https://images.unsplash.com/photo-1713463084491-6be1bd8e557a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A retro-futuristic world inspired by terminal grids and cyberpunk tones.",
    artist: "BashBytes Team",
    category: "Digital Art",
    date: "2025-07-01"
  },
  {
    id: 23,
    title: "The Kernel Bloom",
    image: "https://images.unsplash.com/photo-1617240016072-d92174e44171?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A flower grown from binary logic — symbolizing the heart of Linux.",
    artist: "A. Byte",
    category: "Abstract",
    date: "2025-06-28"
  },
  {
    id: 24,
    title: "Terminal Dreams",
    image: "https://images.unsplash.com/photo-1744627550030-fba19e445d08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "Escaping into a shell where commands spark imagination.",
    artist: "EchoArt",
    category: "Conceptual",
    date: "2025-07-10"
  },
  {
    id: 25,
    title: "Shell & Soul",
    image: "https://images.unsplash.com/photo-1639506523005-027d470613c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "Inspired by the elegance of Bash scripting — combining form, flow, and logic.",
    artist: "BashBytes Collective",
    category: "Mixed Media",
    date: "2025-07-04"
  },
  {
    id: 26,
    title: "Minimal Ping",
    image: "https://images.unsplash.com/photo-1610433572201-110753c6cff9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "Capturing the silence and success of a single ping in digital void.",
    artist: "PixelCoder",
    category: "Minimalism",
    date: "2025-07-15"
  },
  {
    id: 27,
    title: "404 Not Found",
    image: "https://images.unsplash.com/photo-1693773852578-65cf594b62dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A surreal take on loss, misdirection, and digital absence.",
    artist: "Errorist",
    category: "Surrealism",
    date: "2025-07-20"
  },
  {
    id: 28,
    title: "Stack Overflow",
    image: "https://images.unsplash.com/photo-1634836466795-2b71a032821c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "An abstract overload of knowledge, questions, and recursion.",
    artist: "LoopMage",
    category: "Abstract",
    date: "2025-07-17"
  },
  {
    id: 29,
    title: "Syntax Symphony",
    image: "https://images.unsplash.com/photo-1623491351874-328be6ece829?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "Celebrating code as music — every character a note.",
    artist: "BashBytes Collective",
    category: "Digital Art",
    date: "2025-07-12"
  },
  {
    id: 30,
    title: "The Silent Compiler",
    image: "https://images.unsplash.com/photo-1672796026880-edc609812fd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "The unseen beauty of code that just works.",
    artist: "LexicalTuner",
    category: "Conceptual",
    date: "2025-07-05"
  },
  {
    id: 31,
    title: "Neon Gridscape",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQyfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A retro-futuristic world inspired by classic terminal interfaces and cyberpunk aesthetics.",
    artist: "BashBytes Team",
    category: "Digital Art",
    date: "2025-07-01"
  },
  {
    id: 32,
    title: "https://images.unsplash.com/photo-1636036766419-4e0e3e628acc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ0fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    image: "/images/kernel-bloom.png",
    inspiration: "A flower abstractly grown from binary trees — symbolizing Linux kernel development.",
    artist: "A. Byte",
    category: "Abstract",
    date: "2025-06-28"
  },
  {
    id: 33,
    title: "Terminal Dreams",
    image: "https://images.unsplash.com/photo-1745829231479-ebbe5ceecfc8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzUxfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "An artist’s impression of escaping into the terminal, where commands open portals.",
    artist: "EchoArt",
    category: "Conceptual",
    date: "2025-07-10"
  },
  {
    id: 34,
    title: "Shell & Soul",
    image: "https://images.unsplash.com/photo-1636488363148-818c08eec89e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU5fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "Inspired by the elegance of Bash scripting — combining form, flow, and logic.",
    artist: "BashBytes Collective",
    category: "Mixed Media",
    date: "2025-07-04"
  },
  {
    id: 35,
    title: "Minimal Ping",
    image: "https://images.unsplash.com/photo-1696360172919-f7fdaaa78a92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYwfHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A minimalist representation of network connectivity and digital communication.",
    artist: "PixelCoder",
    category: "Minimalism",
    date: "2025-07-15"
  },
  {
    id: 36,
    title: "404 Not Found",
    image: "https://images.unsplash.com/photo-1639506522775-6719ae61bc10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE3fHxjb21wdXRlciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D",
    inspiration: "A surreal interpretation of loss and discovery in the digital age.",
    artist: "Errorist",
    category: "Surrealism",
    date: "2025-07-20"
  }


];
console.log("Length: ",galleryData.length);
console.log("Gallery data: ",galleryData);