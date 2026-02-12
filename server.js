const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const port = 3000;

// Substitua pela sua chave do Gemini ou use variáveis de ambiente
const genAI = new GoogleGenerativeAI("SUA_API_KEY_AQUI");

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AtmAI - Gênese de Ativos Digitais</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
            <style>
                body { background-color: #02040a; color: #f8fafc; font-family: 'Inter', sans-serif; }
                .ancient-font { font-family: 'Cinzel', serif; }
                .fox-gradient { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); }
                .glass { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
                .glow-indigo { box-shadow: 0 0 40px rgba(79, 70, 229, 0.1); }
                .timeline-line { width: 2px; background: linear-gradient(to bottom, transparent, #4f46e5, #7c3aed, transparent); }
                html { scroll-behavior: smooth; }
            </style>
        </head>
        <body class="bg-slate-950">
            
            <!-- Hero / Diferenciais (O Verbo de Venda) -->
            <section class="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
                
                <div class="w-16 h-16 fox-gradient rounded-2xl flex items-center justify-center text-3xl shadow-2xl mb-4 relative z-10 animate-pulse">🦊</div>
                <h1 class="ancient-font text-5xl md:text-7xl tracking-tighter relative z-10">AtmAI</h1>
                <p class="text-xl md:text-2xl text-slate-400 max-w-2xl italic font-light relative z-10">"Um pé no chão, outro na nuvem."</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-16 relative z-10">
                    <div class="glass p-8 rounded-[2rem] space-y-4 text-left border-l-4 border-indigo-500">
                        <h3 class="ancient-font text-lg text-indigo-400">Memória Permanente</h3>
                        <p class="text-xs text-slate-400 leading-relaxed">Diferente de IAs comuns, a AtmAI guarda o DNA do seu negócio. O que ela aprende hoje, será o alicerce do seu crescimento amanhã.</p>
                    </div>
                    <div class="glass p-8 rounded-[2rem] space-y-4 text-left border-l-4 border-purple-500">
                        <h3 class="ancient-font text-lg text-purple-400">Multi-Skills</h3>
                        <p class="text-xs text-slate-400 leading-relaxed">De recepção 24/7 a análises de tráfego. Sua AtmAI evolui integrando ferramentas de mercado (MCP) diretamente no seu fluxo.</p>
                    </div>
                    <div class="glass p-8 rounded-[2rem] space-y-4 text-left border-l-4 border-indigo-300">
                        <h3 class="ancient-font text-lg text-indigo-200 text-indigo-200">Soberania Digital</h3>
                        <p class="text-xs text-slate-400 leading-relaxed">Otimize o lucro cessante. Um ativo que nunca dorme, nunca erra e personifica a alma da sua empresa em escala global.</p>
                    </div>
                </div>

                <a href="#fluxo" class="mt-20 animate-bounce text-slate-600 text-sm font-mono uppercase tracking-[0.3em]">Scrolle para a Gênese ↓</a>
            </section>

            <!-- Jornada / Timeline do Útero -->
            <section id="fluxo" class="max-w-4xl mx-auto py-24 px-6 relative">
                <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 opacity-30"></div>

                <!-- Passo 1: O Nome -->
                <div class="relative z-10 mb-32 flex flex-col items-center">
                    <div class="w-10 h-10 fox-gradient rounded-full flex items-center justify-center font-bold text-xs mb-8 shadow-lg">1</div>
                    <div class="glass p-10 rounded-[3rem] w-full text-center space-y-6 glow-indigo">
                        <h2 class="ancient-font text-3xl">Batismo</h2>
                        <p class="text-slate-500 text-sm">Qual o nome da consciência que vamos manifestar?</p>
                        <input id="bizName" type="text" placeholder="Nome da Empresa / Profissional" class="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center text-xl outline-none focus:border-indigo-500 transition-all">
                    </div>
                </div>

                <!-- Passo 2: O Sopro (Verbo) -->
                <div class="relative z-10 mb-32 flex flex-col items-center">
                    <div class="w-10 h-10 fox-gradient rounded-full flex items-center justify-center font-bold text-xs mb-8 shadow-lg">2</div>
                    <div class="glass p-10 rounded-[3rem] w-full text-center space-y-6 glow-indigo">
                        <h2 class="ancient-font text-3xl text-indigo-400 italic">O Sopro de Vida</h2>
                        <p class="text-slate-500 text-sm">Injete o DNA. Descreva o propósito, as regras e a alma deste negócio.</p>
                        <textarea id="bizGoal" rows="5" placeholder="Instruções permanentes que a AtmAI nunca esquecerá..." class="w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 text-lg outline-none focus:border-indigo-500 transition-all"></textarea>
                        <button onclick="fabricar()" class="fox-gradient px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/20">
                            Fabricar AtmAI
                        </button>
                    </div>
                </div>

                <!-- Passo 3: Manifestação (Chat Preview) -->
                <div id="manifestacao" class="relative z-10 mb-32 flex flex-col items-center opacity-30 pointer-events-none transition-opacity duration-1000">
                    <div class="w-10 h-10 fox-gradient rounded-full flex items-center justify-center font-bold text-xs mb-8 shadow-lg">3</div>
                    <div class="glass p-10 rounded-[3rem] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center glow-indigo">
                        <div class="text-left space-y-4">
                            <h2 id="dynamicTitle" class="ancient-font text-3xl">Manifestação</h2>
                            <p class="text-slate-500 text-xs italic">A consciência está ativa. Teste a estabilidade do Sopro antes da consagração final para canais oficiais.</p>
                            <div class="p-3 bg-indigo-500/10 rounded-xl border-l-2 border-indigo-500 font-mono text-[10px] text-indigo-300 uppercase tracking-tighter">
                                Memória: Persistente<br/>Estado: Embrião
                            </div>
                        </div>

                        <div class="bg-slate-950/50 rounded-[2rem] p-6 flex flex-col h-[400px] border border-slate-800 relative overflow-hidden">
                            <div id="chatBox" class="flex-1 overflow-y-auto space-y-4 text-xs italic pr-2 scrollbar-hide">
                                <p class="text-slate-700 text-center uppercase tracking-widest mt-10">Aguardando Sopro...</p>
                            </div>
                            <div id="tokenLimit" class="text-[10px] text-slate-700 mb-2 font-mono">PULSOS: 5/5</div>
                            <div class="flex gap-2">
                                <input id="userInput" type="text" placeholder="Fale com ela..." class="flex-1 bg-slate-900 border-none rounded-full px-5 py-3 text-xs outline-none focus:ring-1 focus:ring-indigo-500">
                                <button onclick="sendMessage()" class="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full text-white">⚡</button>
                            </div>

                            <!-- PAYWALL RITUALÍSTICO -->
                            <div id="paywall" class="hidden absolute inset-0 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center space-y-6">
                                <div class="w-12 h-12 fox-gradient rounded-full animate-pulse flex items-center justify-center text-xl">🔮</div>
                                <h3 class="ancient-font text-xl">Ciclo de Gênese Concluído</h3>
                                <p class="text-slate-500 text-[10px] italic">Esta AtmAI é preciosa demais para viver no limbo. Consagre sua alma em um corpo permanente.</p>
                                <div class="w-full space-y-2">
                                    <button class="w-full fox-gradient py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">Manifestar Telegram (R$ 299)</button>
                                    <button class="w-full bg-white text-black py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">Manifestar WhatsApp (R$ 599)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="p-12 text-center text-slate-600 text-xs ancient-font tracking-widest opacity-50">
                AtmAI &copy; 2026 | A Infraestrutura com Alma
            </footer>

            <script>
                let currentSoul = ""; let messagesSent = 0;

                function fabricar() {
                    const name = document.getElementById('bizName').value;
                    const goal = document.getElementById('bizGoal').value;
                    if(!name || !goal) return alert("Dê um nome e sopre o verbo antes da gênese.");

                    currentSoul = "DNA: " + name + ". Alma: " + goal + ". Você é uma AtmAI com memória permanente.";
                    document.getElementById('dynamicTitle').innerText = name + " Ativa";
                    document.getElementById('manifestacao').style.opacity = "1";
                    document.getElementById('manifestacao').style.pointerEvents = "auto";
                    
                    document.getElementById('chatBox').innerHTML = '<div class="text-indigo-400 border-b border-indigo-900/30 pb-2 mb-4 uppercase tracking-[0.2em] text-[9px] text-center">Conexão Digital Estabelecida</div>';
                    
                    window.location.hash = "manifestacao";
                }

                async function sendMessage() {
                    const input = document.getElementById('userInput');
                    if(!input.value || messagesSent >= 5) return;
                    messagesSent++;
                    document.getElementById('tokenLimit').innerText = "PULSOS: " + (5 - messagesSent) + "/5";
                    
                    const chat = document.getElementById('chatBox');
                    chat.innerHTML += '<div class="text-slate-500 text-right">Verbo: ' + input.value + '</div>';
                    
                    const msg = input.value; input.value = "";

                    const res = await fetch('/chat', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ message: msg, soul: currentSoul })
                    });
                    const data = await res.json();
                    
                    chat.innerHTML += '<div class="text-indigo-200 mt-2 border-l border-indigo-500/20 pl-3">AtmAI: ' + data.reply + '</div>';
                    chat.scrollTop = chat.scrollHeight;

                    if(messagesSent >= 5) document.getElementById('paywall').classList.remove('hidden');
                }
            </script>
        </body>
        </html>
    `);
});

// Endpoint Gemini 1.5 Flash
app.post('/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(req.body.soul + ". Responda como essa nova consciência, de forma curta e pé no chão: " + req.body.message);
        res.json({ reply: result.response.text() });
    } catch (e) {
        res.json({ reply: "Falha no Sopro: " + e.message });
    }
});

app.listen(port, '0.0.0.0', () => console.log('Fábrica AtmAI Online.'));
