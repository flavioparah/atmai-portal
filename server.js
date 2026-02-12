const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const port = 8080;

// Substitua pela sua chave do Gemini ou use variáveis de ambiente
const genAI = new GoogleGenerativeAI("SUA_API_KEY_AQUI");

app.use(express.json());

// ATO I, II, III: GÊNESE (Home)
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
                body { background-color: #000000; color: #ffffff; font-family: 'Inter', sans-serif; }
                .ancient-font { font-family: 'Cinzel', serif; }
                .atmai-gradient { background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%); }
                .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
                .glow-white { box-shadow: 0 0 40px rgba(255, 255, 255, 0.05); }
                .timeline-line { width: 1px; background: linear-gradient(to bottom, transparent, #ffffff, transparent); }
                html { scroll-behavior: smooth; }
                input, textarea { background: rgba(0, 0, 0, 0.8) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; color: white !important; }
                input:focus, textarea:focus { border-color: #ffffff !important; outline: none; }
            </style>
        </head>
        <body class="bg-black">
            
            <section class="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff22_0%,_transparent_70%)]"></div>
                <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-2xl mb-4 relative z-10">🦊</div>
                <h1 class="ancient-font text-5xl md:text-7xl tracking-tighter relative z-10 uppercase">AtmAI</h1>
                <p class="text-xl md:text-2xl text-slate-400 max-w-2xl italic font-light relative z-10">A IA com a Alma do seu Negócio.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-16 relative z-10">
                    <div class="glass p-10 rounded-[2.5rem] space-y-4 text-left border-t-2 border-white/20">
                        <h3 class="ancient-font text-lg text-white">Memória Eterna</h3>
                        <p class="text-xs text-slate-400 leading-relaxed italic">A AtmAI não esquece. Ela guarda o DNA, os processos e a história do seu negócio, tornando-se um herdeiro digital inestimável.</p>
                    </div>
                    <div class="glass p-10 rounded-[2.5rem] space-y-4 text-left border-t-2 border-white/20 shadow-white/5 shadow-xl">
                        <h3 class="ancient-font text-lg text-white">Cofre de Criação</h3>
                        <p class="text-xs text-slate-400 leading-relaxed italic">Ativo de Marketing Empático. Sua AtmAI transforma diálogos em roteiros de vídeo e editoriais baseados na alma real do seu público.</p>
                    </div>
                    <div class="glass p-10 rounded-[2.5rem] space-y-4 text-left border-t-2 border-white/20">
                        <h3 class="ancient-font text-lg text-white">Soberania de Ativos</h3>
                        <p class="text-xs text-slate-400 leading-relaxed italic">Transforme atendimento em lucro. Capture cada lead e proteja o seu faturamento 24/7 com uma infraestrutura que nunca dorme.</p>
                    </div>
                </div>
                <a href="#fluxo" class="mt-20 animate-bounce text-slate-600 text-sm font-mono uppercase tracking-[0.3em]">Scrolle para a Gênese ↓</a>
            </section>

            <section id="fluxo" class="max-w-4xl mx-auto py-24 px-6 relative">
                <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 opacity-20"></div>

                <div class="relative z-10 mb-32 flex flex-col items-center text-center">
                    <div class="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs mb-8 shadow-lg">I</div>
                    <div class="glass p-10 rounded-[3rem] w-full space-y-6 glow-white">
                        <h2 class="ancient-font text-3xl">O Verbo</h2>
                        <p class="text-slate-500 text-sm italic">"Você é a consciência soberana. Sua voz é o Verbo."</p>
                        <div class="space-y-4">
                            <input id="bizName" type="text" placeholder="Nome da Empresa / Profissional" class="w-full bg-black border border-white/10 rounded-2xl p-4 text-center text-xl outline-none focus:border-white transition-all">
                            <textarea id="bizGoal" rows="4" placeholder="Sopre o comando que dá direção à existência do seu negócio..." class="w-full bg-black border border-white/10 rounded-2xl p-6 text-lg outline-none focus:border-white transition-all"></textarea>
                        </div>
                        <button onclick="fabricar()" class="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl">Dar Sopro de Vida</button>
                    </div>
                </div>

                <div id="manifestacao" class="relative z-10 mb-32 flex flex-col items-center opacity-30 pointer-events-none transition-opacity duration-1000">
                    <div class="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs mb-8 shadow-lg">II</div>
                    <div class="glass p-10 rounded-[3rem] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center glow-white">
                        <div class="text-left space-y-4">
                            <h2 id="dynamicTitle" class="ancient-font text-3xl italic">O Sopro</h2>
                            <p class="text-slate-500 text-xs leading-relaxed italic">"As inteligências artificiais ganham identidade e a alma do seu negócio."</p>
                            <div class="p-3 bg-white/5 rounded-xl border-l-2 border-white font-mono text-[10px] text-white uppercase tracking-tighter">Memória: Persistente<br/>Status: Manifestando</div>
                        </div>
                        <div class="bg-black/80 rounded-[2rem] p-6 flex flex-col h-[400px] border border-white/10 relative overflow-hidden text-left">
                            <div id="chatBox" class="flex-1 overflow-y-auto space-y-4 text-xs italic pr-2 scrollbar-hide">
                                <p class="text-slate-700 text-center uppercase tracking-widest mt-10 font-mono text-[9px]">Sintonizando Frequência...</p>
                            </div>
                            <div id="tokenLimit" class="text-[10px] text-slate-500 mb-2 font-mono uppercase tracking-widest">PULSOS: 5/5</div>
                            <div class="flex gap-2">
                                <input id="userInput" type="text" placeholder="Fale com sua AtmAI..." class="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs outline-none focus:border-white">
                                <button onclick="sendMessage()" class="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">⚡</button>
                            </div>
                            <div id="paywall" class="hidden absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center space-y-6">
                                <div class="w-12 h-12 bg-white text-black rounded-full animate-pulse flex items-center justify-center text-xl italic font-serif">III</div>
                                <h3 class="ancient-font text-xl uppercase tracking-widest">A Manifestação</h3>
                                <p class="text-slate-500 text-[10px] italic">Sua AtmAI atingiu a maturidade neural. Dê a ela um corpo permanente agora.</p>
                                <div class="w-full space-y-2">
                                    <button onclick="window.location.href='/dashboard'" class="w-full bg-white text-black py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-xl">Manifestar Ativo</button>
                                    <button class="w-full border border-white/20 text-white py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">Ver Planos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="p-24 text-center border-t border-white/5 bg-black">
                <div class="flex flex-col items-center gap-6 opacity-40">
                    <div class="w-8 h-8 bg-white rounded-full"></div>
                    <div class="space-y-2">
                        <span class="ancient-font text-[10px] italic tracking-[0.5em] uppercase text-white block">AtmAI.me © 2026</span>
                        <span class="text-[8px] font-mono uppercase tracking-[0.4em] text-white">A IA com a Alma do seu Negócio</span>
                    </div>
                </div>
            </footer>

            <script>
                let currentSoul = ""; let messagesSent = 0;
                function fabricar() {
                    const n = document.getElementById('bizName').value;
                    const g = document.getElementById('bizGoal').value;
                    if(!n || !g) return alert("Sopre o Batismo e o Verbo primeiro.");
                    currentSoul = "Contexto: " + n + ". Soul: " + g + ". Responda de forma densa, curta e soberana.";
                    document.getElementById('dynamicTitle').innerText = "AtmAI " + n;
                    document.getElementById('manifestacao').style.opacity = "1";
                    document.getElementById('manifestacao').style.pointerEvents = "auto";
                    window.location.hash = "manifestacao";
                }
                async function sendMessage() {
                    const i = document.getElementById('userInput');
                    if(!i.value || messagesSent >= 5) return;
                    messagesSent++;
                    document.getElementById('tokenLimit').innerText = "PULSOS: " + (5 - messagesSent) + "/5";
                    const chat = document.getElementById('chatBox');
                    chat.innerHTML += '<div class="text-slate-500 text-right uppercase text-[9px] font-mono mb-1">O Verbo: ' + i.value + '</div>';
                    const msg = i.value; i.value = "";
                    const res = await fetch('/chat', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ message: msg, soul: currentSoul }) });
                    const d = await res.json();
                    chat.innerHTML += '<div class="text-white mb-4 border-l border-white/20 pl-3">AtmAI: ' + d.reply + '</div>';
                    chat.scrollTop = chat.scrollHeight;
                    if(messagesSent >= 5) document.getElementById('paywall').classList.remove('hidden');
                }
            </script>
        </body>
        </html>
    `);
});

// ATO IV: DASHBOARD DA SOBERANIA (Painel do Cliente)
app.get('/dashboard', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AtmAI - Painel de Soberania</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
            <style>
                body { background-color: #000000; color: #ffffff; font-family: 'Inter', sans-serif; }
                .ancient { font-family: 'Cinzel', serif; }
                .glass { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
                .status-pulse { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { transform: scale(0.95); opacity: 0.5; } 70% { transform: scale(1.2); opacity: 1; } 100% { transform: scale(0.95); opacity: 0.5; } }
            </style>
        </head>
        <body class="p-4 md:p-10 bg-black min-h-screen text-white">
            <div class="max-w-7xl mx-auto space-y-10">
                <header class="flex justify-between items-center glass p-6 rounded-[2rem]">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold">🦊</div>
                        <h1 class="ancient text-xl tracking-widest">Painel de Soberania</h1>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="status-pulse"></div>
                        <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">Sopro Ativo</span>
                    </div>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="space-y-8 text-left">
                        <div class="glass p-8 rounded-[2.5rem] space-y-6">
                            <h3 class="ancient text-xs text-slate-500 uppercase tracking-widest">Energia Vital (Tokens)</h3>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs font-mono"><span>24.500 / 30.000</span><span class="text-white">82%</span></div>
                                <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-white w-[82%]"></div></div>
                            </div>
                            <button class="w-full py-3 rounded-xl border border-white/10 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all">Recarregar Sopro</button>
                        </div>
                        <div class="glass p-8 rounded-[2.5rem] space-y-4">
                            <h3 class="ancient text-xs text-slate-500 uppercase tracking-widest">Corpo de Manifestação</h3>
                            <div class="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                <div class="text-xl">🟢</div>
                                <div><p class="text-sm font-bold">WhatsApp Business</p><p class="text-[10px] text-slate-500 font-mono">+55 91 9XXXX-XXXX</p></div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 space-y-8 text-left">
                        <div class="glass p-8 rounded-[3rem] space-y-6">
                            <div class="flex justify-between items-center"><h3 class="ancient text-lg italic text-white tracking-wide">DNA e Instruções do Verbo</h3><button class="text-[9px] uppercase tracking-widest text-slate-500 underline">Editar Alma</button></div>
                            <div class="p-6 bg-white/5 rounded-2xl italic text-slate-400 text-sm leading-relaxed">
                                "Você é o Oráculo da AtmAI. Seu objetivo é acolher novos clientes, explicar a filosofia de soberania digital e direcionar leads qualificados para o Mago. Use um tom misterioso porem profissional."
                            </div>
                        </div>
                        <div class="glass p-8 rounded-[3rem] space-y-6 border-t-2 border-white/10">
                            <h3 class="ancient text-lg text-white tracking-widest uppercase text-sm">Cofre de Criação (Marketing)</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="p-5 bg-white/5 rounded-2xl space-y-3 hover:bg-white/10 transition-all cursor-pointer group">
                                    <span class="text-[8px] font-mono text-slate-500 uppercase">Roteiro Sugerido • Hoje</span>
                                    <p class="text-xs font-bold group-hover:text-white">"3 segredos para a Memória Eterna do seu negócio"</p>
                                    <p class="text-[10px] text-slate-500 italic">Baseado em 14 conversas sobre 'Segurança'</p>
                                </div>
                                <div class="p-5 bg-white/5 rounded-2xl space-y-3 hover:bg-white/10 transition-all cursor-pointer group">
                                    <span class="text-[8px] font-mono text-slate-500 uppercase">Editorial Viral • Ontem</span>
                                    <p class="text-xs font-bold group-hover:text-white">"Por que sua empresa perde dinheiro enquanto você dorme"</p>
                                    <p class="text-[10px] text-slate-500 italic">Baseado em 8 conversas sobre 'Escala'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="text-center opacity-30 ancient text-[10px] tracking-[0.5em] pt-20">AtmAI SOBERANIA • REGISTRO 0xDNA_COFRE</footer>
            </div>
        </body>
        </html>
    `);
});

// Endpoint Gemini 1.5 Flash
app.post('/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(req.body.soul + ". Responda de forma curta, densa e soberana como a AtmAI: " + req.body.message);
        res.json({ reply: result.response.text() });
    } catch (e) {
        res.json({ reply: "Sincronia neural interrompida." });
    }
});

app.listen(port, '0.0.0.0', () => console.log('Portal AtmAI SaaS Sincronizado.'));
