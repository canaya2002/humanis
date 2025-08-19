module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/consulta/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ContactoPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ContactoPage() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleElements, setVisibleElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const parallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            // Parallax effect
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        };
        const handleMouseMove = (e)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setVisibleElements((prev)=>new Set([
                            ...prev,
                            entry.target.id
                        ]));
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el)=>observer.observe(el));
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, []);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Simular envío de formulario
        try {
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                mensaje: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally{
            setIsSubmitting(false);
            setTimeout(()=>setSubmitStatus(''), 5000);
        }
    };
    const contactInfo = [
        {
            title: 'Teléfono Principal',
            value: '+52 55 1234 5678',
            icon: '/icons/phone-contact.svg',
            link: 'tel:+525512345678'
        },
        {
            title: 'Email Corporativo',
            value: 'contacto@keymatch.mx',
            icon: '/icons/email-contact.svg',
            link: 'mailto:contacto@keymatch.mx'
        },
        {
            title: 'WhatsApp Business',
            value: '+52 55 9876 5432',
            icon: '/icons/whatsapp.svg',
            link: 'https://wa.me/525598765432'
        }
    ];
    const offices = [
        {
            city: 'Ciudad de México',
            address: 'Av. Reforma 250, Piso 15\nCol. Juárez, CDMX 06600',
            phone: '+52 55 1234 5678',
            image: '/images/office-cdmx.jpg'
        },
        {
            city: 'Guadalajara',
            address: 'Av. López Mateos 2077\nCol. Italiana, Guadalajara 44648',
            phone: '+52 33 8765 4321',
            image: '/images/office-gdl.jpg'
        },
        {
            city: 'Monterrey',
            address: 'Ave. Constitución 1000\nCol. Centro, Monterrey 64000',
            phone: '+52 81 5555 1234',
            image: '/images/office-mty.jpg'
        }
    ];
    const faqs = [
        {
            question: '¿Cuánto tiempo toma encontrar candidatos?',
            answer: 'Nuestro tiempo promedio es de 2-3 semanas para presentar los primeros candidatos calificados, y 4-6 semanas para completar el proceso de contratación.'
        },
        {
            question: '¿Cuáles son sus tarifas?',
            answer: 'Nuestras tarifas son competitivas y basadas en el nivel del puesto. Ofrecemos una consulta gratuita donde discutimos presupuestos y expectativas.'
        },
        {
            question: '¿Trabajan con startups pequeñas?',
            answer: 'Sí, trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones. Adaptamos nuestro servicio a las necesidades específicas de cada cliente.'
        },
        {
            question: '¿Qué garantías ofrecen?',
            answer: 'Ofrecemos 90 días de garantía. Si el candidato no cumple expectativas en este período, lo reemplazamos sin costo adicional.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e51068f39be91a6f" + " " + "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e51068f39be91a6f",
                children: '*{box-sizing:border-box;margin:0;padding:0}body{color:#1a202c;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;overflow-x:hidden}.container{max-width:1200px;margin:0 auto;padding:0 2rem}.section-spacing{padding:6rem 0}.section-spacing-large{padding:8rem 0}@keyframes fadeInUp{0%{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}@keyframes slideInLeft{0%{opacity:0;transform:translate(-80px)}to{opacity:1;transform:translate(0)}}@keyframes slideInRight{0%{opacity:0;transform:translate(80px)}to{opacity:1;transform:translate(0)}}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-fade-up{animation:.8s ease-out forwards fadeInUp}.animate-slide-left{animation:.8s ease-out forwards slideInLeft}.animate-slide-right{animation:.8s ease-out forwards slideInRight}.animate-slide-bottom{animation:.8s ease-out forwards slideInFromBottom}.animate-scale-in{animation:.6s ease-out forwards scaleIn}.animate-float{animation:3s ease-in-out infinite float}.animate-pulse{animation:2s ease-in-out infinite pulse}.animate-spin{animation:1s linear infinite spin}.hover-lift{transition:all .3s}.hover-lift:hover{transform:translateY(-5px)}.hover-scale{transition:all .3s}.hover-scale:hover{transform:scale(1.02)}.hover-glow{transition:all .3s}.hover-glow:hover{box-shadow:0 20px 60px #3b82f64d}.gradient-text{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#1e293b 0%,#3b82f6 50%,#1d4ed8 100%);background-clip:text}.gradient-bg{background:linear-gradient(135deg,#3b82f6,#1d4ed8)}.gradient-green{background:linear-gradient(135deg,#059669,#047857)}.glass-effect{backdrop-filter:blur(20px);background:#fffffff2;border-bottom:1px solid #e5e7eb4d}.card-shadow{box-shadow:0 10px 40px #00000014}.card-shadow-hover{transition:all .4s}.card-shadow-hover:hover{transform:translateY(-8px);box-shadow:0 20px 60px #0000001f}.btn-primary{color:#fff;cursor:pointer;text-align:center;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border:none;border-radius:50px;padding:1rem 2rem;font-size:1rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-block;box-shadow:0 4px 20px #3b82f64d}.btn-primary:hover{transform:translateY(-3px);box-shadow:0 8px 30px #3b82f666}.btn-primary:disabled{opacity:.6;cursor:not-allowed;transform:none}.btn-secondary{color:#3b82f6;cursor:pointer;text-align:center;background:0 0;border:2px solid #3b82f6;border-radius:50px;padding:1rem 2rem;font-size:1rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-block}.btn-secondary:hover{color:#fff;background:#3b82f6;transform:translateY(-3px)}.hero-bg{background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 50%,#f1f5f9 100%);align-items:center;min-height:100vh;display:flex;position:relative;overflow:hidden}.hero-bg:before{content:"";background:radial-gradient(circle,#3b82f60d 0%,#0000 50%);width:100%;height:200%;animation:8s ease-in-out infinite float;position:absolute;top:-50%;right:-50%}.particles{pointer-events:none;width:100%;height:100%;position:absolute;overflow:hidden}.particle{background:#3b82f61a;border-radius:50%;animation:6s ease-in-out infinite float;position:absolute}.particle:first-child{width:80px;height:80px;animation-delay:0s;top:20%;left:10%}.particle:nth-child(2){width:60px;height:60px;animation-delay:2s;top:60%;right:10%}.particle:nth-child(3){width:40px;height:40px;animation-delay:4s;bottom:20%;left:20%}.grid-2{grid-template-columns:1fr 1fr;align-items:center;gap:4rem;display:grid}.grid-3{grid-template-columns:repeat(3,1fr);gap:2rem;display:grid}.contact-card{text-align:center;background:#fff;border:1px solid #e2e8f0;border-radius:1.5rem;padding:2rem;transition:all .3s;box-shadow:0 10px 30px #00000014}.contact-card:hover{border-color:#3b82f6;transform:translateY(-5px);box-shadow:0 15px 40px #0000001f}.office-card{background:#fff;border-radius:2rem;transition:all .3s;overflow:hidden;box-shadow:0 10px 40px #00000014}.office-card:hover{transform:translateY(-8px);box-shadow:0 20px 60px #00000026}.form-group{margin-bottom:1.5rem}.form-label{color:#374151;margin-bottom:.5rem;font-size:.9rem;font-weight:600;display:block}.form-input{background:#fff;border:2px solid #e2e8f0;border-radius:1rem;width:100%;padding:1rem 1.5rem;font-size:1rem;transition:all .3s}.form-input:focus{border-color:#3b82f6;outline:none;box-shadow:0 0 0 3px #3b82f61a}.form-textarea{resize:vertical;background:#fff;border:2px solid #e2e8f0;border-radius:1rem;width:100%;min-height:120px;padding:1rem 1.5rem;font-family:inherit;font-size:1rem;transition:all .3s}.form-textarea:focus{border-color:#3b82f6;outline:none;box-shadow:0 0 0 3px #3b82f61a}.success-message{color:#fff;text-align:center;background:linear-gradient(135deg,#059669,#047857);border-radius:1rem;margin-bottom:1rem;padding:1rem 1.5rem;font-weight:600}.error-message{color:#fff;text-align:center;background:linear-gradient(135deg,#dc2626,#b91c1c);border-radius:1rem;margin-bottom:1rem;padding:1rem 1.5rem;font-weight:600}.faq-item{cursor:pointer;background:#fff;border:1px solid #e2e8f0;border-radius:1rem;margin-bottom:1rem;padding:1.5rem;transition:all .3s;box-shadow:0 5px 15px #0000000d}.faq-item:hover{border-color:#3b82f6;box-shadow:0 8px 25px #3b82f61a}.faq-question{color:#1e293b;margin-bottom:.5rem;font-weight:600}.faq-answer{color:#64748b;line-height:1.6}.text-center{text-align:center}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mb-12{margin-bottom:3rem}.mb-16{margin-bottom:4rem}.mb-20{margin-bottom:5rem}.mt-8{margin-top:2rem}.mt-12{margin-top:3rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.rounded-full{border-radius:9999px}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-y-4>*+*{margin-top:1rem}.space-y-6>*+*{margin-top:1.5rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}.text-5xl{font-size:3rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-black{font-weight:900}.text-slate-600{color:#64748b}.text-slate-700{color:#374151}.text-slate-900{color:#1e293b}.text-white{color:#fff}.text-blue-600{color:#3b82f6}.text-green-600{color:#059669}.bg-white{background-color:#fff}.bg-blue-50{background-color:#eff6ff}.bg-slate-50{background-color:#f8fafc}.bg-green-600{background-color:#059669}.bg-green-700{background-color:#047857}.hover\\\\:bg-green-700:hover{background-color:#047857}.border{border-width:1px}.border-slate-200{border-color:#e2e8f0}.border-blue-200{border-color:#bfdbfe}.w-6{width:1.5rem}.w-8{width:2rem}.w-12{width:3rem}.w-16{width:4rem}.w-24{width:6rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-12{height:3rem}.h-16{height:4rem}.h-24{height:6rem}.h-32{height:8rem}.h-48{height:12rem}.h-64{height:16rem}.w-full{width:100%}.h-full{height:100%}.fixed{position:fixed}.relative{position:relative}.absolute{position:absolute}.top-0{top:0}.inset-0{inset:0}.z-50{z-index:50}.z-10{z-index:10}.opacity-0{opacity:0}.opacity-90{opacity:.9}.opacity-95{opacity:.95}.overflow-hidden{overflow:hidden}.transition-all{transition:all .3s}@media (width<=1024px){.grid-2{grid-template-columns:1fr;gap:3rem}.text-5xl{font-size:2.5rem}}@media (width<=768px){.container{padding:0 1rem}.section-spacing{padding:4rem 0}.section-spacing-large{padding:5rem 0}.grid-3{grid-template-columns:1fr;gap:1.5rem}.text-4xl{font-size:1.875rem}.text-5xl{font-size:2rem}.flex-mobile-col{flex-direction:column}.gap-mobile-4{gap:1rem}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-e51068f39be91a6f" + " " + `fixed top-0 w-full z-50 transition-all ${isScrolled ? 'glass-effect shadow-lg' : 'glass-effect'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e51068f39be91a6f" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e51068f39be91a6f" + " " + "flex justify-between items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e51068f39be91a6f" + " " + "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo/keymatch-logo.svg",
                                        alt: "KeyMatch Logo",
                                        width: 40,
                                        height: 40,
                                        className: "animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e51068f39be91a6f" + " " + "text-2xl font-black gradient-text",
                                        children: "KeyMatch"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 696,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 688,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "jsx-e51068f39be91a6f" + " " + "hidden md:flex gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "jsx-e51068f39be91a6f" + " " + "text-slate-600 hover:text-blue-600 font-medium transition-all hover-lift",
                                        children: "Inicio"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 702,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#servicios",
                                        className: "jsx-e51068f39be91a6f" + " " + "text-slate-600 hover:text-blue-600 font-medium transition-all hover-lift",
                                        children: "Servicios"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/por-que-nosotros",
                                        className: "jsx-e51068f39be91a6f" + " " + "text-slate-600 hover:text-blue-600 font-medium transition-all hover-lift",
                                        children: "¿Por qué nosotros?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 708,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#testimonios",
                                        className: "jsx-e51068f39be91a6f" + " " + "text-slate-600 hover:text-blue-600 font-medium transition-all hover-lift",
                                        children: "Testimonios"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 711,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contacto",
                                        className: "jsx-e51068f39be91a6f" + " " + "text-blue-600 font-medium transition-all hover-lift",
                                        children: "Contacto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 714,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/consulta",
                                className: "jsx-e51068f39be91a6f" + " " + "gradient-bg text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover-lift",
                                children: "Consulta Gratuita"
                            }, void 0, false, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 719,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 687,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 686,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e51068f39be91a6f" + " " + "hero-bg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e51068f39be91a6f" + " " + "particles",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e51068f39be91a6f" + " " + "particle"
                            }, void 0, false, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e51068f39be91a6f" + " " + "particle"
                            }, void 0, false, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e51068f39be91a6f" + " " + "particle"
                            }, void 0, false, {
                                fileName: "[project]/app/consulta/page.js",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e51068f39be91a6f" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e51068f39be91a6f" + " " + "grid-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: "hero-content",
                                    className: "jsx-e51068f39be91a6f" + " " + `${visibleElements.has('hero-content') ? 'animate-slide-left' : 'opacity-0'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e51068f39be91a6f" + " " + "flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200 w-max",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e51068f39be91a6f" + " " + "w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 742,
                                                    columnNumber: 17
                                                }, this),
                                                "Conecta con Nosotros"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "jsx-e51068f39be91a6f" + " " + "text-5xl font-black mb-8 gradient-text",
                                            children: "Comencemos una Conversación"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-e51068f39be91a6f" + " " + "text-xl text-slate-600 mb-12 leading-relaxed",
                                            children: "Estamos aquí para ayudarte a encontrar el talento perfecto para tu empresa. Contáctanos hoy y descubre cómo podemos transformar tu equipo con los mejores profesionales de México."
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e51068f39be91a6f" + " " + "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e51068f39be91a6f" + " " + "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e51068f39be91a6f" + " " + "w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/icons/phone-white.svg",
                                                                alt: "Teléfono",
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 759,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 758,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e51068f39be91a6f",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-e51068f39be91a6f" + " " + "font-semibold text-slate-900",
                                                                    children: "Llámanos Directamente"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 762,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tel:+525512345678",
                                                                    className: "jsx-e51068f39be91a6f" + " " + "text-blue-600 font-bold text-lg hover:text-blue-700",
                                                                    children: "+52 55 1234 5678"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 763,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 761,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 757,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e51068f39be91a6f" + " " + "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e51068f39be91a6f" + " " + "w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/icons/email-white.svg",
                                                                alt: "Email",
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 771,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 770,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e51068f39be91a6f",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-e51068f39be91a6f" + " " + "font-semibold text-slate-900",
                                                                    children: "Envíanos un Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 774,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "mailto:contacto@keymatch.mx",
                                                                    className: "jsx-e51068f39be91a6f" + " " + "text-green-600 font-bold text-lg hover:text-green-700",
                                                                    children: "contacto@keymatch.mx"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 775,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 773,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 769,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: "hero-form",
                                    className: "jsx-e51068f39be91a6f" + " " + `${visibleElements.has('hero-form') ? 'animate-slide-right' : 'opacity-0'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e51068f39be91a6f" + " " + "bg-white p-8 rounded-3xl card-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-e51068f39be91a6f" + " " + "text-2xl font-bold text-slate-900 mb-6 text-center",
                                                children: "Escríbenos un Mensaje"
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this),
                                            submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e51068f39be91a6f" + " " + "success-message",
                                                children: "¡Mensaje enviado exitosamente! Te contactaremos pronto."
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 794,
                                                columnNumber: 19
                                            }, this),
                                            submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e51068f39be91a6f" + " " + "error-message",
                                                children: "Error al enviar el mensaje. Por favor intenta de nuevo."
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 800,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "jsx-e51068f39be91a6f",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e51068f39be91a6f" + " " + "grid-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-e51068f39be91a6f" + " " + "form-label",
                                                                        children: "Nombre *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 808,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "nombre",
                                                                        value: formData.nombre,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Tu nombre",
                                                                        className: "jsx-e51068f39be91a6f" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 809,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 807,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-e51068f39be91a6f" + " " + "form-label",
                                                                        children: "Apellido *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 821,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "apellido",
                                                                        value: formData.apellido,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Tu apellido",
                                                                        className: "jsx-e51068f39be91a6f" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 822,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 820,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 806,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e51068f39be91a6f" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-label",
                                                                children: "Email de Contacto *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                placeholder: "tu@email.com",
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-input"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e51068f39be91a6f" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-label",
                                                                children: "Mensaje *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 848,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                name: "mensaje",
                                                                value: formData.mensaje,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                placeholder: "Cuéntanos sobre tu empresa y qué tipo de talento necesitas...",
                                                                className: "jsx-e51068f39be91a6f" + " " + "form-textarea"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 849,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isSubmitting,
                                                        className: "jsx-e51068f39be91a6f" + " " + "btn-primary w-full flex items-center justify-center gap-2",
                                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-e51068f39be91a6f" + " " + "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 866,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Enviando..."
                                                            ]
                                                        }, void 0, true) : 'Enviar Mensaje'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 805,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 788,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 783,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 734,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e51068f39be91a6f" + " " + "section-spacing bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e51068f39be91a6f" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "contact-header",
                            className: "jsx-e51068f39be91a6f" + " " + `text-center mb-16 ${visibleElements.has('contact-header') ? 'animate-fade-up' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-4xl font-black text-slate-900 mb-6",
                                    children: "Múltiples Formas de Contactarnos"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 888,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-lg text-slate-600 max-w-3xl mx-auto",
                                    children: "Elige la forma que más te convenga para iniciar una conversación con nuestro equipo."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 891,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 883,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e51068f39be91a6f" + " " + "grid-3",
                            children: contactInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: `contact-${index}`,
                                    style: {
                                        animationDelay: `${index * 0.2}s`
                                    },
                                    className: "jsx-e51068f39be91a6f" + " " + `contact-card ${visibleElements.has(`contact-${index}`) ? 'animate-scale-in' : 'opacity-0'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: info.icon,
                                            alt: info.title,
                                            width: 48,
                                            height: 48,
                                            className: "mx-auto mb-4 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-e51068f39be91a6f" + " " + "text-xl font-bold text-slate-900 mb-3",
                                            children: info.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 914,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: info.link,
                                            className: "jsx-e51068f39be91a6f" + " " + "text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors",
                                            children: info.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 917,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 898,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 896,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 882,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e51068f39be91a6f" + " " + "section-spacing bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e51068f39be91a6f" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "offices-header",
                            className: "jsx-e51068f39be91a6f" + " " + `text-center mb-16 ${visibleElements.has('offices-header') ? 'animate-fade-up' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-4xl font-black text-slate-900 mb-6",
                                    children: "Nuestras Oficinas en México"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 937,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-lg text-slate-600 max-w-3xl mx-auto",
                                    children: "Presencia nacional con oficinas estratégicamente ubicadas para servir mejor a nuestros clientes."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 940,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 932,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e51068f39be91a6f" + " " + "grid-3",
                            children: offices.map((office, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: `office-${index}`,
                                    style: {
                                        animationDelay: `${index * 0.2}s`
                                    },
                                    className: "jsx-e51068f39be91a6f" + " " + `office-card ${visibleElements.has(`office-${index}`) ? 'animate-slide-bottom' : 'opacity-0'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e51068f39be91a6f" + " " + "relative h-48",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: office.image,
                                                alt: `Oficina ${office.city}`,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 957,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 956,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e51068f39be91a6f" + " " + "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-e51068f39be91a6f" + " " + "text-xl font-bold text-slate-900 mb-3",
                                                    children: office.city
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 965,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e51068f39be91a6f" + " " + "text-slate-600 mb-4 whitespace-pre-line",
                                                    children: office.address
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 968,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${office.phone.replace(/\s/g, '')}`,
                                                    className: "jsx-e51068f39be91a6f" + " " + "text-blue-600 font-semibold hover:text-blue-700 transition-colors",
                                                    children: office.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 971,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 947,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 945,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 931,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 930,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e51068f39be91a6f" + " " + "section-spacing bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e51068f39be91a6f" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "faq-header",
                            className: "jsx-e51068f39be91a6f" + " " + `text-center mb-16 ${visibleElements.has('faq-header') ? 'animate-fade-up' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-4xl font-black text-slate-900 mb-6",
                                    children: "Preguntas Frecuentes"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 992,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-lg text-slate-600 max-w-3xl mx-auto",
                                    children: "Encuentra respuestas rápidas a las consultas más comunes sobre nuestros servicios."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 995,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 987,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e51068f39be91a6f" + " " + "max-w-4xl mx-auto",
                            children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: `faq-${index}`,
                                    style: {
                                        animationDelay: `${index * 0.1}s`
                                    },
                                    className: "jsx-e51068f39be91a6f" + " " + `faq-item ${visibleElements.has(`faq-${index}`) ? 'animate-fade-up' : 'opacity-0'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-e51068f39be91a6f" + " " + "faq-question",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1011,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-e51068f39be91a6f" + " " + "faq-answer",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1012,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1002,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1000,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 986,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 985,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e51068f39be91a6f" + " " + "section-spacing gradient-bg text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e51068f39be91a6f" + " " + "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1021,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e51068f39be91a6f" + " " + "container relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "cta-content",
                            className: "jsx-e51068f39be91a6f" + " " + `text-center ${visibleElements.has('cta-content') ? 'animate-fade-up' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-4xl font-black mb-6",
                                    children: "¿Listo para Encontrar tu Próximo Gran Talento?"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1028,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e51068f39be91a6f" + " " + "text-xl mb-12 opacity-95 max-w-3xl mx-auto",
                                    children: "No esperes más. Contáctanos hoy y comienza a construir el equipo que llevará tu empresa al siguiente nivel."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1031,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e51068f39be91a6f" + " " + "flex flex-mobile-col gap-6 gap-mobile-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/consulta",
                                            className: "jsx-e51068f39be91a6f" + " " + "bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover-lift",
                                            children: "Consulta Gratuita"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1037,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+525512345678",
                                            className: "jsx-e51068f39be91a6f" + " " + "border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all hover-lift",
                                            children: "Llamar Ahora"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1040,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1036,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1023,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1022,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1020,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/consulta/page.js",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__156dd51d._.js.map