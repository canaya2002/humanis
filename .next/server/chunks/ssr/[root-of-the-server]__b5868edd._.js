module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/consulta/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ConsultaPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ConsultaPage() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleSections, setVisibleSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nombre: '',
        apellido: '',
        empresa: '',
        cargo: '',
        email: '',
        telefono: '',
        empleados: '',
        necesidad: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 20);
            // Parallax effects
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            parallaxElements.forEach((el)=>{
                const speed = el.dataset.parallax;
                const yPos = -(window.scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        };
        const handleMouseMove = (e)=>{
            setMousePosition({
                x: e.clientX / window.innerWidth * 100,
                y: e.clientY / window.innerHeight * 100
            });
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setVisibleSections((prev)=>new Set([
                            ...prev,
                            entry.target.id
                        ]));
                    entry.target.classList.add('section-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        document.querySelectorAll('[data-animate]').forEach((el)=>observer.observe(el));
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
    // FUNCIÓN ACTUALIZADA PARA ENVIAR A FORMSPREE
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Tu Form ID de Formspree
            const response = await fetch('https://formspree.io/f/mdkdvryw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    empresa: formData.empresa,
                    cargo: formData.cargo,
                    email: formData.email,
                    telefono: formData.telefono,
                    empleados: formData.empleados,
                    necesidad: formData.necesidad,
                    mensaje: formData.mensaje,
                    // Campo adicional para identificar el formulario
                    formulario: 'Consulta Executive Search - Humanis',
                    fecha: new Date().toLocaleString('es-MX', {
                        timeZone: 'America/Mexico_City'
                    })
                })
            });
            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    nombre: '',
                    apellido: '',
                    empresa: '',
                    cargo: '',
                    email: '',
                    telefono: '',
                    empleados: '',
                    necesidad: '',
                    mensaje: ''
                });
                setTimeout(()=>setSubmitStatus(''), 5000);
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setTimeout(()=>setSubmitStatus(''), 5000);
        } finally{
            setIsSubmitting(false);
        }
    };
    const contactMethods = [
        {
            title: 'Llamada Directa',
            subtitle: 'Respuesta Inmediata',
            value: '+52 (55) 4416-7974',
            icon: 'phone',
            link: 'tel:+525544167974',
            gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            description: 'Habla directamente con un consultor especializado',
            bgColor: '#eff6ff'
        },
        {
            title: 'Email Corporativo',
            subtitle: 'Comunicación Formal',
            value: 'contacto@humanis.com.mx',
            icon: 'email',
            link: 'mailto:contacto@humanis.com.mx',
            gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            description: 'Para propuestas y documentación oficial',
            bgColor: '#faf5ff'
        },
        {
            title: 'WhatsApp Business',
            subtitle: 'Respuesta Rápida',
            value: '+52 (55) 4416-7974',
            icon: 'whatsapp',
            link: 'https://wa.me/525544167974',
            gradient: 'linear-gradient(135deg, #059669, #10b981)',
            description: 'Chat directo con nuestro equipo comercial',
            bgColor: '#ecfdf5'
        }
    ];
    const offices = [
        {
            city: 'Ciudad de México',
            address: 'Av. Paseo de la Reforma 250, Piso 15',
            zone: 'Col. Juárez, CDMX 06600',
            phone: '+52 (55) 4416-7974',
            email: 'cdmx@humanis.com.mx',
            image: '/images/office-cdmx.jpg',
            mapUrl: 'https://maps.google.com'
        },
        {
            city: 'Guadalajara',
            address: 'Av. López Mateos Norte 2077',
            zone: 'Col. Italia Providencia, GDL 44648',
            phone: '+52 (33) 8765-4321',
            email: 'gdl@humanis.com.mx',
            image: '/images/office-guadalajara.jpg',
            mapUrl: 'https://maps.google.com'
        },
        {
            city: 'Monterrey',
            address: 'Ave. Constitución 1000, Torre A',
            zone: 'Col. Centro, MTY 64000',
            phone: '+52 (81) 5555-1234',
            email: 'mty@humanis.com.mx',
            image: '/images/office-monterrey.jpg',
            mapUrl: 'https://maps.google.com'
        }
    ];
    const processSteps = [
        {
            number: '01',
            title: 'Consulta Inicial',
            description: 'Análisis profundo de necesidades y cultura organizacional',
            icon: 'consultation'
        },
        {
            number: '02',
            title: 'Propuesta Personalizada',
            description: 'Estrategia de búsqueda y timeline detallado',
            icon: 'proposal'
        },
        {
            number: '03',
            title: 'Búsqueda Activa',
            description: 'Activación de red y headhunting especializado',
            icon: 'search'
        },
        {
            number: '04',
            title: 'Integración Exitosa',
            description: 'Acompañamiento durante los primeros 6 meses',
            icon: 'success'
        }
    ];
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Consulta Gratuita - Humanis México",
        "description": "Contacta a Humanis para una consulta gratuita sobre executive search y reclutamiento de talento ejecutivo en México.",
        "url": "https://humanis.com.mx/consulta",
        "mainEntity": {
            "@type": "Organization",
            "name": "Humanis México",
            "url": "https://humanis.com.mx",
            "logo": "https://humanis.com.mx/logo.svg",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+52-55-4416-7974",
                    "contactType": "sales",
                    "areaServed": "MX",
                    "availableLanguage": [
                        "Spanish",
                        "English"
                    ],
                    "contactOption": [
                        "TollFree",
                        "HearingImpairedSupported"
                    ]
                }
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Paseo de la Reforma 250, Piso 15",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "postalCode": "06600",
                "addressCountry": "MX"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-b6de2c647d389ee9",
                        children: "Consulta Gratuita | Humanis - Executive Search México"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Agenda una consulta gratuita con Humanis. Especialistas en executive search y reclutamiento C-Level en México. Respuesta en 24 horas, sin compromiso.",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "consulta reclutamiento, humanis contacto, executive search mexico, headhunting consulta, reclutamiento ejecutivo cdmx",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://humanis.com.mx/consulta",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Consulta Gratuita | Humanis Executive Search",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Transforma tu organización con el talento ejecutivo adecuado. Consulta gratuita sin compromiso.",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://humanis.com.mx/og-consulta.jpg",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://humanis.com.mx/consulta",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "Humanis México",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Consulta Gratuita - Humanis",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Encuentra el talento ejecutivo ideal para tu empresa",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://humanis.com.mx/twitter-consulta.jpg",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png",
                        className: "jsx-b6de2c647d389ee9"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "schema-org",
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schemaData)
                }
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b6de2c647d389ee9",
                children: '@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{color:#0f172a;background:#fff;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;overflow-x:hidden}::selection{color:#fff;background:#3b82f6}.container{max-width:1280px;margin:0 auto;padding:0 2rem}@media (width<=768px){.container{padding:0 1.25rem}}.nav-header{z-index:1000;-webkit-backdrop-filter:blur(20px);background:#fffffffa;transition:all .3s;position:fixed;top:0;left:0;right:0}.nav-header.scrolled{box-shadow:0 4px 30px #00000014}.nav-wrapper{justify-content:space-between;align-items:center;padding:1.25rem 0;display:flex}.logo-container{align-items:center;text-decoration:none;display:flex}.logo-image{width:auto;height:80px}.nav-menu{align-items:center;gap:2.5rem;display:flex}.nav-link{color:#475569;padding:.5rem 0;font-weight:500;text-decoration:none;transition:color .3s;position:relative}.nav-link:after{content:"";background:linear-gradient(90deg,#3b82f6,#1d4ed8);width:0;height:2px;transition:width .3s;position:absolute;bottom:0;left:0}.nav-link:hover{color:#1e293b}.nav-link:hover:after{width:100%}.nav-link.active{color:#3b82f6}.nav-cta{gap:1rem;display:flex}.btn{cursor:pointer;border-radius:50px;align-items:center;gap:.75rem;padding:.875rem 2rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-flex;position:relative;overflow:hidden}.btn-primary{color:#fff;background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%);border:none;box-shadow:0 4px 20px #3b82f64d}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px #3b82f666}.btn-primary:disabled{opacity:.6;cursor:not-allowed;transform:none}.btn-secondary{color:#475569;background:#fff;border:2px solid #e2e8f0}.btn-secondary:hover{color:#3b82f6;background:#f0f9ff;border-color:#3b82f6}.mobile-menu-btn{cursor:pointer;flex-direction:column;gap:6px;padding:8px;display:none}.mobile-menu-btn span{background:#475569;border-radius:2px;width:28px;height:2px;transition:all .3s}.mobile-menu-btn.active span:first-child{transform:rotate(45deg)translate(6px,6px)}.mobile-menu-btn.active span:nth-child(2){opacity:0}.mobile-menu-btn.active span:nth-child(3){transform:rotate(-45deg)translate(6px,-6px)}@media (width<=1024px){.nav-menu,.nav-cta{display:none}.mobile-menu-btn{display:flex}}.mobile-menu{opacity:0;visibility:hidden;background:#fff;padding:2rem;transition:all .3s;position:fixed;top:80px;left:0;right:0;transform:translateY(-100%);box-shadow:0 10px 40px #0000001a}.mobile-menu.active{opacity:1;visibility:visible;transform:translateY(0)}.hero{background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);align-items:center;min-height:90vh;padding:12rem 0 6rem;display:flex;position:relative;overflow:hidden}.hero-bg{opacity:.1;position:absolute;inset:0}.hero-grid{background-image:linear-gradient(#ffffff0d 1px,#0000 1px),linear-gradient(90deg,#ffffff0d 1px,#0000 1px);background-size:50px 50px;position:absolute;inset:0}.hero-wrapper{grid-template-columns:1fr 1fr;align-items:center;gap:4rem;display:grid}@media (width<=1024px){.hero-wrapper{grid-template-columns:1fr;gap:3rem}}.hero-content{z-index:10;position:relative}.hero-badge{backdrop-filter:blur(10px);background:#ffffff1a;border:1px solid #fff3;border-radius:50px;align-items:center;gap:.75rem;margin-bottom:2rem;padding:.625rem 1.5rem;display:inline-flex}.badge-dot{background:#10b981;border-radius:50%;width:8px;height:8px;animation:2s infinite pulse}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.badge-text{color:#fff;letter-spacing:.5px;font-size:.875rem;font-weight:600}.hero-title{color:#fff;margin-bottom:1.5rem;font-size:max(2.5rem,min(8vw,4.5rem));font-weight:900;line-height:1.1}.hero-gradient-text{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#60a5fa 0%,#a78bfa 100%);background-clip:text}.hero-description{color:#cbd5e1;margin-bottom:3rem;font-size:1.25rem;line-height:1.8}.form-card{background:#fff;border-radius:24px;margin-top:2rem;padding:3rem;position:relative;overflow:hidden;box-shadow:0 20px 60px #0000001a}.form-card:before{content:"";background:linear-gradient(90deg,#3b82f6,#a78bfa);height:4px;position:absolute;top:0;left:0;right:0}.form-group{margin-bottom:1.5rem}.form-label{color:#334155;text-transform:uppercase;letter-spacing:.5px;margin-bottom:.5rem;font-size:.875rem;font-weight:600;display:block}.form-input,.form-select,.form-textarea{background:#fff;border:2px solid #e2e8f0;border-radius:12px;width:100%;padding:.875rem 1.25rem;font-family:Inter,sans-serif;font-size:1rem;transition:all .3s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:#3b82f6;outline:none;box-shadow:0 0 0 4px #3b82f61a}.form-textarea{resize:vertical;min-height:120px}.form-grid{grid-template-columns:1fr 1fr;gap:1.5rem;display:grid}@media (width<=768px){.form-grid{grid-template-columns:1fr}}.contact-grid{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem;display:grid}.contact-card{background:#fff;border:2px solid #0000;border-radius:24px;padding:2.5rem;transition:all .4s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden;box-shadow:0 15px 50px #00000014}.contact-card:before{content:"";background:var(--card-gradient);transform-origin:0;height:4px;transition:transform .4s;position:absolute;top:0;left:0;right:0;transform:scaleX(0)}.contact-card:hover{border-color:#3b82f61a;transform:translateY(-10px);box-shadow:0 25px 70px #0000001f}.contact-card:hover:before{transform:scaleX(1)}.contact-icon-wrapper{background:var(--card-bg);border-radius:20px;justify-content:center;align-items:center;width:80px;height:80px;margin-bottom:1.5rem;transition:all .3s;display:flex;position:relative}.contact-card:hover .contact-icon-wrapper{transform:scale(1.05)}.contact-icon{color:#fff;z-index:2;width:40px;height:40px;position:relative}.contact-icon-bg{background:var(--card-gradient);z-index:1;border-radius:12px;position:absolute;inset:8px}.contact-title{color:#0f172a;margin-bottom:.25rem;font-size:1.4rem;font-weight:800}.contact-subtitle{color:#64748b;margin-bottom:1.25rem;font-size:.9rem;font-weight:500}.contact-value{margin-bottom:.75rem;font-size:1.2rem;font-weight:700;text-decoration:none;transition:all .3s;display:block}.contact-value:hover{transform:translate(4px)}.contact-description{color:#64748b;margin-bottom:1.5rem;font-size:.95rem;line-height:1.6}.contact-action{border-radius:12px;align-items:center;gap:.5rem;padding:.75rem 1.5rem;font-size:.9rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-flex}.office-grid{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem;display:grid}.office-card{background:#fff;border-radius:20px;transition:all .3s;overflow:hidden;box-shadow:0 15px 40px #00000014}.office-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px #0000001f}.office-image{width:100%;height:200px;position:relative;overflow:hidden}.office-content{padding:2rem}.office-city{color:#0f172a;margin-bottom:1rem;font-size:1.5rem;font-weight:800}.office-info{flex-direction:column;gap:.75rem;display:flex}.office-detail{color:#64748b;align-items:center;gap:.75rem;display:flex}.process-grid{grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;display:grid;position:relative}.process-line{opacity:.2;z-index:0;background:linear-gradient(90deg,#3b82f6,#a78bfa);height:2px;position:absolute;top:40px;left:0;right:0}.process-step{text-align:center;z-index:1;position:relative}.step-circle{color:#3b82f6;background:#fff;border:3px solid #3b82f6;border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;margin:0 auto 1.5rem;font-size:1.5rem;font-weight:900;transition:all .3s;display:flex;box-shadow:0 10px 30px #3b82f633}.process-step:hover .step-circle{transform:scale(1.1);box-shadow:0 15px 40px #3b82f64d}.section{padding:6rem 0;position:relative}.section-alt{background:#f8fafc}.section-header{text-align:center;margin-bottom:4rem}.section-badge{color:#3b82f6;letter-spacing:.5px;text-transform:uppercase;background:linear-gradient(135deg,#eff6ff 0%,#f0f9ff 100%);border-radius:50px;margin-bottom:1rem;padding:.5rem 1.25rem;font-size:.875rem;font-weight:600;display:inline-block}.section-title{color:#0f172a;margin-bottom:1.5rem;font-size:max(2rem,min(5vw,3.5rem));font-weight:900;line-height:1.2}.section-subtitle{color:#64748b;max-width:800px;margin:0 auto;font-size:1.25rem;line-height:1.8}.alert{text-align:center;border-radius:12px;margin-bottom:1.5rem;padding:1rem 1.5rem;font-weight:600;animation:.3s slideDown}@keyframes slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.alert-success{color:#fff;background:linear-gradient(135deg,#10b981,#059669)}.alert-error{color:#fff;background:linear-gradient(135deg,#ef4444,#dc2626)}.cta-section{background:linear-gradient(135deg,#1e40af 0%,#7c3aed 100%);padding:6rem 0;position:relative;overflow:hidden}.cta-pattern{background-image:radial-gradient(circle at 1px 1px,#ffffff1a 1px,#0000 1px);background-size:40px 40px;position:absolute;inset:0}.cta-content{z-index:1;text-align:center;position:relative}.footer{color:#0f172a;background:#fff;border-top:1px solid #e2e8f0;padding:4rem 0 2rem}.footer-grid{grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:3rem;margin-bottom:3rem;display:grid}.footer-brand{max-width:350px}.footer-logo{align-items:center;margin-bottom:1.5rem;display:flex}.footer-logo-image{width:auto;height:80px}.footer-description{color:#64748b;margin-bottom:1.5rem;line-height:1.8}.footer-social{gap:1rem;display:flex}.social-link{color:#64748b;background:#f1f5f9;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;transition:all .3s;display:flex}.social-link:hover{color:#fff;background:#3b82f6;transform:translateY(-2px)}.footer-column h4{color:#0f172a;margin-bottom:1.5rem;font-weight:700}.footer-links{list-style:none}.footer-link{color:#64748b;padding:.5rem 0;text-decoration:none;transition:color .3s;display:block}.footer-link:hover{color:#0f172a}.footer-bottom{border-top:1px solid #e2e8f0;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;padding-top:2rem;display:flex}.footer-copyright{color:#64748b}.footer-legal{gap:2rem;display:flex}[data-animate]{opacity:0;transform:translateY(30px)}.section-visible{animation:.8s forwards fadeInUp}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}@media (width<=768px){.section{padding:4rem 0}.contact-grid,.office-grid,.process-grid{grid-template-columns:1fr}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-b6de2c647d389ee9" + " " + `nav-header ${isScrolled ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b6de2c647d389ee9" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "nav-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "logo-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/logohumanis.png",
                                        alt: "Humanis Logo",
                                        width: 200,
                                        height: 80,
                                        className: "logo-image",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 1144,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "nav-menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "nav-link",
                                            children: "Inicio"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#servicios",
                                            className: "nav-link",
                                            children: "Servicios"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#proceso",
                                            className: "nav-link",
                                            children: "Proceso"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/por-que-nosotros",
                                            className: "nav-link",
                                            children: "¿Por qué nosotros?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/consulta",
                                            className: "nav-link active",
                                            children: "Consulta"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "nav-cta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+525544167974",
                                        className: "jsx-b6de2c647d389ee9" + " " + "btn btn-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "jsx-b6de2c647d389ee9",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                                                    className: "jsx-b6de2c647d389ee9"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1165,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1164,
                                                columnNumber: 17
                                            }, this),
                                            "Llamar Ahora"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 1163,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "jsx-b6de2c647d389ee9" + " " + `mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b6de2c647d389ee9"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b6de2c647d389ee9"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b6de2c647d389ee9"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b6de2c647d389ee9" + " " + `mobile-menu ${mobileMenuOpen ? 'active' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            },
                            className: "jsx-b6de2c647d389ee9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "nav-link",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "Inicio"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#servicios",
                                    className: "nav-link",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "Servicios"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#proceso",
                                    className: "nav-link",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "Proceso"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/por-que-nosotros",
                                    className: "nav-link",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "¿Por qué nosotros?"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/consulta",
                                    className: "nav-link active",
                                    onClick: ()=>setMobileMenuOpen(false),
                                    children: "Consulta"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '1rem'
                                    },
                                    className: "jsx-b6de2c647d389ee9",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+525544167974",
                                        style: {
                                            width: '100%'
                                        },
                                        className: "jsx-b6de2c647d389ee9" + " " + "btn btn-primary",
                                        children: "Llamar Ahora"
                                    }, void 0, false, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 1190,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b6de2c647d389ee9" + " " + "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 50%)`
                        },
                        className: "jsx-b6de2c647d389ee9" + " " + "hero-bg"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-parallax": "0.1",
                        className: "jsx-b6de2c647d389ee9" + " " + "hero-grid"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b6de2c647d389ee9" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "hero-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: "hero-content",
                                    className: "jsx-b6de2c647d389ee9" + " " + "hero-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "hero-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b6de2c647d389ee9" + " " + "badge-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b6de2c647d389ee9" + " " + "badge-text",
                                                    children: "Consulta Sin Compromiso"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "hero-title",
                                            children: [
                                                "Comienza Tu Búsqueda de ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b6de2c647d389ee9" + " " + "hero-gradient-text",
                                                    children: "Talento Ejecutivo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1211,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "hero-description",
                                            children: "Agenda una consulta gratuita con nuestros expertos en executive search. Analizaremos tus necesidades y diseñaremos una estrategia personalizada para encontrar el líder que transformará tu organización."
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(3, 1fr)',
                                                gap: '1.5rem',
                                                marginTop: '3rem'
                                            },
                                            className: "jsx-b6de2c647d389ee9",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center'
                                                    },
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '2.5rem',
                                                                fontWeight: '900',
                                                                color: 'white',
                                                                marginBottom: '0.5rem'
                                                            },
                                                            className: "jsx-b6de2c647d389ee9",
                                                            children: "24h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1222,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#94a3b8',
                                                                fontSize: '0.875rem',
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '1px'
                                                            },
                                                            className: "jsx-b6de2c647d389ee9",
                                                            children: "Respuesta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1223,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center'
                                                    },
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '2.5rem',
                                                                fontWeight: '900',
                                                                color: 'white',
                                                                marginBottom: '0.5rem'
                                                            },
                                                            className: "jsx-b6de2c647d389ee9",
                                                            children: "100%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1226,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#94a3b8',
                                                                fontSize: '0.875rem',
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '1px'
                                                            },
                                                            className: "jsx-b6de2c647d389ee9",
                                                            children: "Confidencial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1227,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: "hero-form",
                                    className: "jsx-b6de2c647d389ee9",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b6de2c647d389ee9" + " " + "form-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '1.75rem',
                                                    fontWeight: '800',
                                                    color: '#0f172a',
                                                    marginBottom: '2rem',
                                                    textAlign: 'center'
                                                },
                                                className: "jsx-b6de2c647d389ee9",
                                                children: "Solicita Tu Consulta Gratuita"
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1234,
                                                columnNumber: 17
                                            }, this),
                                            submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b6de2c647d389ee9" + " " + "alert alert-success",
                                                children: "¡Consulta agendada exitosamente! Te contactaremos en las próximas 24 horas."
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1239,
                                                columnNumber: 19
                                            }, this),
                                            submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b6de2c647d389ee9" + " " + "alert alert-error",
                                                children: "Error al enviar el formulario. Por favor intenta nuevamente."
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "jsx-b6de2c647d389ee9",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Nombre *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "nombre",
                                                                        value: formData.nombre,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Juan",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1252,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Apellido *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1266,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "apellido",
                                                                        value: formData.apellido,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Pérez",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1267,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1265,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1251,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Empresa *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1281,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "empresa",
                                                                        value: formData.empresa,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Nombre de tu empresa",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1282,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1280,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Cargo *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1294,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "cargo",
                                                                        value: formData.cargo,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "Director de RRHH",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1295,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1293,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1279,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Email Corporativo *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1309,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        name: "email",
                                                                        value: formData.email,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "juan@empresa.com",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1310,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1308,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Teléfono *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1322,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        name: "telefono",
                                                                        value: formData.telefono,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        placeholder: "+52 55 1234 5678",
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1323,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1321,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1307,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Número de Empleados"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1337,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        name: "empleados",
                                                                        value: formData.empleados,
                                                                        onChange: handleInputChange,
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-select",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "Selecciona"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1344,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1-50",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "1-50"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1345,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "51-200",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "51-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1346,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "201-500",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "201-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1347,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "501-1000",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "501-1000"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1348,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1000+",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "Más de 1000"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1349,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1338,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                        children: "Necesidad Principal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1354,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        name: "necesidad",
                                                                        value: formData.necesidad,
                                                                        onChange: handleInputChange,
                                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-select",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: "Selecciona tu necesidad"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1361,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "C-Level / Alta Dirección",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "ceo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CEO / Director General"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1364,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "coo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "COO / Director de Operaciones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1365,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cfo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CFO / Director Financiero"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1366,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cto",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CTO / Director de Tecnología"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1367,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cmo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CMO / Director de Marketing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1368,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "chro",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CHRO / Director de RRHH"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1369,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cso",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CSO / Director de Estrategia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1370,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cio",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CIO / Director de Sistemas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1371,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cdo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CDO / Director Digital"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1372,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cpo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CPO / Director de Producto"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1373,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "clo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CLO / Director Legal"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1374,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cro",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CRO / Director de Ingresos"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1375,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1363,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "VP / Vicepresidencias",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-ventas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Ventas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1379,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-marketing",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Marketing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1380,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-operaciones",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Operaciones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1381,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-finanzas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Finanzas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1382,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-rrhh",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Recursos Humanos"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1383,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-tecnologia",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Tecnología"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1384,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-desarrollo",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP de Desarrollo"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1385,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "vp-comercial",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "VP Comercial"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1386,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1378,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Directores / Gerentes",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-ventas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Ventas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1390,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-marketing",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Marketing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1391,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-operaciones",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Operaciones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1392,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-finanzas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Finanzas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1393,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-rrhh",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de RRHH"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1394,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-it",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de IT"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1395,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-supply",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Supply Chain"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1396,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-calidad",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Calidad"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1397,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-comercial",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director Comercial"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1398,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-produccion",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Producción"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1399,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-planta",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Planta"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1400,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "director-regional",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director Regional"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1401,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1389,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Gerencias Especializadas",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-general",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente General"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1405,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-ventas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Ventas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1406,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-marketing",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Marketing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1407,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-operaciones",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Operaciones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1408,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-finanzas",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Finanzas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1409,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-rrhh",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de RRHH"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1410,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-it",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de IT"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1411,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-logistica",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Logística"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1412,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-calidad",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Calidad"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1413,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-compras",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Compras"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1414,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-proyecto",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Proyectos"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1415,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "gerente-producto",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Gerente de Producto"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1416,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1404,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Posiciones Técnicas Senior",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cto-startup",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "CTO para Startup"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1420,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "lead-developer",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Lead Developer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1421,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "arquitecto-software",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Arquitecto de Software"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1422,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "data-scientist",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Data Scientist Senior"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1423,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "cybersecurity",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Ciberseguridad"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1424,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "devops-lead",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "DevOps Lead"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1425,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "ai-lead",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "AI/ML Lead"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1426,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1419,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Posiciones Especializadas",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "head-sales",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Head of Sales"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1430,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "head-marketing",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Head of Marketing"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1431,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "head-growth",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Head of Growth"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1432,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "head-people",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Head of People"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1433,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "country-manager",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Country Manager"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1434,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "plant-manager",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Plant Manager"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1435,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "regional-manager",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Regional Manager"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1436,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "business-development",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Director de Desarrollo de Negocios"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1437,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1429,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Consultoría Organizacional",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "transformacion-digital",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Transformación Digital"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1441,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "reestructuracion",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Reestructuración Organizacional"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1442,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "expansion",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Expansión de Negocio"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1443,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "merger-acquisition",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Merger & Acquisition"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1444,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "turnaround",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Turnaround Management"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1445,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "startup-team",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Equipo Fundacional Startup"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1446,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1440,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "Otros",
                                                                                className: "jsx-b6de2c647d389ee9",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "consejo-administracion",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Miembro del Consejo"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1450,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "consultoria-personalizada",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Consultoría Personalizada"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1451,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "multiple-posiciones",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Múltiples Posiciones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1452,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "otro",
                                                                                        className: "jsx-b6de2c647d389ee9",
                                                                                        children: "Otra Necesidad"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/consulta/page.js",
                                                                                        lineNumber: 1453,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/consulta/page.js",
                                                                                lineNumber: 1449,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1355,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1353,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b6de2c647d389ee9" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-label",
                                                                children: "Mensaje (Opcional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1460,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                name: "mensaje",
                                                                value: formData.mensaje,
                                                                onChange: handleInputChange,
                                                                placeholder: "Cuéntanos más sobre tus necesidades de talento ejecutivo...",
                                                                className: "jsx-b6de2c647d389ee9" + " " + "form-textarea"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/consulta/page.js",
                                                                lineNumber: 1461,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1459,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        style: {
                                                            width: '100%',
                                                            justifyContent: 'center'
                                                        },
                                                        disabled: isSubmitting,
                                                        className: "jsx-b6de2c647d389ee9" + " " + "btn btn-primary",
                                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: '20px',
                                                                        height: '20px',
                                                                        border: '2px solid white',
                                                                        borderTopColor: 'transparent',
                                                                        borderRadius: '50%',
                                                                        animation: 'spin 1s linear infinite'
                                                                    },
                                                                    className: "jsx-b6de2c647d389ee9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 1478,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Enviando..."
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Agendar Consulta Gratuita",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-b6de2c647d389ee9",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 12h14M12 5l7 7-7 7",
                                                                        className: "jsx-b6de2c647d389ee9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/consulta/page.js",
                                                                        lineNumber: 1485,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 1484,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1470,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 1233,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b6de2c647d389ee9" + " " + "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b6de2c647d389ee9" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "contact-header",
                            className: "jsx-b6de2c647d389ee9" + " " + "section-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-badge",
                                    children: "Contacto Directo"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1500,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-title",
                                    children: "Múltiples Canales de Comunicación"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-subtitle",
                                    children: "Elige el método que prefieras para iniciar una conversación con nuestro equipo de expertos."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1502,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "contact-grid",
                            children: contactMethods.map((method, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-animate": true,
                                    id: `contact-${index}`,
                                    style: {
                                        '--card-gradient': method.gradient,
                                        '--card-bg': method.bgColor
                                    },
                                    className: "jsx-b6de2c647d389ee9" + " " + "contact-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-icon-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b6de2c647d389ee9" + " " + "contact-icon-bg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1520,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b6de2c647d389ee9" + " " + "contact-icon",
                                                    children: [
                                                        method.icon === 'phone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                                                            className: "jsx-b6de2c647d389ee9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1523,
                                                            columnNumber: 23
                                                        }, this),
                                                        method.icon === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                                    className: "jsx-b6de2c647d389ee9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 1527,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "22,6 12,13 2,6",
                                                                    className: "jsx-b6de2c647d389ee9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/consulta/page.js",
                                                                    lineNumber: 1528,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        method.icon === 'whatsapp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
                                                            className: "jsx-b6de2c647d389ee9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/consulta/page.js",
                                                            lineNumber: 1532,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1521,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-title",
                                            children: method.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-subtitle",
                                            children: method.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: method.link,
                                            style: {
                                                color: method.gradient.includes('3b82f6') ? '#3b82f6' : method.gradient.includes('8b5cf6') ? '#8b5cf6' : '#059669'
                                            },
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-value",
                                            children: method.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1540,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-description",
                                            children: method.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1548,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: method.link,
                                            style: {
                                                background: method.bgColor,
                                                color: method.gradient.includes('3b82f6') ? '#3b82f6' : method.gradient.includes('8b5cf6') ? '#8b5cf6' : '#059669'
                                            },
                                            className: "jsx-b6de2c647d389ee9" + " " + "contact-action",
                                            children: [
                                                method.icon === 'phone' && 'Llamar Ahora',
                                                method.icon === 'email' && 'Enviar Email',
                                                method.icon === 'whatsapp' && 'Abrir WhatsApp',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 17L17 7M17 7H7M17 7V17",
                                                        className: "jsx-b6de2c647d389ee9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1562,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1561,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1550,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1509,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1507,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 1498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b6de2c647d389ee9" + " " + "section section-alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b6de2c647d389ee9" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-animate": true,
                            id: "process-header",
                            className: "jsx-b6de2c647d389ee9" + " " + "section-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-badge",
                                    children: "Proceso"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1574,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-title",
                                    children: "Cómo Trabajamos Contigo"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1575,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "section-subtitle",
                                    children: "Un proceso transparente y eficiente diseñado para maximizar resultados."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1576,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1573,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "process-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "process-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1582,
                                    columnNumber: 13
                                }, this),
                                processSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-animate": true,
                                        id: `process-${index}`,
                                        className: "jsx-b6de2c647d389ee9" + " " + "process-step",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b6de2c647d389ee9" + " " + "step-circle",
                                                children: step.number
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1585,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.25rem',
                                                    fontWeight: '700',
                                                    color: '#0f172a',
                                                    marginBottom: '0.75rem'
                                                },
                                                className: "jsx-b6de2c647d389ee9",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1586,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#64748b',
                                                    lineHeight: '1.6'
                                                },
                                                className: "jsx-b6de2c647d389ee9",
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1589,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/consulta/page.js",
                                        lineNumber: 1584,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1581,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 1572,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1571,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b6de2c647d389ee9" + " " + "cta-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b6de2c647d389ee9" + " " + "cta-pattern"
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1599,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b6de2c647d389ee9" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "cta-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                        fontWeight: '900',
                                        color: 'white',
                                        marginBottom: '1.5rem'
                                    },
                                    className: "jsx-b6de2c647d389ee9",
                                    children: "¿Listo para Transformar tu Equipo Ejecutivo?"
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1.25rem',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        marginBottom: '3rem',
                                        maxWidth: '700px',
                                        margin: '0 auto 3rem'
                                    },
                                    className: "jsx-b6de2c647d389ee9",
                                    children: "No esperes más. Cada día sin el talento adecuado es una oportunidad perdida. Comienza hoy con una consulta gratuita y sin compromiso."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1605,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1.25rem',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    },
                                    className: "jsx-b6de2c647d389ee9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#hero-form",
                                            style: {
                                                background: 'white',
                                                color: '#1e40af',
                                                padding: '1rem 2rem'
                                            },
                                            className: "jsx-b6de2c647d389ee9" + " " + "btn",
                                            children: [
                                                "Completar Formulario",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 7l10 10M17 7v10H7",
                                                        className: "jsx-b6de2c647d389ee9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1617,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1616,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+525544167974",
                                            style: {
                                                border: '2px solid white',
                                                color: 'white',
                                                padding: '1rem 2rem'
                                            },
                                            className: "jsx-b6de2c647d389ee9" + " " + "btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72",
                                                        className: "jsx-b6de2c647d389ee9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1626,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1625,
                                                    columnNumber: 17
                                                }, this),
                                                "Llamar: (55) 4416-7974"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1620,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1609,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1601,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/consulta/page.js",
                        lineNumber: 1600,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1598,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "jsx-b6de2c647d389ee9" + " " + "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b6de2c647d389ee9" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "footer-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-logo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/logohumanis.png",
                                                alt: "Humanis Logo",
                                                width: 240,
                                                height: 96,
                                                className: "footer-logo-image",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1640,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1639,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-description",
                                            children: "Firma líder en executive search y consultoría de talento en México. Transformamos organizaciones conectando líderes excepcionales con empresas extraordinarias."
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1649,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-social",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://linkedin.com/company/humanis-mexico",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "LinkedIn",
                                                className: "jsx-b6de2c647d389ee9" + " " + "social-link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                                        className: "jsx-b6de2c647d389ee9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1662,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1661,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/consulta/page.js",
                                                lineNumber: 1654,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1653,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1638,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-b6de2c647d389ee9",
                                            children: "Enlaces Rápidos"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1669,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-links",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        className: "footer-link",
                                                        children: "Inicio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1671,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1671,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/#servicios",
                                                        className: "footer-link",
                                                        children: "Servicios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1672,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1672,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/#proceso",
                                                        className: "footer-link",
                                                        children: "Proceso"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1673,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1673,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/por-que-nosotros",
                                                        className: "footer-link",
                                                        children: "¿Por qué Humanis?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1674,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1670,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1668,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-b6de2c647d389ee9",
                                            children: "Páginas"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1679,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-links",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/consulta",
                                                        className: "footer-link",
                                                        children: "Consulta Gratuita"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1681,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1681,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/por-que-nosotros",
                                                        className: "footer-link",
                                                        children: "¿Por qué nosotros?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1682,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1682,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1680,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1678,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-b6de2c647d389ee9",
                                            children: "Contacto Principal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-b6de2c647d389ee9" + " " + "footer-links",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+525544167974",
                                                        className: "jsx-b6de2c647d389ee9" + " " + "footer-link",
                                                        children: "+52 (55) 4416-7974"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1690,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1689,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:contacto@humanis.com.mx",
                                                        className: "jsx-b6de2c647d389ee9" + " " + "footer-link",
                                                        children: "contacto@humanis.com.mx"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/consulta/page.js",
                                                        lineNumber: 1695,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1694,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-link",
                                                    children: "Lun - Vie: 9:00 - 18:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/consulta/page.js",
                                                    lineNumber: 1699,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1686,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1637,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b6de2c647d389ee9" + " " + "footer-bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-copyright",
                                    children: "© 2025 Humanis México. Todos los derechos reservados."
                                }, void 0, false, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1707,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b6de2c647d389ee9" + " " + "footer-legal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacidad",
                                            className: "footer-link",
                                            children: "Aviso de Privacidad"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1711,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/terminos",
                                            className: "footer-link",
                                            children: "Términos y Condiciones"
                                        }, void 0, false, {
                                            fileName: "[project]/app/consulta/page.js",
                                            lineNumber: 1712,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/consulta/page.js",
                                    lineNumber: 1710,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/consulta/page.js",
                            lineNumber: 1706,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/consulta/page.js",
                    lineNumber: 1636,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/consulta/page.js",
                lineNumber: 1635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b5868edd._.js.map